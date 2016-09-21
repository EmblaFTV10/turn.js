/**
 * Created by malitht on 9/20/2016.
 */


var app = angular.module('myApp', []);

$("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true
});


app.controller('myCtrl', function($scope) {
    $scope.page1Content = "";
    $scope.page2Content = "";
    $scope.page3Content = "";


});