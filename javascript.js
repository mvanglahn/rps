var options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let cpuScore = 0;
let wonRound = ' ';

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
            window.alert("Player wins!", playerSelect, "beats", computerSelection)
            playerScore++;
            document.getElementById("playerScore").innerHTML = playerScore;
    } else if (
            playerSelect === 'scissors' && computerSelection === 'rock' ||
            playerSelect === 'paper' && computerSelection === 'scissors' ||
            playerSelect === 'rock' && computerSelection === 'paper') {
                window.alert("Computer wins!", playerSelect, "loses to", computerSelection)
                cpuScore++;
                document.getElementById("cpuScore").innerHTML = cpuScore;
    } else if (playerSelect === computerSelection){
        window.alert("It's a tie! Try again")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        var playerSelection = playerPrompt();
        var computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Computer selected", computerSelection);
        console.log("Score:");
        console.log("Player:", playerScore, "CPU:", cpuScore);
    } 
}

//game();
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("cpuScore").innerHTML = cpuScore;

btnRock.addEventListener('click', () => handleClick('rock'))
btnScissors.addEventListener('click', () => handleClick('scissors'))
btnPaper.addEventListener('click', () => handleClick('scissors'))


function handleClick(playerSelection) {
    playRound(playerSelection,getComputerChoice());
}


