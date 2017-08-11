
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
  console.log('handle');
  let $resultsContainer = $('#results-container');
  let source = $('#results-template').html();
  let template = handlebars.compile(source);

  // music.forEach(function(song))
  music.forEach(function(song){
    let info = $(template(song));  //this is the song data
    // console.log(info);
    $resultsContainer.append(info);
    info.data('song', song);
    info.click(function(){
      // $album = $(e.target);
      // var song = $album.data('song');
      console.log(song);
      document.getElementById('jams').setAttribute('src', song.previewUrl);
      document.getElementById('jams').play();
      document.getElementById('current').textContent = "Now playing : " + song.trackName + " by " + song.artistName; 
    });

  })

  // document.querySelectorAll('.song-row').forEach(function(songTile){
  //   songTile.addEventListener('click', function(e){
  //
  //
  //     console.log(e.target);
  //     // console.log('music', music);
  //     // music.forEach(function(song){
  //       // console.log(song.previewUrl);
  //     // })
  //     // let $songUrl = songTile.find('p').html();
  //     // console.log('songtile', songTile);
  //     // console.log($songUrl);
  //     // playSong();
  //     // return document.getElementById('jams').setAttribute('src', link);
  //   })
  // });

  // function playSong (){
    // we need to play the song here

  // }

}

// console.log('hey');
// document.querySelectorAll('.song-row').forEach(function(t){
//   t.addEventListener('click', function(e){
//     console.dir(e);
//   });
// })


// function playSong(){
//   let link = data[i].previewUrl;
//   document.getElementById('jams').setAttribute('src', link);
// }




// document.getElementById('#results-template').addEventListener('click', function(e){
//   if (e.target === e.target.matches("h3.track"){
//     console.log('track clicked!');
//   })
// });



// let songPlayer = $('#jams');
// let chosenSong =
// song.previewUrl.textContent = document.getElementById

// document.getElementById('results-container').addEventListener('click', function(e){
//   if (e.target === $('.track'){
//     console.log();
//   })
// });


// let chosenSong = document.querySelectorAll('.track');
//   console.log(chosenSong);
//   chosenSong.forEach(function(track){
//     console.log();
//   })


// function playMusic(song){
//   let $playerContainer = $('#player-container');
//   let source = $('#player-template');
//   let template = handlebars.compile(source);
//   console.log(template);
//
//   let audioFile = document.getElementById('jams');
//   return audioFile;
// }
