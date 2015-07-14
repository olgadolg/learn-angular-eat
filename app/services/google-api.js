EatApp.service('googleAddressAPI', function () {
    return {
        getAddress: function (item, callback) {
            var name = item.name;
            var request = {
                query: name
            };

            var new_el = document.createElement('div');
            service = new google.maps.places.PlacesService(new_el);
            service.textSearch(request, takeAddressClB);

            function takeAddressClB(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    var address = (results[0].formatted_address).toString();
                    callback(address);
                }
            }
        }
    }
});