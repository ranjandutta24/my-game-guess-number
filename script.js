'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(number);
// document.querySelector(`.number`).textContent = number;

document.querySelector(`.check`).addEventListener(`click`, () => {
  const guess = +document.querySelector(`.guess`).value;
  console.log(typeof guess);

  // No input //
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔ No Number`;
  }

  // Win Case //
  else if (guess === number) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = number;
    if (highScore < score) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }

  // High Guess //
  else if (guess > number) {
    if (score > 0) {
      document.querySelector(`.message`).textContent = `📈 Too High`;
      score--;
      document.querySelector(`.score`).textContent = score;
    }
    if (score === 0) {
      return (document.querySelector(
        `.message`
      ).textContent = `😝 You lost the game!`);
    }
  }

  // Low Guess //
  else if (guess < number) {
    if (score > 0) {
      document.querySelector(`.message`).textContent = `📉 Too Low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    }
    if (score === 0) {
      return (document.querySelector(
        `.message`
      ).textContent = `😝 You lost the game!`);
    }
  }
});
document.querySelector(`.again`).addEventListener(`click`, () => {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  score = 20;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = '';
  document.querySelector(`.message`).textContent = ` Start Guessing...`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = '?';
});
