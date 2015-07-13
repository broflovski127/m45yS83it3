angular.module('mySiteApp', [])
    .controller('mySiteController', function($scope) {
    
    var thisapp = this; 
    
    $scope.user = 'Aom'; 
    $scope.cardList = ['PlanIT', 'Charm', 'EM Home', 'IT Services', 'ITSM']; 
    
    $scope.search = function( card ){
        
        if( $scope.query===null | $scope.query===undefined )
            return true; 
        
        return card.toLowerCase().includes( $scope.query ); 
    };
}); 