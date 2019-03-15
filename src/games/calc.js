import { cons } from 'hexlet-pairs';
import { generalGame } from '..';

const describeCalc = 'What is the result of the expression?';

const checkCalc = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const c = Math.floor(Math.random() * 3);
  let ask;
  let count;
  if (c === 0) {
    ask = `${a} + ${b}`;
    count = a + b;
  } else if (c === 1) {
    ask = `${a} - ${b}`;
    count = a - b;
  } else {
    ask = `${a} * ${b}`;
    count = a * b;
  }
  return cons(ask, count);
};

export default () => generalGame(describeCalc, checkCalc);
