const gameboard = (()=> {
    const _gameboard = ['X','O','X','O','X','O','X','O','X'];

    const displayGameboard = () => {
        //Create gameboard div and append to document body
        let gameboardDiv = document.createElement('div');
        gameboardDiv.id = 'gameboardDiv';
        document.body.appendChild(gameboardDiv);

        //Create each gameboard square and append to gameboard div
        _gameboard.forEach((square,index) => {
            let _gameboardSquares = document.createElement('div');
            _gameboardSquares.id = `square ${index}`;
            _gameboardSquares.textContent = `${square}`
            gameboardDiv.appendChild(_gameboardSquares);
        })
    };

    return {displayGameboard};
}
)();

gameboard.displayGameboard();