// window.location.replace("http://www.w3schools.com");
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var date = new Date();

console.log("who");

// Redirect to current day
let link = window.localStorage.getItem(days[date.getDay()]);

console.log(link);

if (link) {
	window.location.replace(link);
} else {
	window.location.replace("Home.html");
}
