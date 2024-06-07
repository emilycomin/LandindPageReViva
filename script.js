document.addEventListener('scroll', function() {
 let value = window.scrollY
 this.getElementById("ramoEsquerdo").style.marginLeft = -value + "px";
 this.getElementById("ramoDireito").style.marginRight = -value + "px";
})
 
document.addEventListener('scroll', function() {
    let value = window.scrollY
    let valorFixo = 450;
    this.getElementById("tituloProcedimento").style.marginRight = valorFixo -value + "px";
   })