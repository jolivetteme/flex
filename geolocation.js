// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

var map, infoWindow, myPosition;
function initMap() {
  var myLatLng = { lat: 30.2539227, lng: -97.7632664 };

	function changeMarkerPosition(marker) {
	    var latlng = new google.maps.LatLng(40.748774, -73.985763);
	    marker.setPosition(latlng);

			return marker;
	}

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng
  });
  createMarkers();


  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('<h3>You here!</h3><img src="https://secure.gravatar.com/avatar/4dae335772ca01eb02b4bae7df063549" />');
        infoWindow.open(map);
        map.setCenter(pos);


        // map.setCenter(currentLocation);

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

function createMarkers() {

  $.getScript("data/locations.js", function() {
     // alert("Script loaded but not necessarily executed.");
     truckLocations.forEach(function(current, index, array) {

       var marker = new google.maps.Marker({
          position: {lat:current.lat,lng:current.lng},
          map: map,
          title:current.businessName+" "+current.phone
        });

        var infowindow = new google.maps.InfoWindow({

          content:""+
          '<div class="locations">'+
            '<h2><a href="#">'+current.businessName+'</a></h2>'+
            //'<img src="images/tacos.jpg" />'+
            '<div class="links">'+
              '<div><a href="'+current.website+'">Menu</a></div>'+
              '<div><a href="#">Directions</a></div>'+
              '<div><a href="#">'+current.phone+'</a></div>'+
            '</div>'+
          "</div>"
        });
        google.maps.event.addListener(marker, 'click', function() {
           // infowindow.setContent('Hello World');
           infowindow.open(map, this);
        });
        // marker.addListener('click',function(){
        //   infowindow.open(map,marker);
        // });
     });

   });

}
