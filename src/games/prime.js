import { cons } from 'hexlet-pairs';
import { generalGame } from '..';
import findRandomnNum from './randomNum';

const describePrime = 'Answer "yes" if number prime otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let result = 2;
  while (num % result !== 0) {
    result += 1;
  }
  return result === num;
};

const checkPrime = () => {
  const num = findRandomnNum();
  const correct = isPrime(num) ? 'yes' : 'no';
  return cons(num, correct);
};

export default () => generalGame(describePrime, checkPrime);
