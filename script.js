
let ladoDireito = document.getElementById("ladoDireito");
let ladoEsquerdo = document.getElementById("ladoEsquerdo");

document.addEventListener('scroll', function() {
 let value = window.scrollY

 ladoDireito.style.marginRight = - value * 0.3 + "px";
 ladoEsquerdo.style.marginLeft = - value + 0.3 + "px";
})