let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerHTML = currentPlayer;

    if (checkWinner()) {
        document.getElementById("status").innerHTML = currentPlayer + " Wins!";
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        document.getElementById("status").innerHTML = "Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
    const wins = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8], 
        [0,4,8], [2,4,6]
    ];

    return wins.some(comb => 
        board[comb[0]] &&
        board[comb[0]] === board[comb[1]] &&
        board[comb[1]] === board[comb[2]]
    );
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";

    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }

    document.getElementById("status").innerHTML = "";
}
