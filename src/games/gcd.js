import { cons } from 'hexlet-pairs';
import { generalGame } from '..';

const describeGcd = 'Find the greatest common divisor of given numbers.';

const gcd1 = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return (num2, num1 % num2);
};
const checkGcd = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const nums = `${a} ${b}`;
  const divisor = gcd1(a, b);
  return cons(nums, divisor);
};

const gcd = () => generalGame(describeGcd, checkGcd);
export default gcd;
