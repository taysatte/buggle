// src/app/api/execute/route.ts

import { NextResponse } from "next/server";
import { execute } from "@/lib/piston";
import { challenges } from "@/lib/challenges";

export async function POST(request: Request) {
  try {
    const { language, sourceCode, challengeId } = await request.json();

    if (!language || !sourceCode || !challengeId) {
      return NextResponse.json(
        { error: "Missing language, sourceCode, or challengeId" },
        { status: 400 },
      );
    }

    const challenge = challenges.find((c) => c.id === challengeId);

    if (!challenge) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 },
      );
    }

    const pistonResult = await execute(language, sourceCode);

    let testsPassed = true;
    for (const testCase of challenge.testCases) {
      try {
        const userResult = eval(`${sourceCode} ${testCase.input}`);
        if (userResult !== testCase.expectedOutput) {
          testsPassed = false;
          break;
        }
      } catch (evalError) {
        console.error("Eval error:", evalError);
        testsPassed = false;
        break;
      }
    }

    return NextResponse.json({
      pistonResult,
      testsPassed,
    });
  } catch (error) {
    console.error("Error executing code:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
