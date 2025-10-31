import { NextRequest, NextResponse } from "next/server";
import {
  getLanguageVersion,
  isSupportedLanguage,
} from "@/lib/languageVersions";
import { getPistonApiUrl } from "@/lib/pistonApi";

/**
 * Piston API execution endpoint
 * Handles code execution requests
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, language } = body;

    // Validate input
    if (!code || !language) {
      return NextResponse.json(
        { error: "Code and language are required" },
        { status: 400 }
      );
    }

    // Check if language is supported and get version
    if (!isSupportedLanguage(language)) {
      return NextResponse.json(
        { error: `Unsupported language: ${language}` },
        { status: 400 }
      );
    }

    // Get version for language
    const version = getLanguageVersion(language);
    if (!version) {
      return NextResponse.json(
        { error: `No version found for language: ${language}` },
        { status: 500 }
      );
    }

    // Get Piston API URL from environment variable and endpoint path
    // Set PISTON_API_URL in .env.local for local development
    const executeUrl = getPistonApiUrl("EXECUTE");

    const response = await fetch(executeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language,
        version,
        files: [
          {
            content: code,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Piston API error: ${response.statusText}`);
    }

    const result = await response.json();

    return NextResponse.json({
      output: result.run?.stdout?.split("\n") || [],
      error: result.run?.stderr || null,
      exitCode: result.run?.code || 0,
    });
  } catch (error) {
    console.error("Execution error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Execution failed",
      },
      { status: 500 }
    );
  }
}
