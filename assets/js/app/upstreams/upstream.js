(function() {
    'use strict';

    /**
     * Model for Author API, this is used to wrap all Author objects specified actions and data change actions.
     */
    angular.module('frontend.upstreams')
        .service('Upstream', [
            'DataModel',
            function(DataModel) {

                var model = new DataModel('api/upstreams');

                model.handleError = function($scope,err) {
                    $scope.errors = {}
                    if(err.data && err.data.body){

                        for(var key in err.data.body){
                            $scope.errors[key] =err.data.body[key]
                        }
                    }
                }

                return model;

            }
        ])
    ;
}());