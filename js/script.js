let resultPlayer = 0;
let resultOpponent = 0;

function playGame(argPlayerInput) {
    clearMessages();
    let winner = 'n/a';

    let playerInput = argPlayerInput;

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
            winner = 'Player';
        } else if (argPlayerMove == 'rock' && argComputerMove == 'paper') {
            printMessage('You lose!');
            winner = 'Opponent';
        } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
            printMessage('You win!');
            winner = 'Player';
        } else if (argPlayerMove == 'scissors' && argComputerMove == 'rock') {
            printMessage('You lose!');
            winner = 'Opponent';
        } else if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
            printMessage('You win!');
            winner = 'Player';
        } else if (argPlayerMove == 'paper' && argComputerMove == 'scissors') {
            printMessage('You lose!');
            winner = 'Opponent';
        } else if (argPlayerMove == 'Unkown move') {
            printMessage('Unkown move! Please select availiable moves (1 , 2 , 3 )');
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Radnom number: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    console.log('Player input: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
    printMessage('You played: ' + playerMove + '! Opponent played: ' + computerMove + '!');

    if ( winner == 'Player' ) {
        resultPlayer++;
    }   else if ( winner == 'Opponent') {
        resultOpponent++;
    }

    printResult(resultPlayer + ' - ' + resultOpponent);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1)
})

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2)
})

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3)
})