const boxes = document.getElementsByClassName('box')
const info = document.querySelector('.info')
const resetBtn = document.getElementById('reset')
const results = document.querySelector('.result')

let board = ['', '', '', '', '', '', '', '', ''];
let activePlayer = 'X';
let gameIsActive = true;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
        if (board[i] !== '' || !gameIsActive) {
            return;
        }

        boxes[i].textContent = activePlayer;
        boxes[i].classList.add(activePlayer);
        board[i] = activePlayer;

        if (checkWin()) {
            gameIsActive = false;
            results.textContent = `${activePlayer} Won!`;
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
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

resetBtn.addEventListener('click', () => {
    activePlayer = 'X';
    gameIsActive = true;
    board = ['', '', '', '', '', '', '', '', ''];
    info.textContent = `${activePlayer}'s turn...`;
    document.querySelector('.result').textContent = '';

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = '';
        boxes[i].classList.remove('X', 'O');
    }
});