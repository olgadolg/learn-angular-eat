var EatApp = angular.module("EatApp", []);

EatApp.controller('EatCtrl', function ($scope) {
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

    $scope.getAddress = function(item){
        //var allAddress = '';
        var name = item.name;
        var searchPlace = function(name) {
            var request = {
                query: name
            };

            var new_el = document.createElement('div');
            service = new google.maps.places.PlacesService(new_el);
            service.textSearch(request, takeAddress);
        }(name);

        function takeAddress(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                item.address = (results[0].formatted_address).toString();
                $scope.eatList.push(item);
                $scope.$apply();
            }
        }
    };

    $scope.actionAdd = function () {
        var item = {};
        item.name = $scope.name;
        item.descr = $scope.descr;
        $scope.getAddress(item);
        //item.address = $scope.getAddress($scope.name);
        //$scope.eatList.push(item);
    };

    $scope.actionDel = function (item) {
        console.log('test');
        var index = $scope.eatList.indexOf(item);
        $scope.eatList.splice(index, 1);
    };
    $scope.actionEdit = function (item, name, $event) {
        var index = $scope.eatList.indexOf(item);
        $scope.eatList[index][name] = $event.target.innerHTML;
    };

});

