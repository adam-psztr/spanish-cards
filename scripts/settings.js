const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];

const fontSize = [8,9,10,11,12];
const fontFam = [
	"'Comfortaa', cursive",
	"'Hubballi', cursive",
	"'Montserrat', sans-serif",
	"'Open Sans', sans-serif",
	"'Red Hat Mono', monospace",
	"'Roboto', sans-serif",
	"'Varela Round', sans-serif"];
const fontCo = [
	"#fff",
	"#aaa",
	"#555",
	"#000"];
const bgImg = [
	"url(./images/bgs/bg-abstract.jpg)",
	"url(./images/bgs/bg-black-red.jpg)",
	"url(./images/bgs/bg-black.png)",
	"url(./images/bgs/bg-flowers.jpg)",
	"url(./images/bgs/bg-gray.jpg)",
	"url(./images/bgs/bg-lightblue.jpg)",
	"url(./images/bgs/bg-marble.jpg)",
	"url(./images/bgs/bg-pink-blue-space.jpg)",
	"url(./images/bgs/bg-pink-blue.jpg)",
	"url(./images/bgs/bg-polygon.jpg)",
	"url(./images/bgs/bg-snowfall.jpg)",
	"url(./images/bgs/bg-wall-dark.jpg)",
	"url(./images/bgs/bg-wall.jpg)"];
const darkSt = [];
const cardDim = [];

const simpleBox = document.querySelector(".simpleBox");
const simpleText = document.querySelector(".simpText");

document.querySelectorAll('input[name="fontSize"]').forEach((inp)=> {
	inp.addEventListener('change', ()=>{
		simpleText.style.fontSize = fontSize[document.querySelector('input[name="fontSize"]:checked').value]*3+"px";
		let aaa = fontSize[document.querySelector('input[name="fontSize"]:checked').value]+"px";
		localStorage.setItem("FS",aaa)
	});
});
document.querySelectorAll('input[name="fontFam"]').forEach((inp)=> {
	inp.addEventListener('change', ()=>{
		html.style.fontFamily = fontFam[document.querySelector('input[name="fontFam"]:checked').value];
		let aaa = fontFam[document.querySelector('input[name="fontFam"]:checked').value];
		localStorage.setItem("FF",aaa)
	});
});

// let fontSizeFormVal= document.querySelector('input[name="fontSize"]:checked').value;

const settings = {};

// function changeSimple (sim, prop, val) {
// 	sim.style.fontSize = fontSize[fontSizeFormVal]+"px";
// }

// changeSimple(simpleText,fontSize,fontSize[fontSizeFormVal]+"px")





html.style.fontSize=localStorage.FS;
html.style.fontFamily=localStorage.FF;

function saveSettings() {

}

function refreshSettings() {
	settings.fontSize = localStorage.fS,
	settings.fontFam = localStorage.fF,
	settings.bgImg = localStorage.bgI,
	settings.dark = localStorage.da,
	settings.cardDim = localStorage.cD
}

refreshSettings();

console.log(settings.fontSize, settings.bgImg);






// TEST
function bbb(){
	html.style.fontSize = localStorage.FS;
}

document.querySelector("#test").addEventListener('click', bbb);