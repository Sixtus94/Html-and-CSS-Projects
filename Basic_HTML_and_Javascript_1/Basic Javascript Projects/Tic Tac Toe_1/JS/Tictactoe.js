 

      //Tic Tac Toe.js

      //Variable to keep track of whose turn it is
     let activePlayer = 'X';

     //Array to store moves - use this to determine win conditions
     let selectedSqares = [];

     //Function to place p or f in a square
     function placeXOrO(squareNumber) {
      //checks if the square has been selected already
      if (!selectedSqares.some(element => element.includes(squareNumber))) {
        //variable to hold the HTML element that was clicked
        let select = document.getElementById(squareNumber);
        //Determines the active player and places the icon
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/X.png")';
        } else {
            select.style.backgroundImage = 'url("images/O.png")';
        }

        //Add the square number and player to the array
        selectedSqares.push(squareNumber + activePlayer);
        //calls the function to check for a win
        checkWinConditions();
        //changes the active player
        if (activePlayer ===  'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //Function to play the placement sound
        Audio('/media/place.mp3');
        //checks if it is the computers turn
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { compuersTurn(); }, 1000);
        }
        //Returning true is needed for the computersTurn() function
        return true;
    }
     //Picks a random square for the computers Turn
      function compuersTurn() {
        let success = false;
        let pickAquare;
        while (!success) {
           pickAquare = String(Math.floor(Math.random() * 9));
           if (placeXOrO(pickAquare)) {
               placeXOrO(pickAquare);
               success = true;
            };
        } 
    }
}
 //This function parses the selectedSquares array to determine if a player has worn
 //The drawline function is called if a win condition is met
 function checkWinConditions() {
    if (ArrayIncludes('0X', '1X', '2X')) { drawingLine(50, 100, 558, 100) }
    else if (ArrayIncludes('3X', '4X', '5X')) { drawingLine(50, 304, 558, 304) }
    else if (ArrayIncludes('6X', '7X', '8X')) { drawingLine(50, 508, 558, 508) }
    else if (ArrayIncludes('0X', '3X', '6X')) { drawingLine(100, 50, 100, 558) }
    else if (ArrayIncludes('1X', '4X', '7X')) { drawingLine(304, 50, 304, 558) }
    else if (ArrayIncludes('2X', '5X', '8X')) { drawingLine(508, 50, 508, 558) }
    else if (ArrayIncludes('6X', '4X', '2X')) { drawingLine(100, 508, 510, 90) }
    else if (ArrayIncludes('0X', '4X', '8X')) { drawingLine(100, 100, 520, 520) }
    else if (ArrayIncludes('0O', '1O', '2O')) { drawingLine(50, 100, 558, 100) }
    else if (ArrayIncludes('3O', '4O', '5O')) { drawingLine(50, 304, 558, 100) }
    else if (ArrayIncludes('6O', '7O', '8O')) { drawingLine(50, 508, 558, 508) }
    else if (ArrayIncludes('0O', '3O', '6O')) { drawingLine(100, 50, 100, 558) }
    else if (ArrayIncludes('1O', '4O', '7O')) { drawingLine(304, 50, 304, 558) }
    else if (ArrayIncludes('2O', '5O', '8O')) { drawingLine(508, 50, 508, 558) }
    else if (ArrayIncludes('6O', '4O', '2O')) { drawingLine(100, 508, 510, 90) }
    else if (ArrayIncludes('0O', '4O', '8O')) { drawingLine(100, 100, 520, 520) }
    //checks for a tie - if no win conditions are met and 9 squares have been selected
    else if (selectedSqares.length >= 9) {
        //plays the tie sound
        Audio('./media/tie.mp3');
        //resets the game after a tie
        setTimeout(function () { resetGame(); }, 500);
    }

    // This function checks for each win condition
    function ArrayIncludes(squareA, squareB, squareC) {
        const a = selectedSqares.includes(squareA);
        const b = selectedSqares.includes(squareB);
        const c = selectedSqares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}

//clear the board and the array to restart the game
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSqares = [];
}

//play the audio files
function audio(audioURL) {
    let Audio = new Audio(audioURL);
    audio.play();

}

//Function to draw the line across winning coordinates
function drawingLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1; 
}

function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearReat(0, 0, 600, 600);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(21, 56, 233, 0.8)';
    c.stroke();
    if (x1 <= x2 && y1 <= y2) {
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }
    
   }
    //clears the board after the animation
    function clear() {
       const animationLoop = requestAnimationFrame(clear);
       c.clearRect(0, 0, 600);
       cancelAnimationFrame(animationLoop);
    
      disableClick();
      audio('/.media/winGame.mp3'); 
      animateLineDrawing();
      setTimeout(function () { clear(); resetGame(); }, 1000);
    }

    //Disables click during the computer's turn
    function disableClick() {
        body.style.pointerEvents = 'none';
        setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);

    }

