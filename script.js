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
            gameboardDiv.appendChild(_gameboardSquares);

            let symbol = document.createElement('p');
            symbol.className = 'symbol';_gameboardSquares.appendChild(symbol);
            symbol.textContent = square;
        })
    };

    return {displayGameboard};

})();

gameboard.displayGameboard();

const displayController = (()=> {
    //iterator
    let i = 1;
    
    let _currentSymbol;
    const _selectSquare = () => {
        let symbol0 = document.querySelector('#square0 .symbol');
        let symbol1 = document.querySelector('#square1 .symbol');
        let symbol2 = document.querySelector('#square2 .symbol');
        let symbol3 = document.querySelector('#square3 .symbol');
        let symbol4 = document.querySelector('#square4 .symbol');
        let symbol5 = document.querySelector('#square5 .symbol');
        let symbol6 = document.querySelector('#square6 .symbol');
        let symbol7 = document.querySelector('#square7 .symbol');
        let symbol8 = document.querySelector('#square8 .symbol');

        let square0 = document.getElementById('square0');
        let square1 = document.getElementById('square1');
        let square2 = document.getElementById('square2');
        let square3 = document.getElementById('square3');
        let square4 = document.getElementById('square4');
        let square5 = document.getElementById('square5');
        let square6 = document.getElementById('square6');
        let square7 = document.getElementById('square7');
        let square8 = document.getElementById('square8');

        square0.addEventListener('click', ()=> {
            if (symbol0.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTw0.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol0.textContent = _currentSymbol;
                i++
            }
        });

        square1.addEventListener('click', ()=> {
            if (symbol1.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTw0.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol1.textContent = _currentSymbol;
                i++
            }
        });

        square2.addEventListener('click', ()=> {
            if (symbol2.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTw0.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol2.textContent = _currentSymbol;
                i++
            }
        });

        square3.addEventListener('click', ()=> {
            if (symbol3.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTw0.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol3.textContent = _currentSymbol;
                i++
            }
        });

        square4.addEventListener('click', ()=> {
            if (symbol4.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTw0.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol4.textContent = _currentSymbol;
                i++
            }
        });

        square5.addEventListener('click', ()=> {
            if (symbol5.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTw0.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol5.textContent = _currentSymbol;
                i++
            }
        });

        square6.addEventListener('click', ()=> {
            if (symbol6.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTw0.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol6.textContent = _currentSymbol;
                i++
            }
        });

        square7.addEventListener('click', ()=> {
            if (symbol7.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTw0.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol7.textContent = _currentSymbol;
                i++
            }
        });

        square8.addEventListener('click', ()=> {
            if (symbol8.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTw0.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol8.textContent = _currentSymbol;
                i++
            }
        });
    };

    _selectSquare();

})();