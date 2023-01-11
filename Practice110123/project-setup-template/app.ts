const addTwoNumbers = (
  a: number,
  b: number,
  showResult: boolean,
  phrase: string
) => {
  console.log(phrase);
  if (showResult) console.log(a + b);
};

addTwoNumbers(9, 4.5, true, "hey!");
