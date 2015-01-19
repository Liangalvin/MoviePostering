//array of movies -> have movies listed with class of "unselected"
var comedies = ["Step Brothers", "The Other Guys", "Zoolander", "Megamind", "Semi-pro", "Blades of Glory", "21 Jump street", "22 Jump Street", "American Pie", "American Wedding", "American Reunion", "The Hangover", "Just Go With It", "50 First Dates"];
var romance = ["Thor", "Iron Man", "Iron Man 2", "The Incredible Hulk", "Spider-Man", "Spider-Man 2", "Spider-Man 3", "Transformers", "Transformers: Age of Extinction", "Transformers: Dark of the Moon", "Transformers: Revenge of the Fallen", "Batman Begins", "The Dark Knight", "The Dark Knight Rises", "Man of Steel"];
var action = ["The Expendables", "The Expendables 2", "The Expendables 3", "The Help", "Rambo", "Gangster Squad", "The Terminator", "Terminator 2: Judgement Day", "Terminator 3: Rise of the Machines", "Terminator Salvation", "Taken", "Taken 2", "The A-team", "ZombieLand"];
var chuckNorris = ["The Delta Force", "Sidekicks", "Missing In Action", "The Hitman", "Firewalker", "DodgeBall: A True Underdog story", "Top Dog", "Hellbound", "The Cutter", "Hero and the Terror"];


//create each section of the movie ->
// 1. each with their own poster
var list = document.getElementById("theList");
// var eachItem = function(section){
//   for(var i=0; i < section.length; i++){

var create = function(elem){
//comedies.forEach(function(elem){
    var image = document.createElement("img");
    var li = document.createElement("li");
    var div = document.createElement("div");
    //console.log(i+" li created");

    list.appendChild(li);
    li.appendChild(image);
    li.appendChild(div);

    var input = elem;
    var url_safe = encodeURI(input);
    var url = "http://omdbapi.com/?t=" + url_safe;
    //console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener('load', function(e){
      var d = xhr.responseText;
      //console.log("stringified");
      var parsed = JSON.parse(d);
      image.src = parsed.Poster;
      //console.log("image source added");
      div.innerHTML = parsed.Title;
    })
   xhr.send();
 }
  //console.log(list);
  //xhr.send();
//}

comedies.forEach(create);
romance.forEach(create);
action.forEach(create);
chuckNorris.forEach(create);
