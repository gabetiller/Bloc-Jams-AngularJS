(function() {
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
/**
* @desc storing album info
* @type {Object}
*/
          var currentAlbum = Fixtures.getAlbum();
/**
* @desc Buzz object audio file
* @type {Object}
*/
          var currentBuzzObject = null;



/**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/
    var setSong = function(song) {
           if (currentBuzzObject) {
               currentBuzzObject.stop();
               SongPlayer.currentSong.playing = null;
           }



/**
* @desc Buzz object audio file
* @type {Object}
*/
         currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
         });

         SongPlayer.currentSong = song;
      };
      var getSongIndex = function(song) {
           return currentAlbum.songs.indexOf(song);
       };
 /**
 * @function getSongIndex
 * @desc finding the index of the current song being played
 * @param {Object} song
 */
      var getSongIndex = function(song) {
       return currentAlbum.songs.indexOf(song);
};

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
* @function stopSong
* @desc Stops the current Buzz object. Sets the playing property of the song object to true
* @param {Object} song
*/
  var stopSong = function(song) {
        currentBuzzObject.stop();
        song.playing = null;
  }

/**
* @desc Active song object from list of songs
* @type {Object}
*/
    SongPlayer.currentSong = null;

/**
* @function SongPlayer.play
* @desc If the currently playing song is not the same as the song the user clicks on, then we want to:
        1.Stop the currently playing song, if there is one.
        2.Set a new Buzz sound object.
        3.Set the newly chosen song object as the SongPlayer.currentSong.
        4..Play the new Buzz sound object.
* @param {Object} song
*/

     SongPlayer.play = function(song) {
       song = song || SongPlayer.currentSong;
       // if we click on a new song
       if (SongPlayer.currentSong !== song) {

         setSong(song);

         playSong(song);
      // if we click on the current song or click the player bar play button
       } else if (SongPlayer.currentSong === song) {
         if (currentBuzzObject.isPaused()) {
             playSong(song);
         }
       }
     };

/**
* @function SongPlayer.previous
* @desc gets the previous index of the song. If the song is the first song and the user clicks previous, the current song stops. if it's not the first song, it plays the index.
* @param {Object} Songplayer.currentSong
*/
     SongPlayer.previous = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex--;

     if (currentSongIndex < 0) {
         stopSong();
       } else {
           var song = currentAlbum.songs[currentSongIndex];
           setSong(song);
           playSong(song);
       }
 };

 /**
 * @function SongPlayer.next
 * @desc gets the next index of the song. If the song is the last song and the user clicks previous, the current song stops. if it's not the first song, it plays the index.
 * @param {Object} Songplayer.currentSong
 */

     SongPlayer.next = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex++;
     if (currentSongIndex > currentAlbum.songs) {
         stopSong();
       } else {
           var song = currentAlbum.songs[currentSongIndex];
           setSong(song);
           playSong(song);
       }

};
/**
* @function SongPlayer.play
* @desc If the user clicks on the currentBuzzObject (current song) we pause the song and set the song.play boolean to false.
* @param {Object} song
*/
     SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
     currentBuzzObject.pause();
     song.playing = false;
 };
          return SongPlayer;
     }

     angular
         .module('blocJams')
         .factory('SongPlayer', ['Fixtures', SongPlayer]);
 })();
