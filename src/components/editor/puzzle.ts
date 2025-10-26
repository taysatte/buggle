export const puzzle = `function sumArray(numbers) {
  let total = 0;

  // The bug is hidden in the loop condition
  for (let i = 0; i <= numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// Test cases
console.log(sumArray([1, 2, 3])); // Expected: 6, Got: ???
console.log(sumArray([10, 5])); // Expected: 15, Got: ???
  `;
