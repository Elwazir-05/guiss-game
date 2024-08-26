'use strict';

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// document.querySelector('.Number').textContent = SecretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    alert('فين الرقم ي حمار؟');
    document.querySelector('.message').textContent = 'No number! 🚫';
  } else if (guess === SecretNumber) {
    alert('ايوه بقي 🍾');
    document.querySelector('.message').textContent = 'correct number 🍾';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high 🤦‍♂️';
      score--;
      document.querySelector('.score').textContent = score;
      alert('ركز يالااااا');
    } else {
      document.querySelector('.message').textContent = 'you lost 😩';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low 😅';
      score--;
      document.querySelector('.score').textContent = score;
      alert('م قولنا اتنيل ركز');
    } else {
      document.querySelector('.message').textContent = 'you lost 😩';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again process

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').value = '?';
  document.querySelector('guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
