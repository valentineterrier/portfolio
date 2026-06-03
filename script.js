
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




/* meun burger */
const burger = document.getElementById("burger");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header");

// OUVRIR
	burger.addEventListener("mouseenter", function(){
		console.log("mouse hover");
		burger.classList.add("active");
		overlay.classList.add("active");
		header.classList.add("active");
	});

// FERMER
	burger.addEventListener("click", function(){
		console.log("mouse click!");
		burger.classList.remove("active");
		overlay.classList.remove("active");
		header.classList.remove("active");
	});
