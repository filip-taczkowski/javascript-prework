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
