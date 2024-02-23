"use strict";

// gets the player's choice
function getPlayerChoice() {   
    let playerChoice = prompt("Please select your choice: ROCK | PAPER | SCISSORS").toLowerCase();

    return playerChoice;
}

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

// capitalizes the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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
    // player's and computer's selection formatted
    const capitalizedPlayerSelection = capitalizeFirstLetter(playerSelection);
    const capitalizedComputerSelection = capitalizeFirstLetter(computerSelection);
    const winner = determineWinner(playerSelection.toLowerCase(), computerSelection);

    switch (winner) {
        case "Player":
            return `You Win! ${capitalizedPlayerSelection} beats ${capitalizedComputerSelection}`;        
        case "Computer":
            return `You Lose! ${capitalizedComputerSelection} beats ${capitalizedPlayerSelection}`;
        case "Draw":
            return `Draw Game! You both chose ${capitalizedComputerSelection}`;
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