//main.js

// javascript Project4 Dictionary Assignment
function my_data() {  // Define functions and call
var person = {   // variable Key value pair, Dictionary.
firstName:"Mike",
lastName:"Porter",
age:23,
eyecolor:"blue"
};
    
document.getElementById("KVP").innerHTML=person.firstName + " is " + person.age +"years old.";
}

function my_Dictionary() { //Defining function
var Animal = {   //variables key value pair
species:"Tiger",
color:"speckle",
prey:"deer",
age:5,
sound:"Bark!"
};

document.getElementById("Dictionary").innerHTML=" The"+ Animal.species+ " is " + Animal.age + " years old and says " + Animal.sound;
}
    
    
    