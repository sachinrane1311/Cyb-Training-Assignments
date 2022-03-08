var loc = document.getElementById("demo");

function getlocation() {
    navigator.geolocation.getCurrentPosition(showLoc);
}

function showLoc(pos) {
    loc.innerHTML= "Latitude: "+
    pos.coords.latitude + 
    "<br> Longitude: " + 
    pos.coords.longitude;
}
