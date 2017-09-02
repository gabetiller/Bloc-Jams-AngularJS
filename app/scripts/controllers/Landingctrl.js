
//Defining a controller for the landing view. This is what will glue the actualy view to the template. A controller is a JavaScript object created by a constructor function. Controllers contain the "business logic" that apply functions and values to the scope

(function() {
     function LandingCtrl() {
        this.heroTitle = "Turn the Music Up!";
     }

     angular
         .module('blocJams')
         .controller('LandingCtrl', LandingCtrl);
 })();
