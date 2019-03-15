import { cons, car, cdr } from 'hexlet-pairs';
import { generalGame } from '..';

const describeProgression = 'What number is missing in this progression?';

const choose = () => Math.floor(Math.random() * ((10 - 1) + 1));
const progress = (x, y) => {
  const result = [];
  for (let i = 1; i < 11; i += 1) {
    result.push(x + (y * i));
  }
  const hidden = choose();
  const element = result[hidden];
  result[hidden] = '..';
  return cons(result.join(' '), element);
};
const checkProgression = () => {
  const check = progress(choose(), choose() + 2);
  return cons(car(check), cdr(check));
};

export default () => generalGame(describeProgression, checkProgression);
