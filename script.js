const field = document.querySelectorAll('.field')

const Player = (name, mark) => {
    const placeMark = (e) => {
        if(e.target.childNodes[0].innerText === ''){
            e.target.childNodes[0].innerText = mark;
        }
    } 
    return {name, placeMark}
};

const Game = (() => {
    let currentPlayer = 1;
    const getPlaceMark = (e) => {
        if(currentPlayer == 1) {
            playerOne.placeMark(e);
            currentPlayer = 2;
        }
        else {
            playerTwo.placeMark(e);
            currentPlayer = 1;
        }
    }
    return {getPlaceMark}
})();


const playerOne = Player('Jeff', 'X')
const playerTwo = Player('Tim', 'O')

field.forEach(element => element.addEventListener('click', Game.getPlaceMark));