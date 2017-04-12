
var locationButton = document.getElementById("locationButton");

locationButton.addEventListener('click', getLocation);

// ip-api.com/json
function getLocation() {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', respondToGetLocation);
	xhr.open("GET", "http://ip-api.com/json");
	xhr.send();
}

function respondToGetLocation() {
	var locationInfo = JSON.parse(this.responseText);
	console.log("Latitude: " + locationInfo.lat);
	console.log("Longitude: " + locationInfo.lon);

	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', respondToGetWeather);
	xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=" + locationInfo.lat + "&lon=" + locationInfo.lon + "&appid=c1f700662e14d6debd730ff65414acd9");
	xhr.send();
}

function respondToGetWeather() {
	var weatherInfo = JSON.parse(this.responseText);
	console.log(weatherInfo);
}

var exploreButton = document.getElementById("exploreButton");
exploreButton.addEventListener('click', exploreUniverse);

var starwars = {};

function exploreUniverse() {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', respondToStarWarsPerson);
	xhr.open("GET", "http://swapi.co/api/people/");
	xhr.send();
}

function respondToStarWarsPerson() {
	
	var swResponse = JSON.parse(this.responseText);
	console.log(swResponse);

	starwars.person = swResponse.results[Math.floor(Math.random() * swResponse.results.length)];
	
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", respondToStarWarsShip);
	xhr.open("GET", "http://swapi.co/api/starships/");
	xhr.send();

}

function respondToStarWarsShip() {
	var swResponse = JSON.parse(this.responseText);
	console.log(swResponse);
	
	starwars.starship = swResponse.results[Math.floor(Math.random() * swResponse.results.length)];

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", respondToStarWarsPlanet);
	xhr.open("GET", "http://swapi.co/api/planets/");
	xhr.send();

}

function respondToStarWarsPlanet() {
	var swResponse = JSON.parse(this.responseText);
	console.log(swResponse);

	starwars.planet = swResponse.results[Math.floor(Math.random() * swResponse.results.length)];
	
	alert(starwars.person.name 
		+ " went to " + starwars.planet.name
		+ " on a(n) " + starwars.starship.name);


}