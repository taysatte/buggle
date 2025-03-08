"use client";

import CodeEditor from "@/app/components/CodeEditor";
import SubmitButton from "./components/SubmitButton";

export default function App() {
  const theme = "vs-dark";
  const problem =
    "// Sample Buggle Challenge - JavaScript\n" +
    "\n" +
    "// Description: This function should calculate the sum of all numbers in an array.\n" +
    "// Bug: There's a subtle error in the loop condition.\n" +
    "\n" +
    "function sumArray(numbers) {\n" +
    "  let total = 0;\n" +
    "  for (let i = 1; i <= numbers.length; i++) { // Bug is here!\n" +
    "    total += numbers[i];\n" +
    "  }\n" +
    "  return total;\n" +
    "}\n" +
    "\n" +
    "// Example usage:\n" +
    "const myArray = [1, 2, 3, 4, 5];\n" +
    "const result = sumArray(myArray);\n" +
    "console.log(result); // Should be 15, but it won't be\n" +
    "\n" +
    "// Expected Output: 15";

  return (
    <>
      <div className="flex items-center justify-start h-screen w-1/2 py-4">
        <CodeEditor code={problem} theme={theme} />
        <SubmitButton />
      </div>
    </>
  );
}

