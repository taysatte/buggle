import { NextResponse } from "next/server";
import { execute } from "@/lib/piston";
import { TEST_CHALLENGES } from "@/constants";
import { transpileCode } from "@/lib/transpile";
import vm from "vm";

export async function POST(request: Request) {
  try {
    // Extract language, sourceCode, and challengeId from the request body.
    const { language, sourceCode, challengeId } = await request.json();

    // Check if any of the required parameters are missing.
    if (!language || !sourceCode || !challengeId) {
      return NextResponse.json(
        { error: "Missing language, sourceCode, or challengeId" },
        { status: 400 },
      );
    }

    // Find the challenge associated with the provided challengeId.
    const challenge = TEST_CHALLENGES.find((c) => c.id === challengeId);

    // If the challenge is not found, return a 404 error.
    if (!challenge) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 },
      );
    }

    // Execute the user's code using the Piston API.
    const pistonResult = await execute(language, sourceCode);

    // Initialize the testsPassed flag to true.
    let testsPassed = true;

    // Iterate through each test case in the challenge.
    for (const testCase of challenge.testCases) {
      try {
        // Transpile the user's source code.
        const transpiledCode = transpileCode(sourceCode);

        // If transpilation fails, set testsPassed to false and break the loop.
        if (!transpiledCode) {
          testsPassed = false;
          break;
        }

        // Create a new virtual machine context to isolate code execution.
        const context = { output: null };

        // Execute the transpiled code in the isolated context.
        // The code assigns the result of the test case input to the 'output' variable.
        vm.runInNewContext(
          `${transpiledCode}; output = ${testCase.input};`,
          context,
        );

        // Compare the executed output with the expected output.
        if (context.output !== testCase.expectedOutput) {
          testsPassed = false;
          break;
        }
      } catch (vmError) {
        // Handle any errors during VM execution.
        console.error("VM error:", vmError);
        testsPassed = false;
        break;
      }
    }

    // Return the Piston API result and the test results.
    return NextResponse.json({
      pistonResult,
      testsPassed,
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
