const humanScore = document.getElementById('humanScore');
const computerScore = document.getElementById('computerScore');
const moves = document.querySelectorAll('button');
const humanMove = document.querySelector('.display-container-human i');
const computerMove = document.querySelector('.display-container-computer i');

const rockIcon = "fas fa-hand-rock";
const paperIcon = "fas fa-hand-paper";
const scissorsIcon = "fas fa-hand-scissors";
const randomChoice = [rockIcon, paperIcon, scissorsIcon];

let hScoreCount = 0;
let cScoreCount = 0;

const tie = () => {
    victoryText.innerHTML = "It's a tie!";
};

const win = () => {
    victoryText.innerHTML = "You win, computer loses!";
    hScoreCount++;
};

const lose = () => {
    victoryText.innerHTML = "You lose, computer wins!";
    cScoreCount++;
};

const game = () => {
    moves.forEach(move => {
        move.addEventListener('click', (e) => {
            // sets player choice
            let clicked = e.target.className;
            humanMove.className = clicked;

            // sets computer choice
            let rng = Math.floor(Math.random() * randomChoice.length);
            computerMove.className = randomChoice[rng];


            // TIE
            if (humanMove.className === computerMove.className) {
                tie();
            } 
            // WINS
            else if (humanMove.className === rockIcon && computerMove.className === scissorsIcon) {
                win();
                humanScore.innerHTML = hScoreCount;
            } else if (humanMove.className === paperIcon && computerMove.className === rockIcon) {
                win();
                humanScore.innerHTML = hScoreCount;
            } else if (humanMove.className === scissorsIcon && computerMove.className === paperIcon) {
                win();
                humanScore.innerHTML = hScoreCount;
            } 
            // LOSSES
            else if (humanMove.className === rockIcon && computerMove.className === paperIcon) {
                lose();
                computerScore.innerHTML = cScoreCount;
            } else if (humanMove.className === paperIcon && computerMove.className === scissorsIcon) {
                lose();
                computerScore.innerHTML = cScoreCount;
            } else if (humanMove.className === scissorsIcon && computerMove.className === rockIcon) {
                lose();
                computerScore.innerHTML = cScoreCount;
            } else {
                throw new Error(`You hit an unexpected error, try again!`);
            }
        });
    });
};

game();
