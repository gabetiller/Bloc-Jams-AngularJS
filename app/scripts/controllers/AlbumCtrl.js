//Add an albumData property that holds a copy of albumPicasso
(function() {
     function AlbumCtrl() {
       this.albumData = angular.copy(albumPicasso);
       

    }


     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();
