angular.module('mySiteApp', [])
    .controller('mySiteController', function($scope) {
    
    var thisapp = this; 
    
    $scope.user = 'Aom'; 
    $scope.cardList = ['PlanIT', 'Charm', 'EM Home', 'IT Services', 'ITSM'];
    $scope.cardListFull = [ { 'name' : 'EMIT', 'sites' : [ { 'name' : 'PlanIT' , 'URL' : 'http://www.google.com'},  
                                       { 'name' : 'Charm' , 'URL' : 'http://www.google.com'},
                                       { 'name' : 'EM Home' , 'URL' : 'http://www.google.com'}, 
                                       { 'name' : 'IT Services' , 'URL' : 'http://www.google.com'} ] }, 
                            { 'name' : 'SharePoint' , 'sites' : [ { 'name' : 'My Site' , 'URL' : 'http://www.google.com'},  
                                       { 'name' : 'SPS' , 'URL' : 'http://www.google.com'},
                                       { 'name' : 'Safety' , 'URL' : 'http://www.google.com'}, 
                                       { 'name' : 'ETC' , 'URL' : 'http://www.google.com'} ] }
                          ]; 
    
    $scope.search = function( card ){
        
        if( $scope.query===null | $scope.query===undefined )
            return true; 
        
        return card.name.toLowerCase().includes( $scope.query ); 
    };
    
    $scope.filterNonEmptyGroup = function( group ) {
        var bFound = false; 
        
        group.sites.forEach( function(card){
            if ( $scope.search( card )===true ){
                bFound = true;    
            }  
        }); 
        
        return bFound; 
    }; 
}); 

$( document ).ready(function() {
    $('#emsearch').focus(); 
});

$('#emsearch').keypress(function (e) {
  if (e.which == 13) {
    alert("hola"); 
    return false;    //<---- Add this line
  }
});