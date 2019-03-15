import { cons } from 'hexlet-pairs';
import { generalGame } from '..';

const describeEven = 'Answer "yes" if number even otherwise answer "no".';

const isEven = x => x % 2 === 0;
const checkEven = () => {
  const num = Math.floor(Math.random() * 100);
  const correct = isEven(num) ? 'yes' : 'no';
  return cons(num, correct);
};

const even = () => generalGame(describeEven, checkEven);
export default even;
