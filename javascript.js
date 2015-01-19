//var button = document.getElementById("button");

//select the sections, must append each section with createItem function
//var comedyList = document.querySelector("#comedySection");
//var romanceList = document.querySelector("#romanceSection");
//var actionList = document.querySelector("#actionSection");
//var chuckNorris = document.querySelector("#norrisSection");

//array of movies -> have movies listed with class of "unselected"
var comedies = ["Step Brothers", "The Other Guys", "Zoolander", "Megamind", "Semi-pro", "Blades of Glory"];
var romance = ["Thor", "Iron Man", "Iron Man 2", "Iron Man 3", "The Incredible Hulk", "Spider-Man"];
var action = ["The Expendables", "The Expendables 2", "The Expendables 3", "Rambo"];
var chuckNorris = ["The Delta Force", "Sidekicks", "Missing In Action", "The Hitman", "Firewalker"];


//create each section of the movie ->
// 1. each with their own poster
var list = document.getElementById("theList");
var eachItem = function(section){
  for(var i=0; i < section.length; i++){

    var image = document.createElement("img");
    var li = document.createElement("li");
    var div = document.createElement("div");
    //console.log(i+" li created");

    list.appendChild(li);
    li.appendChild(image);
    li.appendChild(div);

    var input = section[i];
    var url_safe = encodeURI(input);
    var url = "http://omdbapi.com/?t=" + url_safe;
    //console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener('load', function(e){
      // var image = document.createElement("img");
      // var li = document.createElement("li");
      // var div = document.createElement("div");
      // list.appendChild(li);
      // li.appendChild(image);
      // li.appendChild(div);
      var d = xhr.responseText;
      //console.log("stringified");
      var parsed = JSON.parse(d);
      //console.log(parsed);
      image.src = parsed.Poster;
      //console.log("image source added");
      div.innerHTML = parsed.Title;
    })
   xhr.send();
  }
  //console.log(list);
  //xhr.send();
}

eachItem(comedies);

//   button.addEventListener("click", function(){
//     var input = document.querySelector("#input").value;
//     var url_safe = encodeURI(input);
//     var url = "http://omdbapi.com/?t=" + url_safe; //link to info(part of api)
//     var xhr = new XMLHttpRequest();
//
//     xhr.open("GET", url); //"get" get from url?
//
//     xhr.addEventListener('load', function(e){ //ready for event listener
//     var d = xhr.responseText; //***automatically JSON stringified***
//     var parsed = JSON.parse(d); // **MUST parse information because of JSON**
//     console.log(parsed);
//     var img = document.querySelector("img");
//     img.src = parsed.Poster;
//       input.value = " "; //form dosen't like me, so used " " to clear input
//   })
//   xhr.send();
// });
