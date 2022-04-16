let flagCircle = document.querySelectorAll("header img");

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

let rotateDeg = 0;

document.querySelector(".clickHalf.cHLeft").addEventListener("click", rotateCardLeft);
document.querySelector(".clickHalf.cHRight").addEventListener("click", rotateCardRight);

function rotateCardLeft() {
	if (rotateDeg%360===0) {
		flagCircle[0].style.display="none";
		flagCircle[1].style.display="block";
	} else {
		flagCircle[0].style.display="block";
		flagCircle[1].style.display="none";
	}
	rotateDeg-=180;
	document.querySelector(".rotate").style.transform=`rotateY(${ rotateDeg}deg)`;
}
function rotateCardRight() {
	if (rotateDeg%360===0) {
		flagCircle[0].style.display="none";
		flagCircle[1].style.display="block";
	} else {
		flagCircle[0].style.display="block";
		flagCircle[1].style.display="none";
	}
	rotateDeg+=180;
	document.querySelector(".rotate").style.transform=`rotateY(${ rotateDeg}deg)`;
}


// window.location.href.split("#")[1]