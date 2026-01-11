//your code here
let totalRounds = 0;
let roundsLeft = 0;
let userPoints = 0;
let computerPoints = 0;

const choices = ["ROCK", "PAPER", "SCISSORS"];

const roundsLeftEl = document.querySelector('[data-ns-test="rounds-left"]');
const userPointsEl = document.querySelector('[data-ns-test="user-points"]');
const computerPointsEl = document.querySelector('[data-ns-test="computer-points"]');
const computerChooseEl = document.querySelector('[data-ns-test="computer-choose"]');
const roundResultEl = document.querySelector('[data-ns-test="round-result"]');
const gameResultEl = document.querySelector('[data-ns-test="game-result"]');

document
  .querySelector('[data-ns-test="play-game"]')
  .addEventListener("click", () => {
    totalRounds = Number(
      document.querySelector('[data-ns-test="game-number"]').value
    );

    roundsLeft = totalRounds;
    userPoints = 0;
    computerPoints = 0;

    roundsLeftEl.textContent = roundsLeft;
    userPointsEl.textContent = userPoints;
    computerPointsEl.textContent = computerPoints;
    roundResultEl.textContent = "-";
    computerChooseEl.textContent = "-";
    gameResultEl.textContent = "-";
  });

function playRound(userChoice) {
  if (roundsLeft <= 0) return;

  // REQUIRED GLOBAL VARIABLE
  window.computerChoose = Math.floor(Math.random() * 3);

  const computerChoiceText = choices[window.computerChoose];
  computerChooseEl.textContent = computerChoiceText;

  let result = "TIE";

  if (
    (userChoice === 0 && window.computerChoose === 2) ||
    (userChoice === 1 && window.computerChoose === 0) ||
    (userChoice === 2 && window.computerChoose === 1)
  ) {
    result = "WON";
    userPoints++;
  } else if (userChoice !== window.computerChoose) {
    result = "LOSE";
    computerPoints++;
  }

  roundsLeft--;

  roundResultEl.textContent = result;
  roundsLeftEl.textContent = roundsLeft;
  userPointsEl.textContent = userPoints;
  computerPointsEl.textContent = computerPoints;

  if (roundsLeft === 0) {
    if (userPoints > computerPoints) gameResultEl.textContent = "WON";
    else if (userPoints < computerPoints) gameResultEl.textContent = "LOSE";
    else gameResultEl.textContent = "TIE";
  }
}

document.querySelector('[data-ns-test="rock"]').onclick = () => playRound(0);
document.querySelector('[data-ns-test="paper"]').onclick = () => playRound(1);
document.querySelector('[data-ns-test="scissors"]').onclick = () => playRound(2);
