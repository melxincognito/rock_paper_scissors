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

function playerSelection() {
    const playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
    return playerSelection; 
}


function game(playerSelection, computerPlay) {
    if(playerSelection == 'rock' && computerPlay == 'scissors'){
        return 'You Won! Rock beats scissors!';
    } else if (playerSelection == 'rock' && computerPlay == 'paper') {
        return 'You lost! Paper beats rock!';
    } else if (playerSelection == 'rock' && computerPlay == 'rock') {
        return "It's a draw!";
    } else if (playerSelection == 'paper' && computerPlay == 'rock') {
        return 'You win! Paper beats rock!';
    } else if (playerSelection == 'paper' && computerPlay == 'scissors') {
        return 'You lost! Scissors beats paper!';
    } else if (playerSelection == 'paper' && computerPlay == 'paper') {
        return "It's a tie!";
    } else if (playerSelection == 'scissors' && computerPlay == 'paper') {
        return 'You Win! Scissors beats paper!'
    } else if (playerSelection == 'scissors' && computerPlay == 'rock') {
        return 'You lose! Rock beats scissors!';
    } else if (playerSelection == 'scissors' && computerPlay == 'scissors') {
        return "It's a tie!";
    } else {
        return 'Something went wrong';
    }
}
 console.log(game(playerSelection(),computerPlay()));