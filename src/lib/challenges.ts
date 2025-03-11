export const challenges = [
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
