
//main.js

//Arithmetic operator


function addition() { //Defining and naming the addition function
    var addNum = 4 + 3;
    document.getElementById("AddNum").innerHTML = "4 + 3 = " + addNum; //print the result in html
}

 function subtraction() { //Define and name subtraction function
    var SubNum = 15 - 7;
    document.getElementById("SubNum"). innerHTML = "15 - 7 = " + SubNum; //print the result in html

}

function multiplication() { //Defining and naming the multiplication function
    var multNum = 9*4;
    document.getElementById("multNum").innerHTML = " 9 * 4 = " + multNum; //print the result in html

}

function division() { //Defining and naming the division function
    var divide = 26/2;
    document.getElementById("DivNum").innerHTML = " 26 / 2  = " + divide; //print the result in html
}

function random() {  //defining and naming the random function

    document.getElementById("Ran").innerHTML = math.random() * 10; //print the result in html
     
}

function modulus_operator() {
    var modulus = 47 % 4;
    document.getElementById("modus").innerHTML = " if you divide 47 by  4, the remainder is: " + modulus; // print the result in HTML
}
function Increment() { 
    var value = document.getElementById("incrementText").innerHTML; //saves the text of the HTML element to a variable
    value++; //Add one to the value

    document.getElementById("IncrementText").innerHTML = value; //print the result in html

}


function Decrement() {
    var value = document.getElementById("DecrementText").innerHTML; //saves the text of the HTML element to a variable
    value--; //subtract one from the value

    document.getElementById("DecrementText").innerHTML = value; //print the result in HTML
}


    //Unary Operator is an operator tha contain a single operand
    function negation_operator() {
        var x = 100;
        document.getElementById("math").innerHTML = -x;

    }


    //Icrement and Decrement Operators
    //Increment in Javascript is ++ & count one step up
    function  negation_O() {
    var x = 5;
    document.getElementById("NegaOp"). innerHTML = +x;
}

