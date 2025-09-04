

//main.js


//Two variables

//Code here can not use carName (undefine outside my functions)
function my_Function() {
let text = "outside: " + typeof carName;
document.getElementById("code1").innerHTML = text;
}

//Calling a function() with defined variable carName
function Get_CarName() {

  let carName = "Benz";
  let text = "inside: " + typeof carName + " " + carName; 
  document.getElementById("code2").innerHTML = text; //code here use carName
}

//This function use the += operator
function MyString() {
  var sentence = "I am going to the gym";  //variable  created
  sentence += "for fitness exercise! "; //using the += operator to add to the variable 
  document.getElementById("concatenate").innerHTML = sentence;//using document.getElementById()
}


  function Increment() {
    var x = 7;
    x++;
    document.getElementById("Incrnt").innerHTML = x;
}

function Decrement() {
  var x = 9.35;
  x--;
  document.getElementById("Decrnt").innerHTML = x;
}
