import readlineSync from 'readline-sync';
import { userName, getRandomNumber } from '../index.js';

const rounds = 3;

console.log('What number is missing in the progression?');

const searchProgressing = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const step = getRandomNumber(2, 10);
    const getRandomProgressionLength = getRandomNumber(5, 10);

    let result;
    const massive = [firstNumber];
    for (let j = 1; j <= getRandomProgressionLength; j += 1) {
      result = firstNumber + (j * step);
      massive.push(result);
    }

    const getRandomIndexOfMassive = massive[Math.floor(Math.random() * massive.length)];
    const numberToString = getRandomIndexOfMassive.toString();
    // console.log(numberToString);

    const hideIndex = massive.indexOf(getRandomIndexOfMassive);
    massive[hideIndex] = '..';
    const str = massive.join(' ');

    console.log(`Question: ${str}`);
    const askAnswer = readlineSync.question('Your answer: ');

    if (askAnswer === numberToString) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${getRandomIndexOfMassive}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default searchProgressing;
