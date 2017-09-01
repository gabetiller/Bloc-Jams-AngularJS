
//Defining a controller for the landing view. This is what will glue the actualy view to the template.

(function() {
     function LandingCtrl() {
        this.heroTitle = "Turn the Music Up!";
     }

     angular
         .module('blocJams')
         .controller('LandingCtrl', LandingCtrl);
 })();
