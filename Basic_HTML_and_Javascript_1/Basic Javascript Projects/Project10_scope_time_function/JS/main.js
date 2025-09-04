
          //main.js



 // Assigning global and local variables
//global variable declared outside the the function

var x = 10; //global variable

function Add_numbers_1() {
    var x = 77; //local variable
    document.write(30 + x + "<br>"); //local variable is used 
}

function Add_numbers_2() {
    document.write(x + 70); //global variable is used
    console.log(x); // Using console.log to debug the variable used
}
Add_numbers_1();
Add_numbers_2();
 

// Method Assignment
// getHours Method with "If statements" are a type of conditional statements.

//A function that includes an if statement
function getDate() {
    if (new Date().getHours() > 12) {
        document.getElementById("hey").innerHTML = "Good evening, it's 7pm";
    }
}


//Greet User based on hour of the day 
function get_Date() {
if (new Date().getHours() < 12) {
    ("Good morning!");
  }
else if (new Date().getHours() < 18) {
    ("Good afternoo!");
  }
else {
    ("Good evening!");
  }
document.getElementById("time").innerHTML ="Good afternoon";
}

//
//Else Assignments: functions with if and else statements

function get_return() {
    var user_input = document.getElementById("userInput").value;
    if (user_input % 2 === 0) {
        reply = "You entered an even number!";
        document.getElementById("answer").innerHTML = reply; 
    }
    else {
        reply = "You entered an odd number";
        document.getElementById("answer").innerHTML = reply;
    }
}

//Else If Statements Assignments
// The "else if" statement follows an "if" statement and is executed if the "if" statement is found to be false. Example:

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 15) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_period").innerHTML = Reply; 
}
