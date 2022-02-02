'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const updateHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('✏️ Enter Number');
  }

  // If guess is right
  else if (guess === secretNumber) {
    displayMessage('🎊 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      updateHighscore(highscore);
    }
  }

  // If guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too Low');
      score--;
      updateScore(score);
    } else {
      displayMessage('☠️ You lose !!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#7d2ecc';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  updateScore(score);
  displayMessage('Start guessing...');
  updateHighscore(highscore);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
