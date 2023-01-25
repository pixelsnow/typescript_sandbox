// Code goes here!
console.log("Welcome to TS World!");

// Exclamation mark means it's not NULL
const button = document.querySelector("button")!;

const add = (a: number, b: number = 4): number => a + b;

const multiply = (a: number, b: number): number => a * b;

const divide = (a: number, b: number): number => {
  if (b) return a / b;
  console.log("second number can't be 0!");
  return NaN;
};

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

button.addEventListener("click", () => console.log(add(1, 7)));

printOutput(add(3));

let numbers = [1, 5, 7];
numbers = [...numbers, ...numbers];
console.log(numbers);
