console.log(meetings);

function degreesToRadians (x) {
    return x * Math.PI / 180;
};
  
function getDistance(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = degreesToRadians(p2.latitude - p1.latitude);
    var dLong = degreesToRadians(p2.longitude - p1.longitude);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(p1.latitude)) * Math.cos(degreesToRadians(p2.latitude)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
};

window.onload = function() {

    console.log(meetings);
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var pCoords = {"latitude":41.137934, "longitude":-95.987340};
        console.log("Current location: " + position.coords.latitude + ", " + position.coords.longitude);
        
        for (var loc in meetings) {
            //var currentDistance = getDistance(position.coords, meetings[loc].location);
            var currentDistance = getDistance(pCoords, meetings[loc].location);
            console.log("distance to point: " + (currentDistance/1000).toFixed(2) + "km");
        }
        
    });
}