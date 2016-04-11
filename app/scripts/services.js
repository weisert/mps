
angular.module('mpsApp').service('videoFactory', function() {
    'use strict';
    var data = [
        {"files": ["http://photos.lan/video/2015.03.07/video.mp4"], "name": "2015.03.07"},
        {"files": ["http://photos.lan/video/2014.03.08/video.mp4"], "name": "2014.03.08"},
        {"files": ["http://photos.lan/video/2013.03.05/video.mp4"], "name": "2013.03.05"},
        {"files": ["http://photos.lan/video/2015.09.26/VID_20150926_134132.mp4"], "name": "2015.09.26"},
        {"files": ["http://photos.lan/video/2015.09.15/VID_20150915_141219.mp4"], "name": "2015.09.15"},
        {"files": ["http://photos.lan/video/2013.12.26/video.mp4"], "name": "2013.12.26"},
        {"files": ["http://photos.lan/video/2015.08.23/VID_20150823_200939.mp4"], "name": "2015.08.23"},
        {"files": [
            "http://photos.lan/video/2016.02.27/VID_20160227_175356.mp4",
            "http://photos.lan/video/2016.02.27/VID_20160227_180455.mp4",
            "http://photos.lan/video/2016.02.27/VID_20160227_175256.mp4"], "name": "2016.02.27"},
        {"files": [
            "http://photos.lan/video/2015.08.01/VID_20150801_162045.mp4",
            "http://photos.lan/video/2015.08.01/VID_20150801_172023.mp4"], "name": "2015.08.01"},
        {"files": [
            "http://photos.lan/video/2015.11.05/VID_20151105_103531.mp4",
            "http://photos.lan/video/2015.11.05/VID_20151105_112827.mp4"], "name": "2015.11.05"},
        {"files": ["http://photos.lan/video/2015.09.13/VID_20150913_212655.mp4"], "name": "2015.09.13"},
        {"files": [
            "http://photos.lan/video/2015.12.27/VID_20151227_111200.mp4",
            "http://photos.lan/video/2015.12.27/VID_20151227_110453.mp4",
            "http://photos.lan/video/2015.12.27/VID_20151227_111548.mp4"], "name": "2015.12.27"},
        {"files": ["http://photos.lan/video/2012.12.25/video.mp4"], "name": "2012.12.25"},
        {"files": ["http://photos.lan/video/2014.11.15/video.mp4"], "name": "2014.11.15"},
        {"files": ["http://photos.lan/video/2015.06.14/VID_20150614_160042.mp4"], "name": "2015.06.14"},
        {"files": ["http://photos.lan/video/2015.10.23/VID_20151023_160026.mp4"], "name": "2015.10.23"},
        {"files": ["http://photos.lan/video/2014.12.25/video.mp4"], "name": "2014.12.25"},
        {"files": ["http://photos.lan/video/2015.10.25/VID_20151025_204016.mp4"], "name": "2015.10.25"},
        {"files": [
            "http://photos.lan/video/2015.11.06/VID_20151106_093315.mp4",
            "http://photos.lan/video/2015.11.06/VID_20151106_093005.mp4",
            "http://photos.lan/video/2015.11.06/VID_20151106_124508.mp4"], "name": "2015.11.06"},
        {"files": ["http://photos.lan/video/2014.02.24/video.mp4"], "name": "2014.02.24"},
        {"files": [
            "http://photos.lan/video/2009.08.01/video_02.mp4",
            "http://photos.lan/video/2009.08.01/video_03.mp4",
            "http://photos.lan/video/2009.08.01/video_01.mp4",
            "http://photos.lan/video/2009.08.01/video_00.mp4"], "name": "2009.08.01"},
        {"files": ["http://photos.lan/video/2011.09.29/video.mp4"], "name": "2011.09.29"}
    ];
    data.sort(function(a, b) { return a.name < b.name; });
    this.getVideos = function() {
        return data;
    };
});
