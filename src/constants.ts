import { Challenge } from "./types/challenge";

export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const TEST_CHALLENGES: Challenge[] = [
  {
    id: "sum-array",
    title: "Sum Array",
    description:
      "Calculate the sum of all numbers in an array. Fix the bug in the loop condition.",
    initialCode:
      "function sumArray(numbers) {\n" +
      "  let total = 0;\n" +
      "  for (let i = 1; i <= numbers.length; i++) { // Bug is here!\n" +
      "    total += numbers[i];\n" +
      "  }\n" +
      "  return total;\n" +
      "}",
    testCases: [
      { input: "sumArray([1, 2, 3, 4, 5])", expectedOutput: 15 },
      { input: "sumArray([0, 0, 0])", expectedOutput: 0 },
      { input: "sumArray([-1, 1, 2])", expectedOutput: 2 },
      { input: "sumArray([10])", expectedOutput: 10 },
      { input: "sumArray([])", expectedOutput: 0 },
    ],
    language: "javascript",
  },
];

export const THEME_BASE = "vs-dark";
export const TEST_LANG = "javascript";
