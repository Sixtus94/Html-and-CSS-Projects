//main.js
//Javascript project5_Dictionaries
function my_Dictionary() { //function  to call variables kvp
var movie = {    // key value pairs dictionary
title:"Fast & furous",
genre:"Action",
director:"Justin Lin",
rating:"PG-7"
};
delete movie.genre; //This removes the Genre KVP from the Dictionary before output is displayed
document.getElementById("DictOne").innerHTML=movie.genre? movie.sound:"Genre has been deleted by " + movie.director;
}
//creatin variables
function car_Object() {  
var car = { // This dictionary code assigns many kvp
name:"Toyota",
model:"500", //car Object properties
weight:"950kg",
color:"whine"
};
 //Remove the car.object kvp from the Dictionary before displayed output
document.getElementById("DictTwo").innerHTML="The "+ car.name+ " weight is " + car.weight;
}