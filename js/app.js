const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
navBtn.onclick = () => {
	if (nav.classList.toggle("open")) {
		navBtn.classList.add("active");
	} else {
		navBtn.classList.remove("active");
	}
}