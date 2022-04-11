let menuBtn = document.querySelector("#menuBtn");
let menuContainer = document.querySelector("#menuContainer");
let nav = document.querySelector("nav");

let menuOn = false;

menuBtn.addEventListener('click', ()=>{
	if (menuOn){
		menuContainer.style.height = "100%";
		nav.style.bottom = "-50%";
		menuOn = false;
	} else {
		menuContainer.style.height = "45%";
		nav.style.bottom = "0";
		menuOn = true;
	}
})