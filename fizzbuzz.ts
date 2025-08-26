// Write a program that prints the numbers from 1 to 100 (or any given number). But for multiples of:
// 3 → print "Fizz" instead of the number
// 5 → print "Buzz" instead of the number
// Both 3 and 5 (i.e., multiples of 15) → print "FizzBuzz"

// Fixed version of your FizzBuzz
const fizzBuzz = (maxNum) => {
  [...Array(maxNum)].forEach((_, index) => {
    const num = index + 1; // Start from 1, not 0

    const isFizz = (num) => num % 3 === 0;
    const isBuzz = (num) => num % 5 === 0;

    if (isFizz(num) && isBuzz(num)) {
      console.log("FizzBuzz");
    } else if (isFizz(num)) {
      console.log("Fizz");
    } else if (isBuzz(num)) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  });
};

// Alternative cleaner version
const fizzBuzzClean = (maxNum) => {
  for (let i = 1; i <= maxNum; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
  }
};

// One-liner functional approach
const fizzBuzzOneLiner = (maxNum) =>
  [...Array(maxNum)].map((_, i) =>
    ++i % 15 === 0
      ? "FizzBuzz"
      : i % 3 === 0
      ? "Fizz"
      : i % 5 === 0
      ? "Buzz"
      : i
  );

// Test them out
console.log("=== forEach version ===");
fizzBuzz(15);

console.log("\n=== Clean version ===");
fizzBuzzClean(15);

console.log("\n=== One-liner (returns array) ===");
console.log(fizzBuzzOneLiner(15));
