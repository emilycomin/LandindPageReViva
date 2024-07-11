document.addEventListener('scroll', function() {
 let value = window.scrollY
 this.getElementById("ramoDireito").style.marginLeft = - value + "px";
 this.getElementById("ramoEsquerdo").style.marginRight = value * 1.0 + "px";
})