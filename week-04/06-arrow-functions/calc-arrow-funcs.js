const a = 64;
const b = 8;

const multiply1 = (a, b) => {
  return a * b;
};

const multiply1Msg = (a, b) =>
  console.log(`The multiplication of ${a} and ${b} is: ${multiply1}`);

// function multiply1Invokation(multiply1, )

multiply1Msg(64, 8);

const multiply2 = (a, b) => a * b;

const add = (a, b) => {
  result = a + b;
  console.log(`The addition of ${a} and ${b} is: ${result}`);
  return a + b;
};

add(6, 16);
