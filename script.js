
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
    duration: 1.5,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.2
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