// window.location.replace("http://www.w3schools.com");
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var date = new Date();

// For Testing
window.localStorage.setItem("tuesday", "https://blog.logrocket.com/localstorage-javascript-complete-guide/");

// Redirect to curren day
window.location.replace(window.localStorage.getItem(days[date.getDay()]));