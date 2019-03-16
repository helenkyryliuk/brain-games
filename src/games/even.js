import { cons } from 'hexlet-pairs';
import { generalGame } from '..';
import findRandomnNum from './randomNum';

const describeEven = 'Answer "yes" if number even otherwise answer "no".';

const isEven = x => x % 2 === 0;
const checkEven = () => {
  const num = findRandomnNum();
  const correct = isEven(num) ? 'yes' : 'no';
  return cons(num, correct);
};

const even = () => generalGame(describeEven, checkEven);
export default even;
