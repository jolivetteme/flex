// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

var map, infoWindow, myPosition;
function initMap() {
  var myLatLng = { lat: -25.363, lng: 131.044 };

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Hello World!"
  });
	console.log(marker.position.lat());

	function changeMarkerPosition(marker) {
	    var latlng = new google.maps.LatLng(40.748774, -73.985763);
	    marker.setPosition(latlng);

			return marker;
	}
	// console.log(changeMarkerPosition(marker.home));

	// console.log(marker.position.lat());
	// console.log(marker.position.lng());

	marker.setMap(map);


  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13
  });


  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // infoWindow.setPosition(pos);
        // infoWindow.setContent('<h3>You here!</h3><img src="https://secure.gravatar.com/avatar/4dae335772ca01eb02b4bae7df063549" />');
        // infoWindow.open(map);
        map.setCenter(pos);
        let truckLocations = [{ lat: -97.7414332, lng: 30.2718005 }];
        var currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter(currentLocation);

        // console.log(truckLocations);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
