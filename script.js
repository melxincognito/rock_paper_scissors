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
/* function for a player to be prompted for their selection*/ 
function playerSelection() {
    const playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
    return playerSelection; 
}

/*initialize userScore and computerScore before the function*/
let userScore = 0;
let computerScore = 0;

/* one single round playing in the terminal */
function playRound(playerSelection, computerPlay) {
    if(playerSelection == 'rock' && computerPlay == 'scissors'){
        console.log('You Won! Rock beats scissors, you get a point');
        userScore++;
    } else if (playerSelection == 'rock' && computerPlay == 'paper') {
        console.log('You lost! Paper beats rock, computer gets a point!');
        computerScore++; 
    } else if (playerSelection == 'rock' && computerPlay == 'rock') {
        console.log("Rock on Rock! Nobody gets a point!"); 
    } else if (playerSelection == 'paper' && computerPlay == 'rock') {
        console.log('You Won! Paper beats rock, you get a point!');
        userScore++;
    } else if (playerSelection == 'paper' && computerPlay == 'scissors') {
        console.log('You lost! Scissors beats paper, computer gets a point!');
        computerScore++; 
    } else if (playerSelection == 'paper' && computerPlay == 'paper') {
        console.log("Paper on paper! Nobody gets a point!");
    } else if (playerSelection == 'scissors' && computerPlay == 'paper') {
        console.log('You Won! Scissors beats paper, you get a point!');
        userScore++;
    } else if (playerSelection == 'scissors' && computerPlay == 'rock') {
        console.log('You lost! Rock beats scissors, computer gets a point!');
        computerScore++;
    } else if (playerSelection == 'scissors' && computerPlay == 'scissors') {
        console.log("Scissoring?? Nobody gets a point!");
    } else {
        console.log('Something went wrong');
    }
    
    return 'Your points: ' + userScore + ' Computers Points: ' + computerScore;
    
}

/* trying to make one that'll keep score and go up to 5 games.*/


function game() { 
    console.log(playRound(playerSelection(),computerPlay()));
    console.log(playRound(playerSelection(),computerPlay()));
    console.log(playRound(playerSelection(),computerPlay()));
    console.log(playRound(playerSelection(),computerPlay()));
    console.log(playRound(playerSelection(),computerPlay()));
    /*console.log above and keep score tallied with each runthrough of playRound*/
    /*code below should compute who the winner or loser is and how many points they won by*/
    if (userScore > computerScore) {
        console.log('You won by ' + (userScore - computerScore) + ' points!');
    } else if (userScore < computerScore) {
        console.log('You lost! Computer won by ' + (computerScore - userScore) + ' points!');
    } else {
        console.log('It was a tie!');
    }
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
