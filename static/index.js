function drawMap(latitude, longitude) {
    var current_position = { lat: latitude, lng: longitude };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: current_position
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: current_position,
        map: map
    });
}
// Initialize and add the map
function processLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    if (latitude) {
        drawMap(latitude, longitude);
    }
}
function errorHandler(err) {
    if (err.code == 1) {
        alert("Error: Access is denied!");
    }
    else if (err.code == 2) {
        alert("Error: Position is unavailable!");
    }
}
function initMap() {
    if (navigator.geolocation) {
        var options = { timeout: 60000 };
        navigator.geolocation.getCurrentPosition(processLocation, errorHandler, options);
    }
    else {
        alert("Sorry, browser does not support geolocation!");
    }
}
