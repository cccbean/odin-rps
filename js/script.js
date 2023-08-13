console.log("Hello!");

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

function roundGame(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  console.log(computerSelection);

  if ((playerChoice === "rock" && computerSelection === "scissors") || (playerChoice === "paper" && computerSelection === "rock") || (playerChoice === "scissors" && computerSelection === "paper")) {
    return `You win, ${playerChoice} beats ${computerSelection}!`;
    }
  else if (playerChoice === computerSelection) {
    return `It's a tie, you both chose ${playerChoice}.`
    }
  else {
    return `You lose, ${playerChoice} loses to ${computerSelection}...`
  }

}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
  const playerSelection = prompt("Make your selection:");
  const results = roundGame(playerSelection, getComputerChoice());

  if (!(results.search("win") === -1)) {
    playerWins++;
  }
  else if (!(results.search("lose") === -1)) {
    computerWins++;
  }
  console.log(results);
  // console.log(playerWins);
  // console.log(computerWins);
  }

  if (playerWins > computerWins) {
    console.log(`You won!!! You beat the computer ${playerWins} to ${computerWins}!`)
  }
  else if (playerWins < computerWins) {
    console.log(`You lost... It was ${playerWins} to ${computerWins}.`)
  }
  else {
    console.log(`It's a tie! ${playerWins}-${computerWins}`)
  }
}
