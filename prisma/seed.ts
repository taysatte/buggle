import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create the "Sum Array" puzzle
  const puzzle = await prisma.puzzle.create({
    data: {
      title: "Sum Array",
      description: `Fix the off-by-one error in the sumArray function.

The function is supposed to sum all numbers in an array, but there's a bug in the loop condition. 

**Instructions:**
- Fix the bug in the sumArray function
- Make sure all test cases pass
- The function should work for any array of numbers`,

      starterCode: `function sumArray(numbers) {
  let total = 0;

  // The bug is hidden in the loop condition
  for (let i = 0; i <= numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// Test your solution
console.log(sumArray([1, 2, 3])); // Expected: 6
console.log(sumArray([10, 5])); // Expected: 15
console.log(sumArray([-1, 0, 1])); // Expected: 0`,

      solutionCode: `function sumArray(numbers) {
  let total = 0;

  // Fixed: Changed <= to < to avoid accessing index out of bounds
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}`,

      difficulty: "easy",
      language: "javascript",
      hints: `💡 **Hint 1:** Look at the loop condition. What happens when i equals numbers.length?

💡 **Hint 2:** Remember that array indices start at 0. If an array has 3 elements, valid indices are 0, 1, and 2.

💡 **Hint 3:** Try running the code and see what error you get. That should point you in the right direction!`,

      testCases: {
        create: [
          // Public test cases (visible to users)
          {
            input: "[1, 2, 3]",
            expectedOutput: "6",
            isPublic: true,
          },
          {
            input: "[10, 5]",
            expectedOutput: "15",
            isPublic: true,
          },
          {
            input: "[-1, 0, 1]",
            expectedOutput: "0",
            isPublic: true,
          },
          // Hidden test cases (for validation only)
          {
            input: "[]",
            expectedOutput: "0",
            isPublic: false,
          },
          {
            input: "[5]",
            expectedOutput: "5",
            isPublic: false,
          },
          {
            input: "[-10, -5, -3]",
            expectedOutput: "-18",
            isPublic: false,
          },
          {
            input: "[100, 200, 300, 400, 500]",
            expectedOutput: "1500",
            isPublic: false,
          },
        ],
      },
    },
    include: {
      testCases: true,
    },
  });

  console.log(`✅ Created puzzle: "${puzzle.title}" (ID: ${puzzle.id})`);
  console.log(
    `   - Public test cases: ${
      puzzle.testCases.filter((tc) => tc.isPublic).length
    }`
  );
  console.log(
    `   - Hidden test cases: ${
      puzzle.testCases.filter((tc) => !tc.isPublic).length
    }`
  );
  console.log(`   - Total test cases: ${puzzle.testCases.length}`);
  console.log("🎉 Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
