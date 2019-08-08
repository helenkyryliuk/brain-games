import { cons } from 'hexlet-pairs';
import { generalGame } from '..';

const describeBalance = 'Balance the given number.';

const balance1 = (x, min, max) => {
  const arr = x;
  arr[arr.indexOf(min)] += 1;
  arr[arr.indexOf(max)] -= 1;
  return arr.sort().join('');
};
const checkBalance1 = (str) => {
  const arr = str.split('').map(e => Number(e));
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  if (max - min > 1) {
    return checkBalance1(balance1(arr, min, max));
  }
  return str;
};
const checkBalance = () => {
  const a = Math.floor(Math.random() * 10000);
  const num = String(a);
  return cons(num, checkBalance1(num));
};
export default () => generalGame(describeBalance, checkBalance);


//This is the change from Neil
//Another comment
