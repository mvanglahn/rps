var options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let cpuScore = 0;

function getComputerChoice() {
    choiceNum = Math.floor(Math.random()*10/4);
    var cChoice = options[choiceNum];
    return cChoice;
}

function playerPrompt(){
    pSelect = window.prompt("Please enter your selection");
    return pSelect.toLowerCase();
}



function playRound(playerSelect, computerSelection){
    if (playerSelect === 'rock' && computerSelection === 'scissors' ||
        playerSelect === 'scissors' && computerSelection === 'paper' ||
        playerSelect === 'paper' && computerSelection === 'rock'){
            console.log("Player wins!", playerSelect, "beats", computerSelection)
            playerScore++;
    } else if (
            playerSelect === 'scissors' && computerSelection === 'rock' ||
            playerSelect === 'paper' && computerSelection === 'scissors' ||
            playerSelect === 'rock' && computerSelection === 'paper') {
                console.log("Computer wins!", playerSelect, "loses to", computerSelection)
                cpuScore++;
    } else if (playerSelect === computerSelection){
        console.log("It's a tie! Try again")
    }
}

function game() {
    if (i<6) {
        var playerSelection = playerPrompt();
        var computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Computer selected", computerSelection);
        console.log("Score:");
        console.log("Player:", playerScore, "CPU:", cpuScore);
        i++;
    } else if (i = 6) {
        if (playerScore > cpuScore){
            console.log("You win!");
        } else if (playerScore < cpuScore){
            console.log("CPU wins!");
        } else {
            console.log("It's a tie")
        }
    }
}

//const playerSelect = 'rock';


