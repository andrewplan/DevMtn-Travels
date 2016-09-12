angular.module( 'devmtnTravel' )
    .controller( 'bookedCtrl', function( $scope, $stateParams, mainSrv ) {
      $scope.travelInfo = mainSrv.getTravelInfo();
      $scope.bookedPackage = {};
      $scope.backgroundImage = {};

      $scope.getBookedPackage = function( id ) {
        for ( var i = 0; i < $scope.travelInfo.length; i++ ) {
          if ( $scope.travelInfo[ i ].id === Number( id ) ) {
            return $scope.travelInfo[ i ];
          }
        }
      };

      $scope.bookedPackage = $scope.getBookedPackage( $stateParams.id );
      $scope.backgroundImage = {
        'background-image': 'url( "' + $scope.bookedPackage.image + '" ) '
      };

} )
