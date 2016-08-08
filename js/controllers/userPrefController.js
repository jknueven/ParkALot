(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('userPrefController', function($state, back) {
       var vm = this;

       if(back.getToken() === null)
       {
        $state.go('login');
       }

      var call = back.userGet(back.getToken());

       call.then(function(data){
        console.log(data.data.data[0]);
       vm.preference = data.data.data[0];

       });


      vm.submit = function(){

        var edit = back.editUser(vm.preference, vm.preference.id);

        edit.then(function(response){
          console.log(response);
          $state.go('userPref');
        })
      }

       var call = back.userGet(back.getToken());

       call.then(function(data){
        console.log(data.data.data[0]);
       vm.user = data.data.data[0];

       });
       
    

      vm.go = function (){

        $state.go('mapAddress', vm.form);
   
      }

      // vm.showFav = function(destination){
      //   var address = back.favorite(destination.id,destination.favorited);

      //   address.then(function(response){
      //     destination.favorited ++;
      //   })
      // }
      
    });
})();