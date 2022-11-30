'use strict';

let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let number = Number(document.querySelector('.guess').value);
  if (!number) {
    displayMessage('🐱‍👤 Enter a guess you must!');
  } else if (number !== secretNumber) {
    if (score > 1) {
      displayMessage(number < secretNumber ? '📉 To low...' : '📈 To high...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (number === secretNumber) {
    displayMessage('🐱‍🏍 Winner winner CHICKEN DINNER!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelectorAll('.number').width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').width = '15rem';
  document.querySelector('.guess').value = '';
});
