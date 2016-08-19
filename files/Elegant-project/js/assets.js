//////// Google Maps

var myCenter = new google.maps.LatLng(40.742487, -73.996666);
var marker;

function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(40.742487, -73.996666),
        zoom: 15,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
