

//main.js

// javascript Dictionary Assignment


function my_data() {  // Define functions
var person = {   // variable Key value pair
    FirstNme : "Mike",
    LastName : "Porter"
    age: 23,
    eyecolor: " blue"
  };

document.getElementById("Descrip"). innerHTML = person.firstNme + " is " + person.age + " years old.";

}
 

function my_Dictionary() { //Defining function
    var Animal = {   //variables key value pair
        species: "Tiger",
        color: "speckle",
        prey: "deer",
        age:5,
        sound: "Bark!"

    };
    delete Animal.sound;
    document.getElementById("Dictionary").innerHTML = Animal.sound;
}






    




