var options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let cpuScore = 0;
//let wonRound = ' ';

function getComputerChoice() {
    choiceNum = Math.floor(Math.random()*10/4);
    var cChoice = options[choiceNum];
    return cChoice;
}

function playerPrompt(){
    pSelect = window.prompt("Please enter your selection");
    return pSelect.toLowerCase();
}

function playerShow(){
    if (playerSelection == 'rock') {
        document.getElementById('playRock').hidden=false;
    }
    if (playerSelection == 'paper') {
        document.getElementById('playPaper').hidden=false;
    }
    if (playerSelection == 'scissors') {
        document.getElementById('playScissors').hidden=false;
    }
}

function cpuShow(computerSelection){
    if (computerSelection == 'rock') {
        document.getElementById('playRock').hidden=false;
    }
    if (computerSelection == 'paper') {
        document.getElementById('playPaper').hidden=false;
    }
    if (computerSelection == 'scissors') {
        document.getElementById('playScissors').hidden=false;
    }
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
}

function confirmNo() {
    document.getElementById("replay").hidden=false 
    document.getElementById("content").innerHTML = "Thanks for playing"
}
function playRound(playerSelect, computerSelection){
    if (playerSelect === 'rock' && computerSelection === 'scissors' ||
        playerSelect === 'scissors' && computerSelection === 'paper' ||
        playerSelect === 'paper' && computerSelection === 'rock'){
//          window.alert("Player wins!", playerSelect, "beats", computerSelection)
            playerScore++;
            document.getElementById("playerScore").innerHTML = playerScore;
    } else if (
            playerSelect === 'scissors' && computerSelection === 'rock' ||
            playerSelect === 'paper' && computerSelection === 'scissors' ||
            playerSelect === 'rock' && computerSelection === 'paper') {
//              window.alert("Computer wins!", playerSelect, "loses to", computerSelection)
                cpuScore++;
                document.getElementById("cpuScore").innerHTML = cpuScore;
    } else if (playerSelect === computerSelection){
//        window.alert("It's a tie! Try again")
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
    var compChoice = getComputerChoice();
    setTimeout(() => {
        document.getElementById('choices').hidden=true;
    }, 500);
    setTimeout(() => {
        document.getElementById('playerImg').hidden=false;
        playerShow();
    }, 500);

    setTimeout(() => {
        document.getElementById('versus').hidden=false;
    }, 500);
    setTimeout(() => {
        document.getElementById('cpuImg').hidden=false;
        cpuShow(compChoice);
    }, 500);       
    playRound(playerSelection, compChoice);
    setTimeout(() => {
        document.getElementById('playerImg').hidden=true;
        document.getElementById('versus').hidden=true;
        document.getElementById('cpuImg').hidden=true;
        document.getElementById('choices').hidden=false;
        cpuShow(compChoice);
    }, 500);      
    if (playerScore == 5 || cpuScore == 5){
        endGame();
    }

}
