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

// plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {    
    // player's and computer's selection formatted
    const captalizedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const capitalizedComputerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();

    // determine winner based on player's and computer's selection
    if (playerSelection === computerSelection) {
        return `Draw Game! You both chose ${capitalizedComputerSelection}`;
    }
    else {
        const combinedSelection = `${playerSelection} ${computerSelection}`;

        switch (combinedSelection) {
            case "rock scissors":
            case "scissors paper":
            case "paper rock":
                updatePlayerScore();
                return `You Win! ${captalizedPlayerSelection} beats ${capitalizedComputerSelection}`;
            default:
                updateComputerScore();
                return `You Lose! ${capitalizedComputerSelection} beats ${captalizedPlayerSelection}`;
        }
    }
}

// increment player's score
function updatePlayerScore() {

    
}

// increment computer's score
function updateComputerScore() {
    
}

// starts and plays five rounds of rock paper scissors
function playGame() {
    let playerScore = 0, computerScore = 0;

    for (let roundCount = 1; roundCount <= 5; roundCount++) {            
        const roundResult = playRound(getPlayerChoice(), getComputerChoice());
        console.log(roundResult);
    }


    details
    --------
    - play five rounds
    - keep score
    - reports a winner or loser (or draw game if tied) at the end

    1. INIT playerScore and computerScore to 0.
    2. FOR roundCount = 1; roundCount <= 5 (5 total rounds)
    3.  READ player's choice ("rock", "paper", or "scissors") into playerSelection
    4.  CALL playRound to determine who won or if a draw occurred
    5.  DISPLAY the result of the game after each roundCount
    6. ENDFOR
    7. DISPLAY the winner, loser, or if the game ended in a draw
}