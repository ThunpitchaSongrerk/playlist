// Complete Day 1 goals here

let songNames = [
  "moonlight", 
  "happier", 
  "The feels", 
  "STAY"
];

let artists = [
  "dhruv", 
  "Olivia Rodrigo", 
  "TWICE", 
  "The Kid LAROI"
];

let songImages = [
  "https://cdn.smarturl.it/prod/images/retail/upload/caca/ac/l94mwrn3h7dexu3xdn302jzo_450871.jpg", 
  "https://assets.teenvogue.com/photos/60a7e7547e602be103622f01/2:3/w_800,h_1200,c_limit/unnamed%20(11).jpg", 
  "https://upload.wikimedia.org/wikipedia/en/5/50/Twice_-_The_Feels.png", 
  "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png"
];

let songLinks = [
  "https://open.spotify.com/track/2Qn6WHJrY5Im82Jux8FboH?si=c8ee4e0ff53d4d3d",
  "https://open.spotify.com/track/2tGvwE8GcFKwNdAXMnlbfl?si=0c56c9725a024946",
  "https://open.spotify.com/track/37iQlLWnkc5zx4bnzgNH6x?si=b776a439c202403f",
  "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20?si=0f193e96a79f40aa",
];

let songLength = [
  "2:39",
  "2:56",
  "3:18",
  "2:21",
];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
$(".songs").text(songNames[0]);
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
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
