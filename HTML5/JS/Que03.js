var currentLocation=document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        x.innerHTML= "Geolocation is not supported";
    }
}

function showPosition(position) {
    currentLocation.innerHTML= "Latitude: "+position.coords.latitude+
    "<br>Longitude: "+position.coords.longitude;
}