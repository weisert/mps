
angular.module('mpsApp')
    .controller('VideoController', ['$scope', 'videoFactory',
        function ($scope, videoFactory) {
            'use strict';
            $scope.videos = videoFactory.getVideos();

            $scope.showFiles = function($event, item) {
                var body = $($event.currentTarget).closest('.panel').find('.panel-body');
                body.fadeToggle();
                body.removeClass('initiallyHidden');
            }
        }
    ]);
