document.addEventListener('scroll', function() {
 let value = window.scrollY
 this.getElementById("ramoDireito").style.marginLeft = value * 1.0 + "px";
 this.getElementById("ramoEsquerdo").style.marginRight = value * 1.0 + "px";
})
 
// document.addEventListener('scroll', function() {
//     let value = window.scrollY
//     let valorFixo = 450;
//     this.getElementById("tituloProcedimento").style.marginRight = valorFixo - value + "px";
//    })