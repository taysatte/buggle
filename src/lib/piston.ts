import { LANGUAGE_VERSIONS } from "@/constants";

type Language = keyof typeof LANGUAGE_VERSIONS;

export const execute = async (language: Language, sourceCode: string) => {
  try {
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: language,
        version: LANGUAGE_VERSIONS[language],
        files: [
          {
            content: sourceCode,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error executing code:", error);
    throw error; // Rethrow the error to be handled by the caller.
  }
};
