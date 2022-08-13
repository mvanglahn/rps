var options = ['rock', 'paper', 'scissors'];


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
    } else if (
            playerSelect === 'scissors' && computerSelection === 'rock' ||
            playerSelect === 'paper' && computerSelection === 'scissors' ||
            playerSelect === 'rock' && computerSelection === 'paper') {
                console.log("Computer wins!", playerSelect, "loses to", computerSelection)
    } else if (playerSelect === computerSelection){
        console.log("It's a tie! Try again")
    }
}

//const playerSelect = 'rock';
var playerSelection = playerPrompt();
var computerSelection = getComputerChoice();
console.log("Computer selected", computerSelection);
playRound(playerSelection, computerSelection);
