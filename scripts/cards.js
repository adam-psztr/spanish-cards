let main = document.querySelector("main");

if(BODY.className.indexOf('dim2d')!==-1) {
	main.innerHTML = `
	<div id="dim2">
		<div id="menuContainer">
			<img src="../images/flags/hun-flag-s.png" alt="magyarország zászlaja">
			<img src="../images/flags/hun-flag-s.png" alt="magyarország zászlaja">
			<img src="../images/flags/hun-flag-s.png" alt="magyarország zászlaja">
			<img src="../images/flags/hun-flag-s.png" alt="magyarország zászlaja">
			<h1 id="text"></h1>
		</div>
	</div>
	<nav>
	<a href="./practice.html">GYAKORLÁS</a>
	<a href="./settings.html">BEÁLLÍTÁSOK</a>
	<a href="#">VISSZA</a>
	</nav>
	`
} else {
	main.innerHTML = `
	<div id="dim3">
		<div class="rotate">
			<div id="menuContainer">
				<img src="../images/flags/hun-flag-s.png" alt="magyarország zászlaja">
				<img src="../images/flags/hun-flag-s.png" alt="magyarország zászlaja">
				<img src="../images/flags/hun-flag-s.png" alt="magyarország zászlaja">
				<img src="../images/flags/hun-flag-s.png" alt="magyarország zászlaja">
				<h1 id="text"></h1>
			</div>
			<div id="menuContainer2">
				<img src="../images/flags/spain-flag-s.png" alt="magyarország zászlaja">
				<img src="../images/flags/spain-flag-s.png" alt="magyarország zászlaja">
				<img src="../images/flags/spain-flag-s.png" alt="magyarország zászlaja">
				<img src="../images/flags/spain-flag-s.png" alt="magyarország zászlaja">
				<h1 id="text2"></h1>
			</div>
		</div>
		<div class="clickHalf cHLeft"></div>
		<div class="clickHalf cHRight"></div>
	</div>
	<nav>
		<a href="./practice.html">GYAKORLÁS</a>
		<a href="./settings.html">BEÁLLÍTÁSOK</a>
		<a href="#">VISSZA</a>
	</nav>
	`
};

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
});

let rotateDeg = 0;

if(BODY.className.indexOf('dim3d')!==-1) {

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
}

document.querySelector('#menuBtn').addEventListener('click', (e)=>{
	e.preventDefault();
});

document.querySelector('main nav a[href="#"]').addEventListener('click', (e)=>{
	e.preventDefault();
	history.back();
});





let url = window.location.href.split("#")[1];

let text = document.querySelector("#menuContainer #text");
let text2 = document.querySelector("#menuContainer2 #text2");

text.innerHTML = catwords[url][0].magyar;
text2.innerHTML = catwords[url][0].spanyol;