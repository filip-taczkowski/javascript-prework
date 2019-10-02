let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Radnom number: ' + randomNumber);

let computerMove = 'Unknown move';

if (randomNumber == 1) {
    computerMove = 'rock';
} else if (randomNumber == 2) {
    computerMove = 'paper';
} else if (randomNumber == 3) {
    computerMove = 'scissors';
}

let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors');

console.log('Player input: ' + playerInput);

let playerMove = 'Unkown move';

if (playerInput == 1) {
    playerMove = 'rock';
} else if (playerInput == 2) {
    playerMove = 'paper';
} else if (playerInput == 3) {
    playerMove = 'scissors';
}

if (playerMove == computerMove) {
    printMessage('Draw!');
} else if (playerMove == 'rock' && computerMove == 'scissors') {
    printMessage('You win!');
} else if (playerMove == 'rock' && computerMove == 'paper') {
    printMessage('You lose!');
} else if (playerMove == 'scissors' && computerMove == 'paper') {
    printMessage('You win!');
} else if (playerMove == 'scissors' && computerMove == 'rock') {
    printMessage('You lose!');
} else if (playerMove == 'paper' && computerMove == 'rock') {
    printMessage('You win!');
} else if (playerMove == 'paper' && computerMove == 'scissors') {
    printMessage('You lose!');
} else if (playerMove == 'Unkown move') {
    printMessage('Unkown move! Please select availiable moves (1 , 2 , 3 )');
}

printMessage('You played: ' + playerMove + '! Opponent played: ' + computerMove + '!');
