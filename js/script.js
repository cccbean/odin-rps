function getRandomInt(int) {
  // Creates random integer from 0 to (int - 1) for a total of int numbers
  return Math.floor(Math.random() * int);
}

function getComputerChoice() {
  const randomInt = getRandomInt(3);
  if (randomInt === 0) {
    return "rock";
  }
  else if (randomInt === 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

// On player click, run the round. Update round #, score, text, computer choice div. Unhighlight button.



const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const newGameButton = document.querySelector("#new-game");

rockButton.addEventListener("click", gameRock);
paperButton.addEventListener("click", gamePaper);
scissorsButton.addEventListener("click", gameScissors);
newGameButton.addEventListener("click", newGame);


function playerChoseRock(computerSelection) {
  if (computerSelection === "scissors") {
    return 1;
  }
  else if (computerSelection === "rock") {
    return 0;
  }
  else {
    return -1;
  }
}

function playerChosePaper(computerSelection) {
  if (computerSelection === "rock") {
    return 1;
  }
  else if (computerSelection === "paper") {
    return 0;
  }
  else {
    return -1;
  }
}

function playerChoseScissors(computerSelection) {
  if (computerSelection === "paper") {
    return 1;
  }
  else if (computerSelection === "scissors") {
    return 0;
  }
  else {
    return -1;
  }
}

function updateRound() {
  const roundPara = document.querySelector("#round-counter");
  const roundStr = roundPara.textContent;
  let roundNum = Number(roundStr[roundStr.length - 1]);
  if (roundNum === 5) {
    return true;
  }
  roundNum++;
  roundPara.textContent = `Round ${roundNum}`;
}

function updateResults(roundOutcome, playerChoice, computerChoice) {
  const scoreboardPara = document.querySelector("#scoreboard");
  let scoreboardStr = scoreboardPara.textContent;
  let playerWins = scoreboardStr[0];
  let compWins = scoreboardStr[2];
  const resultsPara = document.querySelector("#results");

  if (roundOutcome === 1) {
    playerWins++;
    resultsPara.textContent = `You won, ${playerChoice} beats ${computerChoice}!`;
  }
  else if (roundOutcome === -1) {
    compWins++;
    resultsPara.textContent = `You lose, ${playerChoice} loses to ${computerChoice}...`
  }
  else {
    resultsPara.textContent = "It's a tie."
  }
  scoreboardPara.textContent = `${playerWins}-${compWins}`;
}

function updateComputerChoice(computerChoice) {
  const compButton = document.querySelector("#computer-choice");
  computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
  compButton.textContent = computerChoice;
}

function gameRock() {
  if (updateRound()) {
    const scoreboardPara = document.querySelector("#scoreboard");
    const resultsPara = document.querySelector("#results");
    let scoreboardStr = scoreboardPara.textContent;
    let playerWins = scoreboardStr[0];
    let compWins = scoreboardStr[2];

    if (playerWins > compWins) {
      resultsPara.textContent = "You won the best of 5!!!"
    }
    else if (playerWins < compWins) {
      resultsPara.textContent = "You lost the best of 5..."
    }
    else {
      resultsPara.textContent = "It ended in a tie."
    }
  }
  else {
    const computerChoice = getComputerChoice();
    updateComputerChoice(computerChoice);

    const roundOutcome = playerChoseRock(computerChoice);

    updateResults(roundOutcome, "rock", computerChoice);
  }
}

function gamePaper() {
  if (updateRound()) {
    const scoreboardPara = document.querySelector("#scoreboard");
    const resultsPara = document.querySelector("#results");
    let scoreboardStr = scoreboardPara.textContent;
    let playerWins = scoreboardStr[0];
    let compWins = scoreboardStr[2];

    if (playerWins > compWins) {
      resultsPara.textContent = "You won the best of 5!!!"
    }
    else if (playerWins < compWins) {
      resultsPara.textContent = "You lost the best of 5..."
    }
    else {
      resultsPara.textContent = "It ended in a tie."
    }
  }
  else {
    const computerChoice = getComputerChoice();
    updateComputerChoice(computerChoice);

    const roundOutcome = playerChosePaper(computerChoice);

    updateResults(roundOutcome, "paper", computerChoice);
  }
}

function gameScissors() {
  if (updateRound()) {
    const scoreboardPara = document.querySelector("#scoreboard");
    const resultsPara = document.querySelector("#results");
    let scoreboardStr = scoreboardPara.textContent;
    let playerWins = scoreboardStr[0];
    let compWins = scoreboardStr[2];

    if (playerWins > compWins) {
      resultsPara.textContent = "You won the best of 5!!!"
    }
    else if (playerWins < compWins) {
      resultsPara.textContent = "You lost the best of 5..."
    }
    else {
      resultsPara.textContent = "It ended in a tie."
    }
  }
  else {
    const computerChoice = getComputerChoice();
    updateComputerChoice(computerChoice);

    const roundOutcome = playerChoseScissors(computerChoice);

    updateResults(roundOutcome, "scissors", computerChoice);
  }
}

function newGame() {
  const scoreboardPara = document.querySelector("#scoreboard");
  const resultsPara = document.querySelector("#results");
  const compButton = document.querySelector("#computer-choice");
  const roundPara = document.querySelector("#round-counter");

  roundPara.textContent = "Round 0";
  scoreboardPara.textContent = "0-0";
  resultsPara.textContent = "";
  compButton.textContent = "?";
}