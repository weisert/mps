
angular.module('mpsApp').service('videoFactory', ['$resource', '$location', function($resource, $location) {
    'use strict';
    var baseUrl = $location.protocol() + '://'+ $location.host() +':'+  $location.port();
    this.getVideos = function() {
        return $resource(baseUrl + "/api/video");
    };
}]);
