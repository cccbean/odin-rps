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

console.log(roundGame("ROCK", getComputerChoice()));