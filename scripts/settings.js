const html = document.getElementsByTagName("html")[0];

const fontSize = [8,9,10,11,12];
const fontFam = ["'Comfortaa', cursive","'Hubballi', cursive","'Montserrat', sans-serif","'Open Sans', sans-serif","'Red Hat Mono', monospace","'Roboto', sans-serif","'Varela Round', sans-serif"];
const bgImg = ["url(./images/bgs/bg-abstract.jpg)","url(./images/bgs/bg-black-red.jpg)","url(./images/bgs/bg-black.png)","url(./images/bgs/bg-flowers.jpg)","url(./images/bgs/bg-gray.jpg)","url(./images/bgs/bg-lightblue.jpg)","url(./images/bgs/bg-marble.jpg)","url(./images/bgs/bg-pink-blue-space.jpg)","url(./images/bgs/bg-pink-blue.jpg)","url(./images/bgs/bg-polygon.jpg)","url(./images/bgs/bg-snowfall.jpg)","url(./images/bgs/bg-wall-dark.jpg)","url(./images/bgs/bg-wall.jpg)"];
const dark = [];
const cardDim = [];

const simpleBox = document.querySelector(".simpleBox");
const simpleText = document.querySelector(".simpText");

document.querySelectorAll('input[name="fontSize"]').forEach((inp)=> {
	inp.addEventListener('change', ()=>{
		simpleText.style.fontSize = fontSize[document.querySelector('input[name="fontSize"]:checked').value]*3+"px";
	});
});

// let fontSizeFormVal= document.querySelector('input[name="fontSize"]:checked').value;

const settings = {};

// function changeSimple (sim, prop, val) {
// 	sim.style.fontSize = fontSize[fontSizeFormVal]+"px";
// }

// changeSimple(simpleText,fontSize,fontSize[fontSizeFormVal]+"px")





html.style.fontSize=localStorage.fS;

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

console.log(settings.fontSize, settings.bgImg)

