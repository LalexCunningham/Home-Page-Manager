var daysOfTheWeek = {
	monday: "",
	tuesday: "",
	wednesday: "",
	thursday: "",
	friday: "",
	saturday: "",
	sunday: ""
}

for (var key in daysOfTheWeek) {
	let link = window.localStorage.getItem(key);

	if (link != null) {
		daysOfTheWeek[key] = link;

	}

	let inputId = key.substring(0,3) + "ValInput";
	document.getElementById(inputId).value = daysOfTheWeek[key];
}

let form = document.getElementById("dailyLinksForm");
form.addEventListener('change', (event) => {
	updateValue(event.target.name.substring(0, event.target.name.length-5), event.target.value);
})

function saveValues () {
	for (var key in daysOfTheWeek) {
		window.localStorage.setItem(key, daysOfTheWeek[key]);
	}
	console.log("values saved");
}

function updateValue (day, url) {
	daysOfTheWeek[day] = url;
}
