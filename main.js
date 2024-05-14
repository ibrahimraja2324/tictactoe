// when user clicks on cell of table, its read and added onto
// the array. The array is then displayed onto the cells of the
// table.

const Player = (name, marker) => {
    return {
        name,
        marker,
    }
}

const GameBoard = (clickedCell) => {
    let currentPlayer = Game.getPlayer();
    if (clickedCell.innerHTML === '') {
        clickedCell.innerHTML += currentPlayer.marker
        Game.switchPlayer();
        Game.updateArray();
        Game.checkResult();
    }

    
    
};

const Game = (() => {
    //create player
    let markerArr = []
    const player1 = Player("Player 1", "X");
    const player2 = Player("Player 2", "O");

    let currentPlayer = player1;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    const getPlayer = () => {
        return currentPlayer;
    }

    const updateArray = () => {
        const table = document.getElementById('tictactoetable')
        const rows = table.getElementsByTagName('tr')
        markerArr = [];
        
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td')
            const rowArray = [];
            for (let j = 0; j < cells.length; j++) {
                rowArray.push(cells[j].innerHTML)
            }
            markerArr.push(rowArray);
        }
    }

    const checkResult = () => {
        if (markerArr[0][0] === markerArr[0][1] && markerArr[0][1] === markerArr[0][2]) {
            if (markerArr[0][0] === player1.marker) {
                alert(player1.name + "wins!")
            } else if (markerArr[0][0] === player2.marker) {
                alert(player2.name + "wins!")
            }
        } else if (markerArr[1][0] === markerArr[1][1] && markerArr[1][1] === markerArr[1][2]) {
            if (markerArr[1][0] === player1.marker) {
                alert(player1.name + "wins!")
            } else if (markerArr[1][0] === player2.marker) {
                alert(player2.name + "wins!")
            }
        } else if (markerArr[2][0] === markerArr[2][1] && markerArr[2][1] === markerArr[2][2]) {
            if (markerArr[2][0] === player1.marker) {
                alert(player1.name + "wins!")
            } else if (markerArr[2][0] === player2.marker) {
                alert(player2.name + "wins!")
            }
        }

        else if (markerArr[0][0] === markerArr[1][0] && markerArr[1][0] === markerArr[2][0]) {
            if (markerArr[0][0] === player1.marker) {
                alert(player1.name + "wins!")
            } else if (markerArr[0][0] === player2.marker) {
                alert(player2.name + "wins!")
            }
        } else if (markerArr[0][1] === markerArr[1][1] && markerArr[1][1] === markerArr[2][1]) {
            if (markerArr[0][1] === player1.marker) {
                alert(player1.name + "wins!")
            } else if (markerArr[0][1] === player2.marker) {
                alert(player2.name + "wins!")
            }
        } else if (markerArr[0][2] === markerArr[1][2] && markerArr[1][2] === markerArr[2][2]) {
            if (markerArr[0][2] === player1.marker) {
                alert(player1.name + "wins!")
            } else if (markerArr[0][2] === player2.marker) {
                alert(player2.name + "wins!")
            }
        }
    
        else if (markerArr[0][0] === markerArr[1][1] && markerArr[1][1] === markerArr[2][2]) {
            if (markerArr[0][0] === player1.marker) {
                alert(player1.name + "wins!")
            } else if (markerArr[0][0] === player2.marker) {
                alert(player2.name + "wins!")
            }
        } else if (markerArr[0][2] === markerArr[1][1] && markerArr[1][1] === markerArr[2][0]) {
            if (markerArr[0][2] === player1.marker) {
                alert(player1.name + "wins!")
            } else if (markerArr[0][2] === player2.marker) {
                alert(player2.name + "wins!")
            }
        }

        else {
            let isDraw = true;

            markerArr.forEach(row => {
                row.forEach(cell => {
                    if (cell === '') {
                        isDraw = false;
                    }
                })
            })
            if (isDraw) {
                alert("It's a draw!")
            }
        }
        
    }

    const resetGame = () => {
        var cells = document.querySelectorAll('#tictactoetable td');
        cells.forEach(function(cell){
            cell.innerHTML = '';
        })

        updateArray();
    }

    return {
        getPlayer,
        switchPlayer,
        updateArray,
        checkResult,
        resetGame,
    }

})();

document.addEventListener("DOMContentLoaded", function() {

    
    var cells = document.querySelectorAll("#tictactoetable td");

    cells.forEach(function(cell) {
        cell.addEventListener("click", function(event) {
            GameBoard(event.target)
        })
    })

    var reset = document.getElementById('reset');
    reset.addEventListener("click", function() {
        Game.resetGame();
    })
})


