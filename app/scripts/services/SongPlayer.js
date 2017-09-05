(function() {
     function SongPlayer() {
          var SongPlayer = {};

          var currentSong = null;
/**
* @desc Buzz object audio file
* @type {Object}
*/
          var currentBuzzObject = null;


/**
* @function playSong
* @desc Plays the current Buzz object. Sets the playing property of the song object to true
* @param {Object} song
*/
   var playSong = function(song) {
         currentBuzzObject.play();
         song.playing = true;
   }
/**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/
    var setSong = function(song) {
           if (currentBuzzObject) {
               currentBuzzObject.stop();
               currentSong.playing = null;
           }



/**
* @desc Buzz object audio file
* @type {Object}
*/
         currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
         });

         currentSong = song;
      };
/**
* @function SongPlayer.play
* @desc If the currently playing song is not the same as the song the user clicks on, then we want to:
        1.Stop the currently playing song, if there is one.
        2.Set a new Buzz sound object.
        3.Set the newly chosen song object as the currentSong.
        4..Play the new Buzz sound object.
* @param {Object} song
*/
     SongPlayer.play = function(song) {
       if (currentSong !== song) {

         setSong(song);

         playSong(song);

         } else if (currentSong === song) {
           if (currentBuzzObject.isPaused()) {
               currentBuzzObject.play();
           }
       }
     };
/**
* @function SongPlayer.play
* @desc If the user clicks on the currentBuzzObject (current song) we pause the song and set the song.play boolean to false.
* @param {Object} song
*/
     SongPlayer.pause = function(song) {
     currentBuzzObject.pause();
     song.playing = false;
 };
          return SongPlayer;
     }

     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
