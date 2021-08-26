/*function for computer to produce a random variable, rock paper or scissors*/
function computerPlay() {
    let computerPlay = Math.random();
    if (computerPlay < 0.34) {
        computerPlay = 'rock';
    }
    else if (computerPlay <= 0.67) {
        computerPlay = 'paper';
    }
    else {
        computerPlay = 'scissors';
    }
    return computerPlay; 
}


    
function vimel() {
    for (let i = 0; i < 7; i++) {
        console.log(playRound(playerSelection(),computerPlay()));
    } 
    if (userScore > computerScore) {
        console.log('You won by ' + (userScore - computerScore) + ' points!');
    } else if (userScore < computerScore) {
        console.log('You lost! Computer won by ' + (computerScore - userScore) + ' points!');
    } else {
        console.log('It was a tie!');
    }
}

let userScore = 0;
let computerScore = 0;
let roundWinner = prompt('What is your name?');

// ui 

const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');
const moves = document.getElementById('moves');
const end = document.getElementById('ending');
const winner = document.getElementById('winner');


rock.addEventListener('click', function() {
    weaponChoice('rock');
    displayResults(userScore, computerScore);
});

paper.addEventListener('click', function() {
     weaponChoice('paper');
     displayResults(userScore, computerScore);
});

scissors.addEventListener('click', function() {
     weaponChoice('scissors');
     displayResults(userScore, computerScore)
});


// game 

function rpsGame(playerSelection, computerPlay) {

    if(gameOver()){
        points(userScore, computerScore)
        return
    }

    playRound2(playerSelection, computerPlay);
   
}

function playRound2(playerSelection, computerPlay) {
    if(playerSelection == 'rock' && computerPlay == 'scissors'){
        moves.textContent = 'You Won! Rock beats scissors, you get a point' 
        userScore++;
    } else if (playerSelection == 'rock' && computerPlay == 'paper') {
        moves.textContent = 'You lost! Paper beats rock, computer gets a point!' 
        computerScore++; 
    } else if (playerSelection == 'rock' && computerPlay == 'rock') {
        moves.textContent = "Rock on Rock! Nobody gets a point!"  
    } else if (playerSelection == 'paper' && computerPlay == 'rock') {
        moves.textContent = 'You Won! Paper beats rock, you get a point!'
        userScore++;
    } else if (playerSelection == 'paper' && computerPlay == 'scissors') {
        moves.textContent = 'You lost! Scissors beats paper, computer gets a point!'
        computerScore++; 
    } else if (playerSelection == 'paper' && computerPlay == 'paper') {
        moves.textContent = "Paper on paper! Nobody gets a point!"
    } else if (playerSelection == 'scissors' && computerPlay == 'paper') {
        moves.textContent = 'You Won! Scissors beats paper, you get a point!'
        userScore++;
    } else if (playerSelection == 'scissors' && computerPlay == 'rock') {
        moves.textContent = 'You lost! Rock beats scissors, computer gets a point!';
        computerScore++;
    } else if (playerSelection == 'scissors' && computerPlay == 'scissors') {
        moves.textContent = "Scissoring?? Nobody gets a point!"
    } else {
        moves.textContent = 'Something went wrong'
    }
    
}


function points(userScore, computerScore) {
    if (userScore > computerScore) {
    end.textContent= `You won by ${userScore - computerScore} points!`;
    } else if (userScore < computerScore) {
    end.textContent = `You lost! Computer won by ${computerScore - userScore} points!`;
    } else {
    end.textContent = 'It was a tie!';
    };
}

function weaponChoice(playerSelection) {
    rpsGame(playerSelection, computerPlay());

}

function displayResults(userScore, computerScore) {
    playerScore.textContent = `You: ${userScore}`;
    compScore.textContent = `Computer: ${computerScore}`;
};


function gameOver() {
    return userScore === 5 || computerScore === 5
}











