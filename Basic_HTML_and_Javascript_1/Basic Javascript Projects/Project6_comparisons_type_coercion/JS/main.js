
//main.js

//The typeof Operator returns the type of a variable of an expression 
document.write(typeof "Magnus");//print string
document.write("<br>");
document.write(typeof "Magnus" + "Kelly") //print string
document.write("<br>");
document.write(typeof 2.23);//print number
document.write("<br>");
document.write(typeof 25);//print number
document.write("<br>");
document.write(typeof 31 + 22);//print number
document.write("<br>");
document.write(typeof "true") //print boolean
document.write("<br>");
document.write(typeof "false")//print boolean
document.write("<br>");
document.write(typeof 123n)//print bigint
document.write("<br>");
document.write(typeof "Symbol()")//print symb document.write (typeof x);//print undefined
document.write("<br>")
document.write("20" + 5); //An expression combining a string and a number
document.write("<br>");
 //Javascript Infinity Property
 document.write(2E310);// Positive Infinity
 document.write("<br>");
 document.write(-3E310);//Negative -Infinity
 document.write("<br>");
 document.write(9 > 3);//Boolean Logic Operator (Greater Than)
 document.write("<br>");
 document.write(9 < 3); //Boolean Logic Operator (Less Than)
 document.write("<br>");
 console.log(2 > 5); //console.log()using Boolean challenge (display false in Dev tools)
 document.write("<br>");
 document.write(7 == 7);// equal sign "==" Operator "true" is utilized here
 document.write("<br>");
 document.write(6 == 10);//comparison equal sign "==" "false" is utilized here
 document.write("<br>");
 //Utilizing Tripple Equal Signs"===" operator
 x = 5;
 Y = 5;
 document.write(x === Y);// This will return true
 document.write("<br>");
 x = 85;
 Y = "85";
 document.write(x === y);//This will return false. why? Because the data types(number and string were not the same)
 document.write("<br>");
 A = "Magnus";
 B = "Magnus";
 document.write(A === B);// This will return "true"
 document.write("<br>");
 //Three Boolean Logical Operators in Javascript
 //1.AND written:&&
 //2.OR written:||
 //3.NOT written:!
 document.write(5 > 2 && 10 > 4);//Here the && operator determines the logical value and variables(both must be "true")
 document.write("<br>");
 document.write(5 > 7 && 10 > 4);//This code will return "false"
 document.write("<br>");
 //The || (OR)Operator
 document.write(5 > 10 || 10 > 4);//Return "true" because 5 is not greater than 10, but 10 is greater than 4
 document.write("<br>");
 document.write(5 > 10 || 10 > 20);//This will return "false" since neither is true
 document.write("<br>");
//Utilizing The !(Not) Operator
function not_Function() {
    document.getElementById("Not").innerHTML = ! (10 > 5); //This will return "false"
}
//Double Ngative in JS code
function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);//This will return "True"
}




 