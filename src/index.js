import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const generalGame = (description, questionAndanswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!\n `);
  for (let i = 0; i < 3; i += 1) {
    const check = questionAndanswer();
    const answer = readlineSync.question(`\nQuestion: ${car(check)}  \nYour answer: `, {
      trueValue: [cdr(check)],
    });
    if (answer === true) {
      console.log('\nCorrect!');
    } else {
      return console.log(`\n"${answer}" is wrong answer. Correct answer was "${cdr(check)}"\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default generalGame;
