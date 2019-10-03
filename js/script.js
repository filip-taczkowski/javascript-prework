function playGame(argPlayerInput) {
    clearMessages();

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

    console.log('Player input: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
    printMessage('You played: ' + playerMove + '! Opponent played: ' + computerMove + '!');
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