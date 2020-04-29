console.log('hello');

// Create the script tag, set the appropriate attributes
var script1 = document.createElement('script');
script1.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCUoCP1u86ZopN6JWDAWKi8LdOhWSke9v4&callback=initMap&libraries=places';
script1.defer = true;
script1.async = true;

// Create script tag for google maps library

// var script2 = document.createElement('script');
// script2.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCUoCP1u86ZopN6JWDAWKi8LdOhWSke9v4&libraries=places';
// script2.type = "text/javascript"

// Attach your callback function to the `window` object
window.initMap = function() {
    var sydney = new google.maps.LatLng(-33.867, 151.195);

    // JS API is loaded and available
    let map = new google.maps.Map(document.getElementById('map'), {
        center: sydney,
        zoom: 12
    });

    let request = {
        query: 'Museum of Contemporary Art Australia',
        fields: ['name', 'geometry'],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }

            map.setCenter(results[0].geometry.location);
        }
    });

    function createMarker(place) {
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

};



// Append the 'script' element to 'head'
document.head.appendChild(script1);
// document.head.appendChild(script2);