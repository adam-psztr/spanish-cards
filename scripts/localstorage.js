const HTML = document.querySelector("html");
const BODY = document.querySelector("body");

HTML.style.fontSize=localStorage.FS || "10px";
HTML.style.fontFamily=localStorage.FF || "'Montserrat', sans-serif";
HTML.style.color=localStorage.FC || "#fff";
BODY.classList.add(localStorage.BGIC || "bgI4");
BODY.classList.add(localStorage.LDST || "light");
BODY.classList.add(localStorage.DIMST || "dim2d");
BODY.classList.add(localStorage.OOM || "once");
BODY.classList.add(localStorage.HOO || "oneS");