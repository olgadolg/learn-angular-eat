var EatApp = angular.module("EatApp", []);

EatApp.controller('EatCtrl', function($scope){
    $scope.eatList = [
        {'name': 'nameZav1',
         'descr': 'description1'},
        {'name': 'nameZav2',
            'descr': 'description2'}
    ];

    $scope.actionAdd = function(){
        var item = {};
        item.name = $scope.name;
        item.descr = $scope.descr;
        $scope.eatList.push(item);
    };

    $scope.actionDel = function(item){
        var index = $scope.eatList.indexOf(item);
        $scope.eatList.splice(index, 1);
    };
});