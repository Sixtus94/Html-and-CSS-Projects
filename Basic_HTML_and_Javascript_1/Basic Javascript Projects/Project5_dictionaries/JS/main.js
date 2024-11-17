

//main.js

function my_Dictionary() {
    var movie = {
        Title: "The Avengers",
        Genre: "Action",
        Director: "Joss whedon,"
        Rating: "PG-13",
    };
    delete movie.Genre; //This removes the Genre KVP from the Dictionary before output is displayed
document.getElementById("Dictionary").innerHTML = movie.Genre;

}