const addTwoNumbers = (
  a: number,
  b: number,
  showResult: boolean,
  phrase: string
) => {
  if (showResult) console.log(phrase, a + b);
};

addTwoNumbers(9, 4.5, true, "Result is: ");
