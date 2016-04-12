
angular.module('mpsApp')
    .controller('VideoController', ['$scope', 'videoFactory',
        function ($scope, videoFactory) {
            'use strict';
            videoFactory.getVideos().query(function(videoList) {
                videoList.sort(function(a, b) { return a.name < b.name; });
                $scope.videoList = videoList;
            });

            $scope.showFiles = function($event, item) {
                var body = $($event.currentTarget).closest('.panel').find('.panel-body');
                body.fadeToggle();
                body.removeClass('initiallyHidden');
            };
        }
    ]);
