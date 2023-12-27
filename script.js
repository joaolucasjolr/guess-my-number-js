'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.message').textContent = '📈 Too high!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game 😿 Try again!';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.message').textContent = '📉 Too low';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game 😿 Try again!';
    }
  }
});
