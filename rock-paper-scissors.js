"use strict";

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

// plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    
    // player's and computer's selection formatted
    const captalizedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const capitalizedComputerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    const lowerCasePlayerSelection = playerSelection.toLowerCase();

    // determine winner based on player's and computer's selection
    if (lowerCasePlayerSelection === computerSelection) {
        return `Draw Game! You both chose ${capitalizedComputerSelection}`;
    }
    else {
        const combinedSelection = `${lowerCasePlayerSelection} ${computerSelection}`;

        switch (combinedSelection) {
            case "rock scissors":
            case "scissors paper":
            case "paper rock":
                return `You Win! ${captalizedPlayerSelection} beats ${capitalizedComputerSelection}`;
            default:
                return `You Lose! ${capitalizedComputerSelection} beats ${captalizedPlayerSelection}`;
        }
    }
}