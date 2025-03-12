import * as babel from "@babel/core";
import presetEnv from "@babel/preset-env";

export const transpileCode = (code: string) => {
  try {
    const result = babel.transformSync(code, {
      presets: [presetEnv],
    });
    if (result && result.code) {
      return result.code;
    }
    return null;
  } catch (error) {
    console.error("Transpilation error:", error);
    return null;
  }
};
