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