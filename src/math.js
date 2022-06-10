const add = (num1, num2) => {
  if (num1 === undefined && num2 === undefined) {
    throw new Error("Arguments are missing");
  }
  return +num1 + +num2;
};
const subtract = (num1, num2) => num1 - num2;

export { add, subtract };
