var options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let cpuScore = 0;
//let wonRound = ' ';

function getComputerChoice() {
    choiceNum = Math.floor(Math.random()*10/4);
    var cChoice = options[choiceNum];
    return cChoice;
}

function endGame() {
    document.getElementById("content").hidden=true;
    document.getElementById("replay").hidden=false;
}

function confirmYes() {
    document.getElementById("replay").hidden=true;
    document.getElementById("content").hidden=false;
    playerScore = 0;
    cpuScore = 0;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("cpuScore").innerHTML = cpuScore;
    document.getElementById("result").innerHTML = '';
}

function confirmNo() {
    document.getElementById("replay").hidden=true;
    document.getElementById("goodbye").hidden=false; 
}
function playRound(playerSelect, computerSelection){
    if (playerSelect === 'rock' && computerSelection === 'scissors' ||
        playerSelect === 'scissors' && computerSelection === 'paper' ||
        playerSelect === 'paper' && computerSelection === 'rock'){
          document.getElementById('result').innerHTML = `You win, ${playerSelect} beats ${computerSelection}!`
            playerScore++;
            document.getElementById("playerScore").innerHTML = playerScore;
    } else if (
            playerSelect === 'scissors' && computerSelection === 'rock' ||
            playerSelect === 'paper' && computerSelection === 'scissors' ||
            playerSelect === 'rock' && computerSelection === 'paper') {
                document.getElementById('result').innerHTML = `Computer wins, ${playerSelect} loses to ${computerSelection}!`
                cpuScore++;
                document.getElementById("cpuScore").innerHTML = cpuScore;
    } else if (playerSelect === computerSelection){
        document.getElementById('result').innerHTML = "It's a tie! Try again"
    }
}

document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("cpuScore").innerHTML = cpuScore;

btnRock.addEventListener('click', () => handleClick('rock'))
btnScissors.addEventListener('click', () => handleClick('scissors'))
btnPaper.addEventListener('click', () => handleClick('scissors'))


function handleClick(playerSelection) {
    var compChoice = getComputerChoice();
    playRound(playerSelection, compChoice);  
    if (playerScore == 5 || cpuScore == 5){
        endGame();
    }

}
