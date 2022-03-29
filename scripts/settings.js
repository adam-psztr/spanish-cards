const SIMPLEBOX = document.querySelector(".simpleBox");
const SIMPLETEXT = document.querySelector(".simpText");

const FONTSIZE = [
	"8px",
	"9px",
	"10px",
	"11px",
	"12px"];
const FONTFAM = [
	"'Comfortaa', cursive",
	"'Hubballi', cursive",
	"'Montserrat', sans-serif",
	"'Open Sans', sans-serif",
	"'Red Hat Mono', monospace",
	"'Roboto', sans-serif",
	"'Varela Round', sans-serif"];
const FONTCO = [
	"#fff",
	"#aaa",
	"#555",
	"#000"];
const BGIMG = {
	c: [
	"bgI0",
	"bgI1",
	"bgI2",
	"bgI3",
	"bgI4",
	"bgI5",
	"bgI6",
	"bgI7",
	"bgI8",
	"bgI9",
	"bgI10",
	"bgI11",
	"bgI12"],
	p: [
	"url(../images/bgs/bg-abstract.jpg)",
	"url(../images/bgs/bg-black-red.jpg)",
	"url(../images/bgs/bg-black.png)",
	"url(../images/bgs/bg-flowers.jpg)",
	"url(../images/bgs/bg-gray.jpg)",
	"url(../images/bgs/bg-lightblue.jpg)",
	"url(../images/bgs/bg-marble.jpg)",
	"url(../images/bgs/bg-pink-blue-space.jpg)",
	"url(../images/bgs/bg-pink-blue.jpg)",
	"url(../images/bgs/bg-polygon.jpg)",
	"url(../images/bgs/bg-snowfall.jpg)",
	"url(../images/bgs/bg-wall-dark.jpg)",
	"url(../images/bgs/bg-wall.jpg)"]
};

const DARKST = [
	"light",
	"dark"
];

const CARDDIM = [
	"dim2d",
	"dim3d"
];

let fontSizeInputs = document.querySelectorAll('input[name="fontSize"]');
let fontSizeInputCheckedValue = localStorage.FS || "10px";
let fontSizeInputCheckedId = localStorage.FSID || "#fS2";

let fontFamInputs = document.querySelectorAll('input[name="fontFam"]');
let fontFamInputCheckedValue = localStorage.FF || "'Montserrat', sans-serif";
let fontFamInputCheckedId = localStorage.FFID || "#fF2";

let fontCoInputs = document.querySelectorAll('input[name="fontCo"]');
let fontCoInputCheckedValue = localStorage.FC || "#fff";
let fontCoInputCheckedId = localStorage.FCID || "#fC0";

let bgImgInputs = document.querySelectorAll('input[name="bgImg"]');
let bgImgInputCheckedValueP = localStorage.BGIP || "url(../images/bgs/bg-gray.jpg)";
let bgImgInputCheckedIdP = localStorage.BGIPID || "#bgI4";
let bgImgInputCheckedIdC = localStorage.BGIC || "bgI4";

let lightDarkInput = document.querySelector("#light-dark input");
let lightDarkInputValue = localStorage.LDST || "light";

SIMPLEBOX.style.fontSize=parseInt(fontSizeInputCheckedValue)*3+"px";
SIMPLEBOX.style.fontFamily=fontFamInputCheckedValue;
SIMPLEBOX.style.color=fontCoInputCheckedValue;
SIMPLEBOX.style.backgroundImage=bgImgInputCheckedValueP;

document.querySelector(fontSizeInputCheckedId).checked = true;
document.querySelector(fontFamInputCheckedId).checked = true;
document.querySelector(fontCoInputCheckedId).checked = true;
document.querySelector(bgImgInputCheckedIdP).checked = true;
if(lightDarkInputValue==="dark"){
	lightDarkInput.checked = true;
	SIMPLEBOX.classList.add("simpleDark")};

fontSizeInputs.forEach((inp)=> {
	inp.addEventListener('change', ()=>{
		fontSizeInputCheckedValue = FONTSIZE[inp.value];
		fontSizeInputCheckedId=`#fS${inp.value}`;
		SIMPLEBOX.style.fontSize=parseInt(fontSizeInputCheckedValue)*3+"px";
	});
});

fontFamInputs.forEach((inp)=> {
	inp.addEventListener('change', ()=>{
		fontFamInputCheckedValue = FONTFAM[inp.value];
		fontFamInputCheckedId=`#fF${inp.value}`;
		SIMPLEBOX.style.fontFamily=fontFamInputCheckedValue;
	});
});

fontCoInputs.forEach((inp)=> {
	inp.addEventListener('change', ()=>{
		fontCoInputCheckedValue = FONTCO[inp.value];
		fontCoInputCheckedId=`#fC${inp.value}`;
		SIMPLEBOX.style.color=fontCoInputCheckedValue;
	});
});

bgImgInputs.forEach((inp)=> {
	inp.addEventListener('change', ()=>{
		bgImgInputCheckedValueP = BGIMG.p[inp.value];
		bgImgInputCheckedIdC = BGIMG.c[inp.value];
		bgImgInputCheckedIdP=`#bgI${inp.value}`;
		SIMPLEBOX.style.backgroundImage=bgImgInputCheckedValueP;
	});
});

lightDarkInput.addEventListener('change', ()=>{
	if(lightDarkInput.checked){
		SIMPLEBOX.classList.add("simpleDark");
		lightDarkInputValue = DARKST[1];
	} else {
		SIMPLEBOX.classList.remove("simpleDark");
		lightDarkInputValue = DARKST[0];
	}
})

function saveSettingsToLocalStorage() {
	localStorage.setItem("FS",fontSizeInputCheckedValue);
	localStorage.setItem("FSID",fontSizeInputCheckedId);
	localStorage.setItem("FF",fontFamInputCheckedValue);
	localStorage.setItem("FFID",fontFamInputCheckedId);
	localStorage.setItem("FC",fontCoInputCheckedValue);
	localStorage.setItem("FCID",fontCoInputCheckedId);
	localStorage.setItem("BGIC",bgImgInputCheckedIdC);
	localStorage.setItem("BGIP",bgImgInputCheckedValueP);
	localStorage.setItem("BGIPID",bgImgInputCheckedIdP);
	localStorage.setItem("LDST",lightDarkInputValue);
}

document.querySelector('#saveBtn').addEventListener('click', ()=>{
	saveSettingsToLocalStorage();
	HTML.style.fontSize=localStorage.FS;
	HTML.style.fontFamily=localStorage.FF;
	HTML.style.color=localStorage.FC;
	BODY.removeAttribute("class");
	BODY.classList.add(localStorage.BGIC);
	if(lightDarkInput){
		BODY.classList.add(localStorage.LDST);
	} else {
		BODY.classList.add(localStorage.LDST);
	}
});