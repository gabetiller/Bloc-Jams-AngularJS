//Add an albumData property that holds a copy of albumPicasso
(function() {
    function AlbumCtrl(Fixtures, SongPlayer) {

       this.albumData = Fixtures.getAlbum();

       this.songPlayer = SongPlayer;


    }


     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);

 })();
