
// Constructor Function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// Create a Person object
const myfather = new Person("John", "Doe", 50, "blue");

// Display age
document.getElementById("new").innerHTML =
"My father is " + myfather.age + ".";

//constructor function for person object
function person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;

}

//create two person objects
const myFather = new person("John", "Mark", 35, "grey");
const myMother = new person("Rebeca", "sarah", 25, "green");

// Display age
document.getElementById("this_and_new").innerHTML = "My father is " + myFather.age + "."
"My mother is " + myMother.age + ".";

