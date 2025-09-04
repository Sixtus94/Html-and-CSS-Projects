   
   
     // Tic Tac Toe Assignment Part 4

      //This variable keep track of whose turn it is.
      let activePlayer = 'X';
      //This array stores an array of moves, we use this to determine win conditions.
      let selectedSquares = []; 

      //This function place my x or o in a square.
       function placeXOrO(squareNumber) {
        //This condition checks if a aquare hasn't been selected already.
        //The .some() method is used to check each element of the selectsquare array
        //to see if it contains the square number clicked on.
        if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
        //If activePlay is equal to 'x', the x.png is placed in HTML
        select.style.backgroundImage = 'url("images/X.png")';  
        //Active player may not be 'x' or 'O' so, if not 'x' it must be 'O'   
        } else {
         // If activePlay is equal to 'O', the o.png is placed in HTML
         select.style.backgroundImage = 'url("images/O.png")';
        }

       //squareNumber and activeplayer are concatenated together  and added to array.
        
       selectedSquares.push(squareNumber + activePlayer);
       //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition change the active player.
        if (activePlayer === 'X') {
        //If active player is 'X' change it to 'O'.
            activePlayer = 'O';
      //if active player is anything other than 'x'
        } else {
        //change the activePlay to 'O'
           activePlayer = 'X';
        }

         //This function plays placement sound.
         Audio('/media/place.mp3');
         //This condition checks to see if it is the computers turn.
        if (activePlayer === 'O') {
            //This function disables clicking for computers turn
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);   
        }
         //Returning true is needed for our computersTurn() function to work.
         return true;

    }
         //This function results in a random square being selected by the computer.
        function computersTurn() {
         //This boolean is needed for our while loop.
           let success = false;
           //This variable stores a random number 0-8.
           let pickASquare;
           //This condition allows our while loop to keep trying  if a square is selected already.
           while (!success) {
              //A random number between 0 and 8 is selected.
              pickASquare = String(Math.floor(Math.random() * 9));
              //If the random number evaluated returns is true, the square hasn't been selected yet.
               if (placeXOrO(pickASquare)) {
                //This line calls the function.
                   placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}

 // Tic Tac Toe Assignment part 5.
 //This function parses the selectedSquares array to search for win conditions.
  //drawline() function is called to draw a line on the screen if the condition is met.
   function checkWinConditions() {
      // X 0, 1, 2 condition.
      if (arrayIncludes('0X', '1X', '2X' ))   {drawWinLine(50, 100, 558, 100) }
        // X 3, 4, 5 condition.
      else  if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
       // X 6, 7, 8 condition.
      else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
        //X 0, 3, 6 condition.
      else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine (100, 50, 100, 558) }
       // X 1, 4, 7 condition.
      else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558) }
       // X 2, 5, 8 condition.
      else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine (508, 50, 508, 558) }
      // X 6, 4, 2 condition.
      else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
      // X 0, 4, 8 condition.
      else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine (100,  100, 520, 520) }
     // O 0, 1, 2 condition.
      else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
     // O 3, 4, 5 conditon.
      else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
     // O 6, 7, 8 condition.
     else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
     // O 0, 3, 6 condition.
     else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
     // O 1, 4, 7 condition.
     else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
     // O 2, 5, 8 condition.
     else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
     // O 6, 4, 2 condition.
     else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
     // O 0, 4, 8 condition.
     else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
     //Tis condition checks for a tie. If none of the above conditions are met and 
     //9 squares are selected the code executes.
     else if (selectedSquares.length >= 9) {
     //This function plays the tie game sound.
        Audio('./media/tie.mp3');
         //This function sets a .3 second timer before the resetGame is called.
         setTimeout(function () { resetGame(); }, 500);
        }

        //This function checks if an array includes 3 strings. It is used to check for 
         //each win condition.
        function arrayIncludes(squareA, squareB, squareC) {
          //These 3 variables will be used to check for 3 in a row.
          const a = selectedSquares.includes(squareA);
          const b = selectedSquares.includes(squareB);
          const c = selectedSquares.includes(squareC);
          //If the 3 variables we pass are all included in our array then
           //true is returned and our else if condition executes the drawline() function.
           if (a === true && b === true && c === true) { return true; }
        }
    }

function resetGame() {
//This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
          //This variable gets the HTML element i.
         let square = document.getElementById(string(i));
            //This removes my elements backgroundImage.
          square.style.backgroundImage = '';
        }
    
         //This resets my array so as to be empty and can start over.
         selectedSquares = [];
}
     
     
//This function takes a string parameter of the path i have earlier for
//placement sound('./media/place.mp3')
function audio(audioURL) {
        //W create a new audio object and pass the path as a parameter.
    let Audio = new Audio(audioURL);
        //play method plays our audio sound.
    audio.play();
}

// Tic Tac Toe Assignment Part 7.
//This function utilizes HTML canvas to draw win lines across coordinates.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //This line gives access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
            //This line indicates where the start of a lines y axis is.
        y1 = coordY1,
            //This line indicates where the end of a lines x axis is.
        x2 = coordX2,
            //This lines indicates where the end of y axis is
        y2 = coordY2,
            //This variable stores temporary x axis data update in animation loop
        x = x1,
            //This variable stores temporary y axis data update in animation loop.
        y = y1;
}
         
         //This function interacts with the canvas element.
       function animateLineDrawing() {
        //This variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration.
        c.clearRect(0, 0, 500, 500);
        //This method starts a new path.
        c.beginpath();
        //This method move to a starting point in my line.
        c.moveTo(x1, y1);
        //This method indicates the end point in my line.
        c.lineTo(x, y);
        //This method sets the width of my line.
        c.lineWidth = 10;
        //This method sets the color of my line.
        c.strokeStyle = 'rgba(192, 10, 161, 0.8)';
        //This method draws everything laid out above.
        c.stroke();
        //This condition checks if I have reached endpoints.
        if (x1 <= x2 && y1 <= y2) {
        //This condition adds 10 to the previous end x endpoint.
        if (x < x2) { x += 10; }
        //This condition adds 10 to the previous end y endpoint.
        if (y < y2) { y += 10; }
        //This conditio n is similar to the one above.
        //This is necessary for the 6, 4, 2 win condions.
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        //This condition is similar to the one above.
        //This is necessary for the 6, 4, 2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        } 
      } 
      //This condition clears my canvas after win line is drawn.
      function clear() { 
        //This line clear the animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //This line clear my canvas.
        c.clearRect(0, 0, 500);
        //This line stops my animation loop.  
        cancelAnimationFrame(animationLoop); 
      }
       //This line disallows clicking while the win sound is playing
       disableClick();
        //This line plays the win sounds.
       audio('./media/winGame.mp3');
        //This line calls for main animation loop.
       animateLineDrawing();
        //This line waits 1 second. Then, clears canvas, resets game, an allows clicking again.
       setTimeout(function () { clear(); resetGame(); }, 1000);

       //This function resets the game in the event of a tie or a win.

       //Tic Tac Toe Assignment Part 6.
        //This function makes the body element temporarily unclickable.
        function disableClick() {
          //This makes the body element unclickable.
          body.style.pointerEvents = 'none';
         //This makes the body element clickable again after 1 second.
         setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
       }
    
    
    
