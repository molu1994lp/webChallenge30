function myMap(){
    var mapProp = {
        center: new google.maps.LatLng(-42.734358,147.439506),
    zoom:8,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-42.734358,147.439506)
});
    marker.setMap(map);
}