//Add an albumData property that holds a copy of albumPicasso
(function() {
     function AlbumCtrl(Fixtures) {
       this.albumData = Fixtures.getAlbum();


    }


     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);

 })();
