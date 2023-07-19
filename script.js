function createPlayer(name, symbol) {    
    return {
        name,
        symbol,
    };
};

playerOne = createPlayer();
playerTw0 = createPlayer();

const playersInfo = (() => {
        //Iterator
        let i = 1;

        //Player one form
        const playerForm = document.createElement('form');
        document.body.appendChild(playerForm);
    
        //Player one name
        //Label
        const playerLabel = document.createElement('label');
        playerForm.appendChild(playerLabel);
        playerLabel.textContent = "Player One Name:";
        playerLabel.id = "playerLabel"
        playerLabel.setAttribute('for', 'playerName');

        //Input
        const playerNameInput = document.createElement('input');
        playerForm.appendChild(playerNameInput);
        playerNameInput.type = 'text';
        playerNameInput.id = 'playerName';
        playerNameInput.name = 'playerName';
        playerNameInput.required = true;

        //Submit button
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        playerForm.appendChild(submitButton);

        submitButton.addEventListener('click',(event) => {
            if (document.getElementById('playerName').value === ''){
                //do nothing
            } else if (i < 2) {
                event.preventDefault();
                playerOne.name = document.getElementById('playerName').value;
                document.getElementById('playerLabel').textContent = 'Player Two Name';
                document.getElementById('playerName').value = '';
                i++
            }
        });


})();

const gameboard = (()=> {
    const _gameboard = ['','','','','','','','',''];

    const displayGameboard = () => {
        //Create gameboard div and append to document body
        let gameboardDiv = document.createElement('div');
        gameboardDiv.id = 'gameboardDiv';
        document.body.appendChild(gameboardDiv);

        //Create each gameboard square and append to gameboard div
        _gameboard.forEach((square,index) => {
            let _gameboardSquares = document.createElement('div');
            _gameboardSquares.id = `square${index}`;
            _gameboardSquares.textContent = `${square}`
            gameboardDiv.appendChild(_gameboardSquares);
        })
    };

    return {displayGameboard};

})();

gameboard.displayGameboard();

const displayController = (()=> {
    //iterator
    let i = 1;
    
    let _currentSymbol;
    const selectSquare = () => {
        let square0 = document.getElementById('square0');
        square0.addEventListener('click', ()=> {
            if (square0.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTw0.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                square0.textContent = _currentSymbol;
                i++
            }
        })
    };
    selectSquare();

})();