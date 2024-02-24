"use strict";

const gameChoices = (document.querySelectorAll(".choice"));
const gameDisplay = document.querySelector(".results > p");

gameChoices.forEach(choice => {    
    choice.addEventListener("click", (e) => {
        const playerChoice = choice.getAttribute("id");
        const computerChoice = getComputerChoice();        
        playRound(playerChoice, computerChoice);
    });
});

// randomly returns "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    // generate a random number from 0 to 2
    const choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        
        case 1:
            return "paper";
        
        case 2:
            return "scissors";
    }
}

// determines the winner of a round
function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw";
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

// plays a single round of Rock Paper Scissors and returns results
function playRound(playerSelection, computerSelection) {
    const roundResult = determineWinner(playerSelection, computerSelection);

    switch (roundResult){
        case "Draw":
            gameDisplay.textContent = "Draw Game!";
            break;
        case "Player":
            gameDisplay.textContent = `The Computer chose ${computerSelection.toUpperCase()}. YOU WIN!`;
            break;
        case "Computer":
            gameDisplay.textContent = `The Computer chose ${computerSelection.toUpperCase()}. YOU LOSE!`;
    }
}

// starts and plays five rounds of rock paper scissors
function playGame() {
    let playerScore = 0, computerScore = 0;
   

    console.log("GAME OVER");
    console.log(`Final Score: YOUR SCORE - ${playerScore} | COMPUTER SCORE - ${computerScore}`);
}

console.log("ROCK PAPER SCISSORS");
console.log("-------------------");
playGame();