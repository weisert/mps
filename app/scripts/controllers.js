
angular.module('mpsApp')
    .controller('VideoController', ['$scope', 'videoFactory',
        function ($scope, videoFactory) {
            'use strict';
            console.log("hi");
            $scope.videos = videoFactory.getVideos();
        }
    ]);
