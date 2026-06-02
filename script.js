
/* date et heures */
function updateInfos(){
const now = new Date();

// DATE
	document.getElementById("date").textContent =
		now.toLocaleDateString('en-US', {

			weekday:'long',
			month:'long',
			day:'2-digit'
	});

// LIEU + HEURE
	const heure = now.toLocaleTimeString('en-GB');
		document.getElementById("location-time").textContent =
			`Switzerland, ${heure}`;
	}

updateInfos();
setInterval(updateInfos,1000);