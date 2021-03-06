window.onload = getMyLocation; 

function getMyLocation() { 
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation, diplayError);

	} else { 
		alert("Oops, no geolocation support") 
}
}

function displayLocation(position) {
	var latitude = position.coords.latitude; 
	var longitude = position.coords.longitude;
	var div = document.getElementById("location");
	div.innerHTML = "You are at Latitude: " + latitude  + " Longitude: " + longitude;
}

function diplayError(error) {
	var errorTypes = {
		0: "Unknownerror", 
		1: "Permission denied by user",
		2: "Position is not available",
		3: "Request timed out" 
	}; 
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) { 
		errorMessage = errorMessage + " " + error.message;
	}
	var div = document.getElementById("location"); 
	div.innerHTML = errorMessage;
} 