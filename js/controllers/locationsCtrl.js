angular.module( 'devmtnTravel' )
    .controller( 'locationsCtrl', function( $scope, $state, mainSrv ) {
        $scope.travelInfo = mainSrv.getTravelInfo();        
} )
