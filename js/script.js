// Complete Day 1 goals here

//let songNames = ["moonlight", "happier", "The feels", "STAY"];

//let artists = ["dhruv", "Olivia Rodrigo", "TWICE", "The Kid LAROI"];

//let songImages = [
//  "https://cdn.smarturl.it/prod/images/retail/upload/caca/ac/l94mwrn3h7dexu3xdn302jzo_450871.jpg",
//  "https://assets.teenvogue.com/photos/60a7e7547e602be103622f01/2:3/w_800,h_1200,c_limit/unnamed%20(11).jpg",
// "https://upload.wikimedia.org/wikipedia/en/5/50/Twice_-_The_Feels.png",
//  "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png",
//];

//let songLinks = [
//  "https://open.spotify.com/track/2Qn6WHJrY5Im82Jux8FboH?si=c8ee4e0ff53d4d3d",
//  "https://open.spotify.com/track/2tGvwE8GcFKwNdAXMnlbfl?si=0c56c9725a024946",
//  "https://open.spotify.com/track/37iQlLWnkc5zx4bnzgNH6x?si=b776a439c202403f",
//  "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20?si=0f193e96a79f40aa",
//];

//let songLength = ["2:39", "2:56", "3:18", "2:21"];

let moonlight = {
  artist: "dhruv",
  image: "https://cdn.smarturl.it/prod/images/retail/upload/caca/ac/l94mwrn3h7dexu3xdn302jzo_450871.jpg",
  link: "https://open.spotify.com/track/2Qn6WHJrY5Im82Jux8FboH?si=c8ee4e0ff53d4d3d",
  length: "2 minutes and 39 seconds",
  name: "moonlight"
}

let happier = {
  artist: "Olivia Rodrigo",
  image: "https://assets.teenvogue.com/photos/60a7e7547e602be103622f01/2:3/w_800,h_1200,c_limit/unnamed%20(11).jpg",
  link: "https://open.spotify.com/track/2tGvwE8GcFKwNdAXMnlbfl?si=0c56c9725a024946",
  length: "2 minutes and 56 seconds",
  name: "happier"
}

let theFeels = {
  artist: "TWICE",
  image: "https://upload.wikimedia.org/wikipedia/en/5/50/Twice_-_The_Feels.png",
  link: "https://open.spotify.com/track/37iQlLWnkc5zx4bnzgNH6x?si=b776a439c202403f",
  length: "3 minutes and 18 seconds",
  name: "The Feels"
}

let stay = {
  artist: "The Kid LAROI",
  image: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png",
  link: "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20?si=0f193e96a79f40aa",
  length: "2 minutes and 21 seconds",
  name: "STAY"
}


let playlist = [moonlight, happier, theFeels, stay, addSongs];


function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  // write your forEach loop here
  playlist.forEach(function (song) {
    $(".songs").append("<p>" + song.name + "</p>");
    $(".artists").append("<p>" + song.artist + "</p>");
    $(".images").append(`<p><img src="${song.image}"></p>`);
    $(".links").append(`<p><a href="${song.link}">Link</a></p>`);
    $(".lengths").append("<p>" + song.length + "</p>");
  });

//   artists.forEach(function (name) {
//     $(".artists").append("<p>" + name + "</p>");
//   });

//   songImages.forEach(function (image) {
//     $(".images").append(`<p><img src="${image}"></p>`);
//   });

//   songLinks.forEach(function (link) {
//     $(".links").append(`<p><a href="${link}">Link</a></p>`);
//   });

//   songLength.forEach(function (length) {
//     $(".lengths").append("<p>" + length + "</p>");
//   });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  let addSongs = {
  artist: (".artist").val(),
  image: $(".image").val(),
  link: $(".link").val(),
  length: $(".length").val(),
  name: $(".title").val()
}
  
  
// let song = $(".title").val();
// playlist.push(song.addSongs); 
//   let picture = $(".image").val();
//   songImages.push(picture);
//   let singer = $(".artist").val();
//   artists.push(singer);
//   let link = $(".link").val();
//   songLinks.push(link);
//   let length = $(".length").val();
//   songLength.push(length);
// }

$(document).ready(function(){

  $(".add").click(function () {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
  });
});
displaySongInfo();
