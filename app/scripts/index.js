
let $ = require('jquery');
let handlebars = require('handlebars');

let keyword= 'jack johnson';
let searchUrl = 'https://itunes.apple.com/search';

document.getElementById('search-box').addEventListener('submit', function(e){
  e.preventDefault();
  keyword = document.getElementById('entry').value;
  console.log(keyword);
  let $resultsContainer = $('#results-container');
  $resultsContainer.empty();
  getMusic();                //end result of what we want to do when search clicked
});

getMusic();

function getMusic(){
  fetch(searchUrl + '?term=' + encodeURI(keyword)).then(function(res){
    return res.json();
  }).then(start);
}

function start(data){
  console.log(data);
  let music = data.results;
  music.splice(48);
  displayMusicData(music);
}

function displayMusicData(music){
  let $resultsContainer = $('#results-container');
  let source = $('#results-template').html();
  let template = handlebars.compile(source);

  // music.forEach(function(song))
  music.forEach(function(song){
    let info = template(song);
    // console.log(info);
    $resultsContainer.append(info);
  })

}


//when name of song is clicked song preview will be played by player
// document.getElementById('jams').addEventListener('play', function(e){
  // let audioFile =


//   playMusic();
// });






// function playMusic(song){
//   let $playerContainer = $('#player-container');
//   let source = $('#player-template');
//   let template = handlebars.compile(source);
//   console.log(template);
//
//   let audioFile = document.getElementById('jams');
//   return audioFile;
// }
