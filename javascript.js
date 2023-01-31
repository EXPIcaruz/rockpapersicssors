//Your game is going to play against the computer, so begin with a
//function called getComputerChoice that will randomly return either
//‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make
//the computer’s play. Tip: use the console to make sure this is returning
// the expected output before moving to the next step!

// set varibles for choice 

function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
 }
 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
       return `It's a tie!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
       return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
       return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
       return "You win! Scissors beats Paper";
    } else {
       return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
 }

 const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
 const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection))







// set function for computer to randomy choose

// set function for single round where 
// set loop for multiple rounds 
// set user input system 