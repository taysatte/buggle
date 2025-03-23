import { NextResponse } from "next/server";
import { execute } from "@/lib/piston";
import { transpileCode } from "@/lib/transpile";
import vm from "vm";

export async function POST(request: Request) {
  try {
    // Extract language and sourceCode from the request body.
    const { language, sourceCode } = await request.json();

    // Check if any of the required parameters are missing.
    if (!language || !sourceCode) {
      return NextResponse.json(
        { error: "Missing language or sourceCode" },
        { status: 400 },
      );
    }

    // Execute the user's code using the Piston API.
    const pistonResult = await execute(language, sourceCode);

    // Transpile the user's source code.
    const transpiledCode = transpileCode(sourceCode);

    // If transpilation fails, return a 400 error.
    if (!transpiledCode) {
      return NextResponse.json(
        { error: "Transpilation failed" },
        { status: 400 },
      );
    }

    // Create a new virtual machine context to isolate code execution.
    const context = { output: null };

    try {
      // Execute the transpiled code in the isolated context.
      vm.runInNewContext(`${transpiledCode};`, context);
    } catch (vmError) {
      // Handle any errors during VM execution.
      console.error("VM error:", vmError);
      return NextResponse.json(
        { error: "VM execution error" },
        { status: 500 },
      );
    }

    // Return the Piston API result and the output from the virtual machine execution.
    return NextResponse.json({
      pistonResult,
      vmOutput: context.output,
    });
  } catch (error) {
    // Handle any errors during the API route execution.
    console.error("Error executing code:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
