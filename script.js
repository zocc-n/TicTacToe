const Player = (name, mark) => {
    const placeMark = (e) => {
        // console.log(e.target.id, '--------------------------')
        e.target.childNodes[0].innerText = mark;
    } 
    const wins = () => {
        console.log(`${name} won!`)
    }
    return {mark, placeMark, wins}
};



const Game = (() => {
    let currentPlayer = 1;
    const getPlaceMark = (e) => {
        if(e.target.childNodes[0].innerText === ''){
            if(currentPlayer == 1) {
                playerOne.placeMark(e);
                currentPlayer = 2;
                addToBoard(e, playerOne.mark);
                checkWinner();
            } else {
                playerTwo.placeMark(e);
                currentPlayer = 1;
                addToBoard(e, playerTwo.mark);
                checkWinner();
            }
        }
    }

    const board = ["n", "n", "n", "n", "n", "n", "n", "n", "n"];

    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const addToBoard = (e, mark) => {
        board[e.target.id] = mark;
    }

    const checkWinner = () => {
        for(let i = 0; i < winningCombos.length; i++){
            let currentCombo = winningCombos[i];
            let first = board[currentCombo[0]];
            let second = board[currentCombo[1]];
            let third = board[currentCombo[2]];

            if((first != 'n' || second != 'n' || third != 'n') && (first == second && first  == third)){
                if(first == playerOne.mark){
                    playerOne.wins();
                    endGame();
                }
                else {
                    playerTwo.wins();
                    endGame();
                }
            }
        }
    }

    const endGame = () => {
        //to be coded
    }

    return {board, getPlaceMark}
})();


const playerOne = Player('Jeff', 'X')
const playerTwo = Player('Tim', 'O')

const field = document.querySelectorAll('.field')
field.forEach(element => element.addEventListener('click', Game.getPlaceMark));