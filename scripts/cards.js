let menuBtn = document.querySelector("#menuBtn");
let menuContainer = document.querySelector("#menuContainer");
let menuContainer2 = document.querySelector("#menuContainer2");
let nav = document.querySelector("nav");

let dim3 = localStorage.DIMST=="dim3d"?true:false;
let menuOn = false;

menuBtn.addEventListener('click', ()=>{
	if (dim3) {
		if (menuOn){
			menuContainer.style.height = "100%";
			menuContainer2.style.height = "100%";
			nav.style.bottom = "-50%";
			menuOn = false;
		} else {
			menuContainer.style.height = "45%";
			menuContainer2.style.height = "45%";
			nav.style.bottom = "0";
			menuOn = true;
		}
	} else {
		if (menuOn){
			menuContainer.style.height = "100%";
			nav.style.bottom = "-50%";
			menuOn = false;
		} else {
			menuContainer.style.height = "45%";
			nav.style.bottom = "0";
			menuOn = true;
		}
	}
})