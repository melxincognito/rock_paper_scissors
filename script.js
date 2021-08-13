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

/* one single round playing in the terminal */
function playRound(playerSelection, computerPlay) {
    if(playerSelection == 'rock' && computerPlay == 'scissors'){
        return 'You Won!';
    } else if (playerSelection == 'rock' && computerPlay == 'paper') {
        return 'You lost!';
    } else if (playerSelection == 'rock' && computerPlay == 'rock') {
        return "It's a tie!";
    } else if (playerSelection == 'paper' && computerPlay == 'rock') {
        return 'You Won!';
    } else if (playerSelection == 'paper' && computerPlay == 'scissors') {
        return 'You lost!';
    } else if (playerSelection == 'paper' && computerPlay == 'paper') {
        return "It's a tie!";
    } else if (playerSelection == 'scissors' && computerPlay == 'paper') {
        return 'You Won!'
    } else if (playerSelection == 'scissors' && computerPlay == 'rock') {
        return 'You lost!';
    } else if (playerSelection == 'scissors' && computerPlay == 'scissors') {
        return "It's a tie!";
    } else {
        return 'Something went wrong';
    }
}

/* trying to make one that'll keep score and go up to 5 games.*/

let userScore = 0;
let computerScore = 0;

function game() { 
    console.log(playRound(playerSelection(),computerPlay())); {
        if ('You Won!') {
            console.log('You get a point!');
            userScore++; 
            console.log('Your Points: '+ userScore + 'Computer Points: '+ computerScore);
        } else if ('You lost!') {
            console.log('Computer gets a point!');
            computerScore++;
            console.log('Your Points: '+ userScore + 'Computer Points: '+ computerScore);
        } else { 
            console.log('No one gets a point');
            console.log('Your Points: '+ userScore + 'Computer Points: '+ computerScore);
        }
    }
    console.log(playRound(playerSelection(),computerPlay()));
    } 

       


   

  





