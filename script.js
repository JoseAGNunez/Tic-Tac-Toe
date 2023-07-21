function createPlayer(name, symbol) {    
    return {
        name,
        symbol,
    };
};

playerOne = createPlayer();
playerTwo = createPlayer();

const playersInfo = (() => {

        //Iterator
        let i = 1;

        //Player one form
        const playerForm = document.createElement('form');
        document.body.appendChild(playerForm);
    
        //Player one name -
        //Label
        const playerNameLabel = document.createElement('label');
        playerForm.appendChild(playerNameLabel);
        playerNameLabel.textContent = "Player One Name:";
        playerNameLabel.id = "playerNameLabel"
        playerNameLabel.setAttribute('for', 'playerName');

        //Input
        const playerNameInput = document.createElement('input');
        playerForm.appendChild(playerNameInput);
        playerNameInput.type = 'text';
        playerNameInput.id = 'playerName';
        playerNameInput.name = 'playerName';
        playerNameInput.required = true;

        //Player One symbol X
        //label
        const playerSymbolLabelX = document.createElement('label');
        playerForm.appendChild(playerSymbolLabelX);
        playerSymbolLabelX.textContent = 'X';
        playerSymbolLabelX.setAttribute('for', 'X')

        //Input
        const playerSymbolInputX = document.createElement('input');
        playerSymbolInputX.type = 'radio';
        playerSymbolInputX.id = 'X';
        playerSymbolInputX.name = 'symbol';
        playerSymbolInputX.value = 'X';
        playerForm.appendChild(playerSymbolInputX);
        playerSymbolInputX.required = true;

        //Player One symbol Y
        //label
        const playerSymbolLabelO = document.createElement('label');
        playerForm.appendChild(playerSymbolLabelO);
        playerSymbolLabelO.textContent = 'O';
        playerSymbolLabelO.setAttribute('for', 'O')

        //Input
        const playerSymbolInputO = document.createElement('input');
        playerSymbolInputO.type = 'radio';
        playerSymbolInputO.id = 'O';
        playerSymbolInputO.name = 'symbol';
        playerSymbolInputO.value = 'O';
        playerForm.appendChild(playerSymbolInputO);

        //Submit button
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        playerForm.appendChild(submitButton);


        submitButton.addEventListener('click',(event) => {
            if (document.getElementById('playerName').value === '' || !playerSymbolInputX.checked && !playerSymbolInputO.checked){
                //do nothing
            } else if (i < 2) {
                event.preventDefault();
                playerOne.name = document.getElementById('playerName').value;
                if (playerSymbolInputX.checked === true) {
                    playerOne.symbol = playerSymbolInputX.value;
                } else {
                    playerOne.symbol = playerSymbolInputO.value;
                }

                document.getElementById('playerNameLabel').textContent = 'Player Two Name';
                document.getElementById('playerName').value = '';
                i++
                playerSymbolLabelX.remove();
                playerSymbolInputX.remove();
                playerSymbolLabelO.remove();
                playerSymbolInputO.remove();
            } else {
                event.preventDefault();
                playerTwo.name = document.getElementById('playerName').value;
                if (playerOne.symbol === 'X') {
                    playerTwo.symbol = 'O';

                } else {
                    playerTwo.symbol = 'X';
                }
                playerForm.remove();
                const gameboardDiv = document.getElementById('gameboardDiv');
                gameboardDiv.style.display = 'grid';

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
        gameboardDiv.style.display = 'none';

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
            if (playerTwo.symbol === undefined) {
                //Do nothing
            }
            
            else if (symbol0.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTwo.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol0.textContent = _currentSymbol;
                i++
                endGame.checkForWinner();
                endGame.checkForDraw();
            }
        });

        square1.addEventListener('click', ()=> {
            if (playerTwo.symbol === undefined) {
                //Do nothing
            }
            
            else if (symbol1.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTwo.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol1.textContent = _currentSymbol;
                i++
                endGame.checkForWinner();
                endGame.checkForDraw();
            }
        });

        square2.addEventListener('click', ()=> {
            if (playerTwo.symbol === undefined) {
                //Do nothing
            }
            
            else if (symbol2.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTwo.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol2.textContent = _currentSymbol;
                i++
                endGame.checkForWinner();
                endGame.checkForDraw();
            }
        });

        square3.addEventListener('click', ()=> {
            if (playerTwo.symbol === undefined) {
                //Do nothing
            }
            
            else if (symbol3.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTwo.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol3.textContent = _currentSymbol;
                i++
                endGame.checkForWinner();
                endGame.checkForDraw();
            }
        });

        square4.addEventListener('click', ()=> {
            if (playerTwo.symbol === undefined) {
                //Do nothing
            }
            
            else if (symbol4.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTwo.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol4.textContent = _currentSymbol;
                i++
                endGame.checkForWinner();
                endGame.checkForDraw();
            }
        });

        square5.addEventListener('click', ()=> {
            if (playerTwo.symbol === undefined) {
                //Do nothing
            }
            
            else if (symbol5.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTwo.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol5.textContent = _currentSymbol;
                i++
                endGame.checkForWinner();
                endGame.checkForDraw();
            }
        });

        square6.addEventListener('click', ()=> {
            if (playerTwo.symbol === undefined) {
                //Do nothing
            }
            
            else if (symbol6.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTwo.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol6.textContent = _currentSymbol;
                i++
                endGame.checkForWinner();
                endGame.checkForDraw();
            }
        });

        square7.addEventListener('click', ()=> {
            if (playerTwo.symbol === undefined) {
                //Do nothing
            }
            
            else if (symbol7.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTwo.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol7.textContent = _currentSymbol;
                i++
                endGame.checkForWinner();
                endGame.checkForDraw();
            }
        });

        square8.addEventListener('click', ()=> {
            if (playerTwo.symbol === undefined) {
                //Do nothing
            }
            
            else if (symbol8.textContent !== '') {
                //Do nothing
            } else {
                if (i % 2 === 0) {
                    _currentSymbol = playerTwo.symbol;

                } else {
                    _currentSymbol = playerOne.symbol;

                }

                symbol8.textContent = _currentSymbol;
                i++
                endGame.checkForWinner();
                endGame.checkForDraw();
            }
        });
    };

    _selectSquare();

})();

const endGame = (()=> {
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

    const gameboardDiv = document.getElementById('gameboardDiv');

    const resultDiv = document.createElement('div');
    const result = document.createElement('p');

    const checkForDraw = ()=> {
        if (symbol0.textContent !== '' && symbol1.textContent !== '' && symbol2.textContent !== '' && symbol3.textContent !== '' && symbol4.textContent !== '' &&
        symbol5.textContent !== '' && symbol6.textContent !== '' && symbol7.textContent !== '' && symbol8.textContent !== '') {
            square0.style.backgroundColor = 'rgb(106, 97, 231)';
            square1.style.backgroundColor = 'rgb(106, 97, 231)';
            square2.style.backgroundColor = 'rgb(106, 97, 231)';
            square3.style.backgroundColor = 'rgb(106, 97, 231)';
            square4.style.backgroundColor = 'rgb(106, 97, 231)';
            square5.style.backgroundColor = 'rgb(106, 97, 231)';
            square6.style.backgroundColor = 'rgb(106, 97, 231)';
            square7.style.backgroundColor = 'rgb(106, 97, 231)';
            square8.style.backgroundColor = 'rgb(106, 97, 231)';

            setTimeout(function() {
                gameboardDiv.remove();
                document.body.appendChild(resultDiv);
                resultDiv.appendChild(result);
                result.textContent = `Tie Game`;
                playerTwo.name = undefined;
                playerTwo.symbol = undefined;
                playerOne.name = undefined;
                playerOne.symbol = undefined;

            }, 1000);
        }
    };

    const checkForWinner = ()=> {

        if (symbol0.textContent === '' && symbol1.textContent === '' && symbol2.textContent === '') {
            //Do nothing
        } else if (symbol0.textContent === symbol1.textContent && symbol1.textContent === symbol2.textContent) {
            if (playerOne.symbol === symbol0.textContent){
                square0.style.backgroundColor = 'rgb(107, 226, 123)';
                square1.style.backgroundColor ='rgb(107, 226, 123)';
                square2.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerOne.name}, you won!`;
                    
                    setTimeout(function(){
                    playerOne.name = undefined;
                    playerOne.symbol = undefined;
                    playerTwo.name = undefined;
                    playerTwo.symbol = undefined;
                }, 1000);
    
                }, 1000);
            } else {
                square0.style.backgroundColor = 'rgb(107, 226, 123)';
                square1.style.backgroundColor ='rgb(107, 226, 123)';
                square2.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerTwo.name}, you won!`;
                    
                    setTimeout(function(){
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                    }, 1000);
        
                }, 1000);
            };
        };

        if (symbol3.textContent === '' && symbol4.textContent === '' && symbol5.textContent === '') {
            //Do nothing
        } else if (symbol3.textContent === symbol4.textContent && symbol4.textContent === symbol5.textContent) {
            if (playerOne.symbol === symbol3.textContent){
                square3.style.backgroundColor = 'rgb(107, 226, 123)';
                square4.style.backgroundColor ='rgb(107, 226, 123)';
                square5.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerOne.name}, you won!`;

                    setTimeout(function(){
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                    }, 1000);

                }, 1000);
            } else {
                square3.style.backgroundColor = 'rgb(107, 226, 123)';
                square4.style.backgroundColor ='rgb(107, 226, 123)';
                square5.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerTwo.name}, you won!`;

                    setTimeout(function(){
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                    }, 1000);

                }, 1000);
            };
        };

        if (symbol6.textContent === '' && symbol7.textContent === '' && symbol8.textContent === '') {
            //Do nothing
        } else if (symbol6.textContent === symbol7.textContent && symbol7.textContent === symbol8.textContent) {
            if (playerOne.symbol === symbol6.textContent){
                square6.style.backgroundColor = 'rgb(107, 226, 123)';
                square7.style.backgroundColor ='rgb(107, 226, 123)';
                square8.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerOne.name}, you won!`;
                    
                    setTimeout(function(){
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                    }, 1000);

                }, 1000);
            } else {
                square6.style.backgroundColor = 'rgb(107, 226, 123)';
                square7.style.backgroundColor ='rgb(107, 226, 123)';
                square8.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerTwo.name}, you won!`;
                    
                    setTimeout(function(){
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                    }, 1000);

                }, 1000);
            };
        };

        if (symbol0.textContent === '' && symbol3.textContent === '' && symbol6.textContent === '') {
            //Do nothing
        } else if (symbol0.textContent === symbol3.textContent && symbol3.textContent === symbol6.textContent) {
            if (playerOne.symbol === symbol0.textContent){
                square0.style.backgroundColor = 'rgb(107, 226, 123)';
                square3.style.backgroundColor ='rgb(107, 226, 123)';
                square6.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerOne.name}, you won!`;
                    
                    setTimeout(function(){
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                    }, 1000);
        
                }, 1000);
            } else {
                square0.style.backgroundColor = 'rgb(107, 226, 123)';
                square3.style.backgroundColor ='rgb(107, 226, 123)';
                square6.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerTwo.name}, you won!`;
                    
                    setTimeout(function(){
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                    }, 1000);

                }, 1000);
            };
        };

        if (symbol1.textContent === '' && symbol4.textContent === '' && symbol7.textContent === '') {
            //Do nothing
        } else if (symbol1.textContent === symbol4.textContent && symbol4.textContent === symbol7.textContent) {
            if (playerOne.symbol === symbol1.textContent){
                square1.style.backgroundColor = 'rgb(107, 226, 123)';
                square4.style.backgroundColor ='rgb(107, 226, 123)';
                square7.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerOne.name}, you won!`;

                    setTimeout(function(){
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                    }, 1000);
        
                }, 1000);
            } else {
                square1.style.backgroundColor = 'rgb(107, 226, 123)';
                square4.style.backgroundColor ='rgb(107, 226, 123)';
                square7.style.backgroundColor ='rgb(107, 226, 123)';
        
                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerTwo.name}, you won!`;
                    
                    setTimeout(function(){
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                    }, 1000);

                }, 1000);
            };
        };

        if (symbol2.textContent === '' && symbol5.textContent === '' && symbol8.textContent === '') {
            //Do nothing
        } else if (symbol2.textContent === symbol5.textContent && symbol5.textContent === symbol8.textContent) {
            if (playerOne.symbol === symbol2.textContent){
                square2.style.backgroundColor = 'rgb(107, 226, 123)';
                square5.style.backgroundColor ='rgb(107, 226, 123)';
                square8.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerOne.name}, you won!`;

                    setTimeout(function(){
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                    }, 1000);    

                }, 1000);
            } else {
                square2.style.backgroundColor = 'rgb(107, 226, 123)';
                square5.style.backgroundColor ='rgb(107, 226, 123)';
                square8.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerTwo.name}, you won!`;
                    
                    setTimeout(function(){
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                    }, 1000);

                }, 1000);
            };
        };

        if (symbol0.textContent === '' && symbol4.textContent === '' && symbol8.textContent === '') {
            //Do nothing
        } else if (symbol0.textContent === symbol4.textContent && symbol4.textContent === symbol8.textContent) {
            if (playerOne.symbol === symbol0.textContent){
                square0.style.backgroundColor = 'rgb(107, 226, 123)';
                square4.style.backgroundColor ='rgb(107, 226, 123)';
                square8.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerOne.name}, you won!`;

                    setTimeout(function(){
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                    }, 1000);
        
                }, 1000);
            } else {
                square0.style.backgroundColor = 'rgb(107, 226, 123)';
                square4.style.backgroundColor ='rgb(107, 226, 123)';
                square8.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerTwo.name}, you won!`;
                    
                    setTimeout(function(){
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                    }, 1000);

                }, 1000);
            };
        };

        if (symbol2.textContent === '' && symbol4.textContent === '' && symbol6.textContent === '') {
            //Do nothing
        } else if (symbol2.textContent === symbol4.textContent && symbol4.textContent === symbol6.textContent) {
            if (playerOne.symbol === symbol2.textContent){
                square2.style.backgroundColor = 'rgb(107, 226, 123)';
                square4.style.backgroundColor ='rgb(107, 226, 123)';
                square6.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerOne.name}, you won!`;

                    setTimeout(function(){
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                    }, 1000);
        
                }, 1000);
            } else {
                square2.style.backgroundColor = 'rgb(107, 226, 123)';
                square4.style.backgroundColor ='rgb(107, 226, 123)';
                square6.style.backgroundColor ='rgb(107, 226, 123)';

                setTimeout(function() {
                    gameboardDiv.remove();
                    document.body.appendChild(resultDiv);
                    resultDiv.appendChild(result);
                    result.textContent = `Congratulations ${playerTwo.name}, you won!`;
                    
                    setTimeout(function(){
                        playerTwo.name = undefined;
                        playerTwo.symbol = undefined;
                        playerOne.name = undefined;
                        playerOne.symbol = undefined;
                    }, 1000);

                }, 1000);
            };
        };
    };

    return {checkForWinner, checkForDraw};
})();