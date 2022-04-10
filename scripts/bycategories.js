let menuBtn = document.querySelector("#menuBtn");
let menuContainer = document.querySelector("#menuContainer");
let nav = document.querySelector("nav");

let menuOn = false;

menuBtn.addEventListener('click', ()=>{
	if (menuOn){
		menuContainer.style.height = "90%";
		nav.classList.remove("op1");
		menuOn = false;
	} else {
		menuContainer.style.height = "40%";
		nav.classList.add("op1");
		menuOn = true;
	}
})