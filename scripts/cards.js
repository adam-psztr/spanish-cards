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
	<a href="./settings.html">BEÁLLÍTÁSOK</a>
	<a href="../index.html">FŐOLDAL</a>
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
	<a href="./settings.html">BEÁLLÍTÁSOK</a>
		<a href="../index.html">FŐOLDAL</a>
		<a href="#">VISSZA</a>
	</nav>
	`
};

let flagCircle = document.querySelectorAll("header img");

let flagSquare = document.querySelectorAll("#menuContainer img");

let menuBtn = document.querySelector("#menuBtn");
let menuContainer = document.querySelector("#menuContainer");
let menuContainer2 = document.querySelector("#menuContainer2") || "";
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

let rotateSide = "right";

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
		rotateSide="left";
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
		rotateSide="right";
	}
}

document.querySelector('#menuBtn').addEventListener('click', (e)=>{
	e.preventDefault();
});

document.querySelector('main nav a[href="#"]').addEventListener('click', (e)=>{
	e.preventDefault();
	history.back();
});

let urlArr = window.location.href.split("#")[1].split("&");
let url = urlArr[0];
let url2 = urlArr[1]==="les"? leswords : catwords ;

let text = document.querySelector("#menuContainer #text");
let text2 = document.querySelector("#menuContainer2 #text2") || "";

let onceOrMore = localStorage.OOM=="once"?true:false;

function randWord(max, min=0, start=0) {
	return Math.floor(Math.random() * (max - min) + start) + min;
};

function newarray(w) {
	let arr = [];
	let i = w[url].length;
	while (i>0){
		arr.push(w[url].splice(Math.floor(Math.random()*w[url].length),1)[0]);
		i--;
	};
	return arr;
};

function change3d(url) {
	if (onceOrMore){
		if(newarr.length>0){
			let x = newarr.pop(newarr.length-1);
			text.innerHTML = x.magyar;
			text2.innerHTML = x.spanyol;
		} else {
			text.innerHTML = "&Oslash;";
			text2.innerHTML = "&Oslash;";
		}
	} else {
		let x = randWord(url2[url].length);
		text.innerHTML = url2[url][x].magyar;
		text2.innerHTML = url2[url][x].spanyol;
	}
}

let magyar2d;
let spanyol2d;
let hun2d = true;

function translate2d() {
	if (hun2d) {
		text.innerHTML = spanyol2d;
		hun2d = false;
		flagCircle[0].style.display="none";
		flagCircle[1].style.display="block";
		flagSquare.forEach(e=>e.src="../images/flags/spain-flag-s.png");
	} else {
		text.innerHTML = magyar2d;
		hun2d = true;
		flagCircle[0].style.display="block";
		flagCircle[1].style.display="none";
		flagSquare.forEach(e=>e.src="../images/flags/hun-flag-s.png");
	}
}

function change2d(url) {
	if (onceOrMore){
		if(newarr.length>0){
			let x = newarr.pop(newarr.length-1);
			magyar2d = x.magyar;
			spanyol2d = x.spanyol;
			text.innerHTML = magyar2d;
		} else {
			text.innerHTML = "&Oslash;";
		}
	} else {
		let x = randWord(url2[url].length);
		magyar2d = url2[url][x].magyar;
		spanyol2d = url2[url][x].spanyol;
		text.innerHTML = url2[url][x].magyar;
	}
}

function btnNext3d() {
	if (rotateDeg%360!==0) {
		if (rotateSide=="left"){
			rotateCardRight();
		}else {
			rotateCardLeft();
		}
		text.innerHTML = "";
		text2.innerHTML = "";
		setTimeout(change3d,1000,url);
	} else {
		change3d(url);
	}
}

function btnNext2d() {
	text.innerHTML = "";
	change2d(url);
	hun2d = true;
	flagCircle[0].style.display="block";
	flagCircle[1].style.display="none";
	flagSquare.forEach(e=>e.src="../images/flags/hun-flag-s.png");
}

document.querySelector('footer a:last-child').addEventListener('click', (e)=>{
	e.preventDefault();
	if (dim3) {
		btnNext3d();
	} else {
		btnNext2d();
	}
});

let newarr;

if (dim3) {
	if (onceOrMore){
		newarr = newarray(url2);
		change3d(url);
	} else {
		change3d(url);
	}
} else {
	if (onceOrMore){
		newarr = newarray(url2);
		change2d(url);
	} else {
		change2d(url);
	};
	menuContainer.addEventListener("click", translate2d);
};
