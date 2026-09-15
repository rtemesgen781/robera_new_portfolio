/* ========================================
   ROBERA TEMESGEN PORTFOLIO
   JAVASCRIPT
======================================== */

document.addEventListener("DOMContentLoaded", function () {
	console.log("Welcome to Robera Temesgen's portfolio!");
});

const currentYear = new Date().getFullYear();
const footerYear = document.querySelector("footer p");

if (footerYear) {
	footerYear.innerHTML = "&copy; " + currentYear + " Robera Temesgen. All rights reserved.";
}

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {
	link.addEventListener("click", function () {
		console.log("Navigation link clicked:", link.textContent);
	});
});

const homeSection = document.querySelector("#home");

if (homeSection) {
	const welcomeMessage = document.createElement("p");
	welcomeMessage.textContent = "Thank you for visiting my portfolio!";
	welcomeMessage.id = "welcome-message";
	homeSection.appendChild(welcomeMessage);
}

const projectLinks = document.querySelectorAll("#projects a");

projectLinks.forEach(function (link) {
	link.addEventListener("click", function () {
		console.log("Project link clicked.");
	});
});

const emailLink = document.querySelector('a[href^="mailto:"]');

if (emailLink) {
	emailLink.addEventListener("click", function () {
		console.log("Email link clicked.");
	});
}

const contactForm = document.querySelector("#contact form");

if (contactForm) {
	contactForm.addEventListener("submit", function (event) {
		const name = document.querySelector("#name").value.trim();
		const email = document.querySelector("#email").value.trim();
		const message = document.querySelector("#message").value.trim();

		if (name === "") {
			event.preventDefault();
			alert("Please enter your name.");
			return;
		}

		if (email === "") {
			event.preventDefault();
			alert("Please enter your email address.");
			return;
		}

		if (message === "") {
			event.preventDefault();
			alert("Please enter your message.");
			return;
		}

		alert("Thank you, " + name + "! Your message is ready to be sent.");
	});
}

const darkModeButton = document.createElement("button");
darkModeButton.textContent = "Dark Mode";
darkModeButton.id = "dark-mode-button";
darkModeButton.style.position = "fixed";
darkModeButton.style.bottom = "20px";
darkModeButton.style.right = "20px";
darkModeButton.style.padding = "10px 15px";
darkModeButton.style.border = "none";
darkModeButton.style.borderRadius = "6px";
darkModeButton.style.cursor = "pointer";
darkModeButton.style.zIndex = "1000";
document.body.appendChild(darkModeButton);

let darkMode = false;

darkModeButton.addEventListener("click", function () {
	darkMode = !darkMode;

	if (darkMode) {
		document.body.style.backgroundColor = "#111827";
		document.body.style.color = "#ffffff";
		darkModeButton.textContent = "Light Mode";
	} else {
		document.body.style.backgroundColor = "#f5f7fa";
		document.body.style.color = "#222222";
		darkModeButton.textContent = "Dark Mode";
	}
});

const topButton = document.createElement("button");
topButton.textContent = "↑ Top";
topButton.id = "top-button";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.left = "20px";
topButton.style.padding = "10px 15px";
topButton.style.border = "none";
topButton.style.borderRadius = "6px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "1000";
document.body.appendChild(topButton);

window.addEventListener("scroll", function () {
	topButton.style.display = window.scrollY > 300 ? "block" : "none";
});

topButton.addEventListener("click", function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

const helloButton = document.createElement("button");
helloButton.textContent = "Say Hello";
helloButton.style.margin = "10px";
helloButton.style.padding = "12px 20px";
helloButton.style.cursor = "pointer";

if (homeSection) {
	homeSection.appendChild(helloButton);
}

helloButton.addEventListener("click", function () {
	alert("Hello! Welcome to Robera Temesgen's portfolio.");
});

document.addEventListener("keydown", function (event) {
	console.log("You pressed:", event.key);
});

console.log("JavaScript is successfully connected!");
