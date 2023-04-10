const boxes = document.getElementsByClassName('box')
const info = document.getElementsByClassName('info')
const resetBtn = document.getElementById('reset')

let board = ['', '', '', '', '', '', '', '', ''];
let activePlayer = 'X';
let gameIsActive = true;

const X_WON = 'X_WON'
const O_WON = 'O_WON'
const DRAW = 'DRAW'

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
        if (board[i] !== '' || !gameIsActive) {
            return;
        }

        boxes[i].textContent = activePlayer;
        board[i] = activePlayer;

        if (checkWin()) {
            gameIsActive = false;
            info.textContent = `${activePlayer} Won!`;
            return;
        }

        activePlayer = activePlayer === 'X' ? 'O' : 'X';
        info.textContent = `${activePlayer}'s turn...`;
    });
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
        let [a, b, c] = winConditions[i];
        if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}