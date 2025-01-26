
// main.js
// Assignment
//concat() method
function full_sentence() {
    var part_1  = "Let go ";
    var part_2 = "and play ";
    var part_3 = "foot ball on the ";
    var part_4 = "field.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;  
}

//Slice() Method
//The slice() method is a string method that extracts a section of a string and then returns the extracted section in a new string.
function slice_method() {
    var sentence = "All work and no gym makes John lack stamina.";
    var section = sentence.slice(25,31);
    document.getElementById("slice").innerHTML = section;
}

   // Slice out a portion of a string from position 7 to 13:
function sliceMethod() {
   var text = "Orange, Banana, Apple";
   var part = text.slice(8, 14);
   document.getElementById("extract").innerHTML = part;
}

// More Methods Challenge
function toUpper_case() { // toUpperCase() method
    var text = "Good day!";
    var result = text.toUpperCase();

    document.getElementById("toupper").innerHTML = result;
}

// The search() method
//The search() method of string values executes a search for a match between a regular expression and this string, returning the index of the first match in the string,

 function search() {  //search() a string for a value and return the position of the first match
    var text = "Mr . Williams has a white house";
    var position = text.search("white");

    document.getElementById("search").innerHTML = position;
 }

 // Number method:
 // Number methods assist in working with numbers. There are several types - one is the "toString()" method that returns a number as a string.
 function string_method() {
    var x = 192;
    document.getElementById("Numbers_to_string").innerHTML = x.toString(); // This code will outputb "192"
 }

 // toprecision() method 
 //The toprecision() method formats a number to a specified lenght.

function precision_method() {
   var x = 123938.3012987376112;
   document.getElementById("precision").innerHTML = x.toPrecision(8);
}
    //New methods Challenge
// The toFixed() method 
function toFixed_method() {
   var num = 5.56789;
   var n = num.toFixed();

   document.getElementById("toFixed").innerHTML = n;


}

//The toFixed(2) method
function toFixed_decimals() {
   var num = 5.56789;
   var n = num.toFixed(2);

   document.getElementById("specific").innerHTML = n;
}

// The valueOf() method
//The valueOf() method returns the primitive value of a string. It does not change the original string and can be used to convert a string object into a string.

function value_Of() {
   var text = "Lucky Star!";
   var result = text.valueOf();

   document.getElementById("value").innerHTML = result;
}
