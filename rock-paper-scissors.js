"use strict";

const gameChoices = document.querySelectorAll(".choice");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const gameDisplay = document.querySelector(".results > p");
const MAX_WINS = 5; // total number of points to win the game

let playerScore = 0, computerScore = 0;

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

    switch (roundResult) {
        case "Draw":
            gameDisplay.textContent = "Draw Game!";
            break;
        case "Player":
            gameDisplay.textContent = `The Computer chose ${computerSelection.toUpperCase()}. YOU WIN!`;
            hasPlayerWonRound(true);
            break;
        case "Computer":
            gameDisplay.textContent = `The Computer chose ${computerSelection.toUpperCase()}. YOU LOSE!`;
            hasPlayerWonRound(false);
    }
}

// updates the player's score if they won the round
function hasPlayerWonRound(playerWon) {
    if (playerWon) {
        ++playerScore;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;        
    }
    else {
        ++computerScore;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;        
    }

    hasGameEnded();
}

// reset the scores to 0 and start a new game
function startNewGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    gameDisplay.textContent = "Please select a choice";
    this.remove();

    gameChoices.forEach(choice => {
        choice.classList.toggle("disabled");
    });

}

function hasGameEnded() {
    if (playerScore === MAX_WINS || computerScore === MAX_WINS) {        
        const winner = playerScore === MAX_WINS ? "Player":"Computer";
        const message = winner === "Player" ? "Congratulations! You win!" : "Computer wins! Better luck next time.";
        const newGameBtn = document.createElement("button");

        gameDisplay.textContent = message;        
                
        gameChoices.forEach(choice => {
            choice.classList.toggle("disabled");
        });

        newGameBtn.textContent = "New Game";
        newGameBtn.setAttribute("class", "new-game-btn");
        document.body.appendChild(newGameBtn);

        newGameBtn.addEventListener("click", startNewGame);
    }
}