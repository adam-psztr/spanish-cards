const HTML = document.querySelector("html");
const BODY = document.querySelector("body");

HTML.style.fontSize=localStorage.FS || "10px";
HTML.style.fontFamily=localStorage.FF || "'Montserrat', sans-serif";
HTML.style.color=localStorage.FC || "#fff";
BODY.classList.add(localStorage.BGIC || "bgI4");

BODY.classList.add(localStorage.LDST) || "x";

// if(localStorage.LDST){
// 	BODY.classList.remove("light");
// } else {
// 	BODY.classList.remove("dark");
// 	BODY.classList.add(localStorage.LDST);
// }