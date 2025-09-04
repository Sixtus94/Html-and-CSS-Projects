
//main.js

//global variable declared outside the functions

var x = 10;
function Add_numbers_1() {
    document.write(20 + x + " <br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1(); //The code will return "30" and
Add_numbers_2(); //The code will return "110". The Variable x is assigned the value 10 outside the function
//local variable declared within the function
function Add_numbers_1() {
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();