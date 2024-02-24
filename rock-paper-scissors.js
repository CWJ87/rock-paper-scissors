"use strict";

const gameChoices = document.querySelectorAll(".choice");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const gameDisplay = document.querySelector(".results > p");
const newGameBtn = document.querySelector(".new-game-btn");

let playerScore = 0, computerScore = 0;

gameChoices.forEach(choice => {    
    choice.addEventListener("click", (e) => {
        const playerChoice = choice.getAttribute("id");
        const computerChoice = getComputerChoice();        
        playRound(playerChoice, computerChoice);
    });
});

newGameBtn.addEventListener("click", startNewGame);

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
    else if (
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
            hasPlayerWonRound(true);
            gameDisplay.textContent = `The Computer chose ${computerSelection.toUpperCase()}. YOU WIN!`;
            break;
        case "Computer":
            hasPlayerWonRound(false);
            gameDisplay.textContent = `The Computer chose ${computerSelection.toUpperCase()}. YOU LOSE!`;
    }
}

// updates the player's score if they won the round
function hasPlayerWonRound(playerWon) {
    if (playerWon) {
        playerScore += 1;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
    }
    else {
        computerScore += 1;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }
}

// reset the scores to 0 and start a new game
function startNewGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    gameDisplay.textContent = "Please select a choice";
}