 //Main.js

 //Ternary Operator: Rider
 //A function with HTML JS using a ternary operator with input from the browser
 function Ride_Function() {
    var Height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Rider").innerHTML = can_ride + " to ride.";//Ride to Rider
 }

 //Ternary Operator: Vote
 function vote_Function() {
    var age =
    document.getElementById("age").value;
    var voteable = (age < 18) ? "Too young":"Old enough ";
    document.getElementById("vote").innerHTML = voteable + "to vote.";//id of the new paragraph added to html file

}
//Javascript Keywords class inheritance code link to HTML file 
// One 

//A constructor function utilzing "new" and "this" keywords
function vehicle(Make, Model, Year, Color) {
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
}
   var Jack = new vehicle("Dodge", "Viper", 2020,"Red");
   var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
   var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

 //A function to display the results of the constructor in an HTML element
function myFunction() {
    document.getElementById("new_and_this").innerHTML = "Erick drives a " + 
    Erik.vehicle_Make + "\n " + 
    Erik.vehicle_Model +
     " manufactured in " +
     Erik.vehicle_Year;
}
    // Two
    //constructor function utilizing "new" and "this" keywords: movie
 function movie(title, director, yearReleased) {
   this.movie_title = title;
   this.movie_director = director;
   this.movie_yearReleased = yearReleased;
 }
   var Macbel = new movie("A boy and His Dog", "Jack well",  2009);
   var Saris = new movie("Mark Morris", "George Miller", 1990);

  //A function to display the results of a constructor in an HTML element
function movieFunction() { //movie1
     document.getElementById("this_new").innerHTML = " Movie about " + 
     Macbel.movie_title + 
     " directed by " + 
     Macbel.movie_director + 
     "\n" + "released in "  + 
     Macbel.movie_yearReleased;
}
  // Three
    //constructors function utilizing "new" and "this" keywords: car
function car(make, model, year, color) {
      this.car_make = make;
      this.car_model = model;
      this.car_year = year;
      this.car_color = color;
}
    var Ben = new car("Toyota", "Lexus", 2019, "Black");
    var kelly = new car("Tesla", "Monster", 2021, "Brown");
    var mark = new car("Benz", "Bold", 2024, "Green");

    function car_Function() {
         document.getElementById("this_and_new").innerHTML = " Ben bought a " + 
         Ben.car_color + 
          " \n" + 
          Ben.car_model + 
          " manufactured in " + 
          Ben.car_year; //output: car is a 2019 Toyota Lexus
} 
//Nested Functions Assignment
 function nested_Function() {
     document.getElementById("suming").innerHTML = sum();
     function sum() {
         var adding_sum = 10;
         function add_two() {adding_sum += 2;}
         add_two();
         return adding_sum; //Output of this would be "12" the add_two() function nested above
    }
}

//A nested function two
function add_strings() {
  var start_string = "Hello";

  function adding(str) {
    start_string = start_string + " " + str;
  }
  adding("World");
  document.getElementById("Nested_Function").innerHTML = start_string;
}
    