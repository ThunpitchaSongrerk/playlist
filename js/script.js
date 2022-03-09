let moonlight = {
  artist: "dhruv",
  image: "https://cdn.smarturl.it/prod/images/retail/upload/caca/ac/l94mwrn3h7dexu3xdn302jzo_450871.jpg",
  link: "https://www.youtube.com/embed/Ob0uXrhdWhk",
  length: "2 minutes and 39 seconds",
  name: "moonlight"
}

let happier = {
  artist: "Olivia Rodrigo",
  image: "https://assets.teenvogue.com/photos/60a7e7547e602be103622f01/2:3/w_800,h_1200,c_limit/unnamed%20(11).jpg",
  link: "https://www.youtube.com/embed/ZQFmRXgeR-s",
  length: "2 minutes and 56 seconds",
  name: "happier"
}

let theFeels = {
  artist: "TWICE",
  image: "https://upload.wikimedia.org/wikipedia/en/5/50/Twice_-_The_Feels.png",
  link: "https://www.youtube.com/embed/f5_wn8mexmM",
  length: "3 minutes and 18 seconds",
  name: "The Feels"
}

let stay = {
  artist: "The Kid LAROI",
  image: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png",
  link: "https://www.youtube.com/embed/kTJczUoc26U",
  length: "2 minutes and 21 seconds",
  name: "STAY"
}


let playlist = [moonlight, happier, theFeels, stay];


function displaySongInfo() {
  playlist.forEach(function (song) {
    $(".songs").append("<p>" + song.name + "</p>");
    $(".artists").append("<p>" + song.artist + "</p>");
    $(".images").append(`<p><img src="${song.image}"></p>`);
    $(".links").append(`<iframe src= ${song.link}></iframe>`);
    $(".lengths").append("<p>" + song.length + "</p>");
  });
}

function emptySongInfo() {
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  let songToAdd = {
  artist: $(".artist").val(),
  image: $(".image").val(),
  link: $(".link").val(),
  length: $(".length").val(),
  name: $(".title").val(),
    }
  playlist.push(songToAdd)
  }

$(document).ready(function(){

  $(".add").click(function () {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
  });
});
displaySongInfo();
