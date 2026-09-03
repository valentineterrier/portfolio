
/* curseur */
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

window.addEventListener("mousemove", (e) => {
	dot.style.left = e.clientX + "px";
	dot.style.top = e.clientY + "px";

	ring.style.left = e.clientX + "px";
	ring.style.top = e.clientY + "px";
});

const interactiveElements = document.querySelectorAll("a, button");

interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {
        dot.classList.add("hover");
    });

    element.addEventListener("mouseleave", () => {
        dot.classList.remove("hover");
    });

});


/* scroll */
const lenis = new Lenis({
	lerp: 0.1, // vitesse d'interpolation du scroll fluide : plus bas = plus lent/doux, plus haut = plus rapide/nerveux (typique: 0.08 à 0.15)
	wheelMultiplier: 1, // sensibilité de la molette de souris : 1 = vitesse normale, <1 = plus lent, >1 = plus rapide
	touchMultiplier: 1.2, // sensibilité au scroll tactile (mobile/trackpad)
	smoothWheel: true, // active le lissage du scroll à la molette (false = scroll natif du navigateur, sans effet fluide)
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


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


/* read more/read less */
const button = document.getElementById("toggleText");
const moreText = document.querySelector(".more-text");

button.addEventListener("click", () => {
	moreText.classList.toggle("open");
	button.classList.toggle("open");

	if(moreText.classList.contains("open")){
		button.textContent = "Read less ✕";
	} else {
		button.textContent = "Read more +";
	}
});
