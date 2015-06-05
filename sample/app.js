angular.module('app',['comImageViewer'])
.controller('appCtrl',function($scope){
    $scope.images=['../img/fun (1).jpg','../img/fun (2).jpg',
        '../img/fun (3).jpg','../img/fun (4).jpg','../img/fun (5).jpg','../img/fun (6).jpg'
        ,'../img/fun (7).jpg','../img/fun (8).jpg','../img/fun (9).jpg'];
    });