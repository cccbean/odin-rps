console.log("Hello!");

function getRandomInt(int) {
    // Creates random integer from 0 to (int - 1) for a total of int numbers
    return Math.floor(Math.random() * int);
}

function getComputerChoice() {
    const randomInt = getRandomInt(3);
    if (randomInt === 0) {
        return "Rock";
    }
    else if (randomInt === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

console.log(getComputerChoice());