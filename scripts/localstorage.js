const HTML = document.querySelector("html");
const BODY = document.querySelector("body");

HTML.style.fontSize=localStorage.FS || "10px";
HTML.style.fontFamily=localStorage.FF || "'Montserrat', sans-serif";
HTML.style.color=localStorage.FC || "#fff";
BODY.style.backgroundImage=localStorage.BGI || "url(../images/bgs/bg-gray.jpg)";
