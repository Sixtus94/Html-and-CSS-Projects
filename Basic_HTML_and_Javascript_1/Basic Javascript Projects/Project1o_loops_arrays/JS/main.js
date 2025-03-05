
    // main.js

    // Counting_Numbers_in_Loop
    // A While Loop function
    function count_15_Loop() {
    var Digit = "";
    var x = 1;
    while (x < 16) {
        Digit += "<br>" + x;
        x++;
     }
    document.getElementById("Loop_to_fifteen").innerHTML = Digit;
   }

     //A function with a for loop
    var Instruments = [
    "Guitar", 
    "Drums", 
    "piano", 
    "violin", 
    "Trumpet", 
    "Flute" 
];
 var content = "";
 var y;
 function for_Loop() {
    for (y = 0; y < Instruments.length; y++) {
        content += Instruments[y] + "<br>";

    }
    document.getElementById("List_of_Instruments").innerHTML = content;
 }

 // Arrays and Objects
 // Arrays are objects and so are included in the object data type. Objects can have proparties (characteristics) and methods (actions).
 // Arrays are a special type of objects.

 //A function with an array (1)
 function array_Function()  {
    var cat_picture = [];
    cat_picture[0] = "sleeping";
    cat_picture[1] = "playing";
    cat_picture[2] = "eating";
    cat_picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + cat_picture[2] + ".";
 }
    // Display the sentence: The cat is eating
    // In the array "cat_picture" is the object. 0,1, 2 and 3 are the indexes and "sleeping", "playing", "eating" and "purring" are the properties of the object.

    //A function with an array  (2)
 function breakFast_array() {
    var menu = [];
    menu[0] = "Egg";
    menu[1] = "Vegis";
    menu[3] = "Bread";
    menu[4] = "Fish";
    menu[5] = "Cofee";
    menu[6] = "Banana";
    menu[7] = "Apple";
    document.getElementById("Array_menu").innerHTML = "My favorite menu is " + menu[1] + "."; 
 }

     //Const
    // Const Keyword Assignment:
    // The const keyword creates a constant whose scope can be either global or local to the block in which it is declared. The name const is slightly misleading because it doesn't technically create a "constant" (something immutable). Basically, the value assigned by the const keyword is not immutable(it can change)- yet, the variable identifier cannot be reassigned.

    function constant_function() { // creating a function
    
    const Musical_Instrument = {type:"guitar", brand:"fender", color:"black"};
     // a. Creating an object through utilization of th const keyword 

    Musical_Instrument.color = "green"; 
    Musical_Instrument.brand = "jacket" 
    Musical_Instrument.price = "$900,";
    document.getElementById("constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + " with the " + Musical_Instrument.brand;
    
    // string with included property value changed using the above DOM Element method

    //An object with the const keyword created and a property with a value. Also the "black" value for the color property changed to "blue"  and also the fender value for the brand property changed to jacket . Note: The identifier (Musical_Instrument or type) connot be change.

 }
  // Print : The cost of the guitar was $900, with the jacket.


  // Objects Assignments:
  // An object is a data structure used to store different types of data types. An object can have properties and methods. Example: In Creating an object called "car", the properties "color", "maximum_speed" and "mpg", and the method "drive" (to make the car move). Methods are actions that can be performed on the objects. In javascript, they are stored within properties as functions. To utilize the return statement and "this" keyword. Creating an Object with properties and a method in javascript

function car() {
 let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2025 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
        } 
   };
 document.getElementById("car_object").innerHTML = car.description();
}


 // Let Keyword
 var x = 82;
 document.write(x);
 {
  let x = 33;
  document.write("<br>" + x);
 }
 document.write("<br>" + x);
 // The output:82, 33 and 82, While 

 var x = 82;
 document.write(x);
 {
   var x = 33;
   document.write("<br>" + x);
 }
 document.write("<br>" + x);
 // The output: 82, 33 and 33. Access limited to inside block, while the let keyword can


  // Break and continue statement

  let text = "";
    for (let i = 0; i < 10; i++) {
    if (i === 5) { continue; }
    text += " The number is " + i + "<br>";
  }
  document.getElementById("break_continue").innerHTML = text;
  