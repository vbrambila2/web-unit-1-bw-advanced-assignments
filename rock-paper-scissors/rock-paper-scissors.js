// you need to create selectors to update the scores and the moves being displayed
// you also need a selector for your move selection buttons
// you need a random selection function for your computer to pick a move each turn
// you need to update the display area to show your move for each turn
// you need a function for win/loss/tie scenarios
// you need an if/else if/else statement for each case of the game and to invoke the correct functions in each case
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
 
    // Function to
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
         
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                 
 
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
 
                // Function to check who wins
                winner(this.innerText,computerChoice)
                 
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
         
    }
 
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        const playerC = document.querySelector('.p-choice');
        const computerC = document.querySelector('.c-choice');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Everyone drinks because of you'
            playerC.innerHTML = player;
                computerC.innerHTML = computer;
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Drink Bitch';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                playerC.innerHTML = 'ROCK';
                computerC.innerHTML = 'PAPER';
 
            }else{
                result.textContent = 'Give 1 Drink'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                playerC.innerHTML = 'PAPER';
                computerC.innerHTML = 'ROCK';
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Drink Little Bitch';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                playerC.innerHTML = 'SCISSORS';
                computerC.innerHTML = 'ROCK';
            }else{
                result.textContent = 'Give 1 Drunk';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                playerC.innerHTML = 'ROCK';
                computerC.innerHTML = 'SCISSORS';
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Drink My Bitch';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                playerC.innerHTML = 'PAPER';
                computerC.innerHTML = 'SCISSORS';
            }else{
                result.textContent = 'Give 1 Drank';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                playerC.innerHTML = 'SCISSORS';
                computerC.innerHTML = 'PAPER';
            }
        }
    }
 
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
     
}
 
// Calling the game function
game();