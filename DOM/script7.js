const options = ["Rock", "Paper", "Scissors"];

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}.`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}.`;
  }
}

function showResults(userOption) {
  const roundResults = getRoundResults(userOption);
  roundResultsMsg.textContent = roundResults;
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.textContent =
      playerScore === 3
        ? "Player has won the game!"
        : "Computer has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "inline-block";
  }
}

rockBtn.addEventListener("click", () => showResults("Rock"));
paperBtn.addEventListener("click", () => showResults("Paper"));
scissorsBtn.addEventListener("click", () => showResults("Scissors"));

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;
  roundResultsMsg.textContent = "";
  winnerMsgElement.textContent = "";
  optionsContainer.style.display = "inline-block";
  resetGameBtn.style.display = "none";
}

resetGameBtn.addEventListener("click", resetGame);
