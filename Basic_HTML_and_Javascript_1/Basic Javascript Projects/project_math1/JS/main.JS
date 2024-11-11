

//main.JS

   //The addition operator ( + ) adds numbers
    var x1 = 24
    var x2 = 45
    var x3 = 2
    document.addEventListener("click",function() { //Defi
        add_function (x1, x2, x3);
    } );
    function add_function(a, b, c) { //function is define to print the result
        var x = a + b + c;
  
        document.getElementById('math').innerHTML = x; //Id Element to call the function
  
 }
      
//Multiplication operator ( * ) multiplied variables with numbers and print out the result
 
    let x = 5;
    let y = 2;
    let z = x * y;
    document.addEventListener("click",function() { //Call event listener function
        mult_sign ( x, y);
    } );
    function mult_sign(m, n) { //Defined function
        let z = m * n;

    document.getElementById('mult').innerHTML = z; //Id element to call the function
    }


    //subtraction operator ( - )two numbers .




