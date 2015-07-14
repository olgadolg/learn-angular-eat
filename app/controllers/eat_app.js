EatApp.controller('EatCtrl', ['$scope', 'googleAddressAPI', function ($scope, googleAddressAPI) {

    //initial data for eat list
    $scope.eatList = [
        {
            'name': "traveler's coffee",
            'descr': 'description1'
        },
        {
            'name': 'dfzxvxvzxvzxvz',
            'descr': 'description2'
        }
    ];


    $scope.actionAdd = function () {
        var item = {};
        item.name = $scope.name;
        item.descr = $scope.descr;
        googleAddressAPI.getAddress(item, function (address) {
            item.address = address;
            $scope.eatList.push(item);
            $scope.$apply();
        });
    };

    $scope.actionDel = function (item) {
        var index = $scope.eatList.indexOf(item);
        $scope.eatList.splice(index, 1);
    };
    $scope.actionEdit = function (item, field_name, $event) {
        var index = $scope.eatList.indexOf(item);
        $scope.eatList[index][field_name] = $event.target.innerHTML;
        if (field_name == 'name') {
            googleAddressAPI.getAddress(item, function (address) {
                item.address = address;
                $scope.$apply();
            });
        }
    };

}]);