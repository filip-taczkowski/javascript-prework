function getMoveName(argMoveId){
    console.log('Move ID: ' + argMoveId);

    if(argMoveId == 1){
      return 'rock';
    } 
    if (argMoveId == 2) {
        return 'paper';
    } 
    if (argMoveId == 3) {
        return 'scissors';
    } 
  
    printMessage('This move does not exist: ' + argMoveId + '.');
    return 'unknown move!';
}

function displayResult(argComputerMove, argPlayerMove) {
    console.log('Moves: ', argComputerMove, argPlayerMove);
    
    
    if (argPlayerMove == argComputerMove) {
        printMessage('Draw!');
    } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
        printMessage('You win!');
    } else if (argPlayerMove == 'rock' && argComputerMove == 'paper') {
        printMessage('You lose!');
    } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
        printMessage('You win!');
    } else if (argPlayerMove == 'scissors' && argComputerMove == 'rock') {
        printMessage('You lose!');
    } else if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
        printMessage('You win!');
    } else if (argPlayerMove == 'paper' && argComputerMove == 'scissors') {
        printMessage('You lose!');
    } else if (argPlayerMove == 'Unkown move') {
        printMessage('Unkown move! Please select availiable moves (1 , 2 , 3 )');
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Radnom number: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
 if (randomNumber == 1) {
computerMove = 'rock';
} else if (randomNumber == 2) {
    computerMove = 'paper';
} else if (randomNumber == 3) {
    computerMove = 'scissors';
} 
*/

let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors');

console.log('Player input: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if (playerInput == 1) {
    playerMove = 'rock';
} else if (playerInput == 2) {
    playerMove = 'paper';
} else if (playerInput == 3) {
    playerMove = 'scissors';
}
*/

/*
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
*/

displayResult(computerMove, playerMove);
printMessage('You played: ' + playerMove + '! Opponent played: ' + computerMove + '!');
