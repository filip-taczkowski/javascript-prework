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