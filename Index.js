// window.location.replace("http://www.w3schools.com");
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var date = new Date();

// Redirect to curren day
window.location.replace(window.localStorage.getItem(days[date.getDay()]));