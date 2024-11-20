const docu = document.querySelector("body");
const btnRojo = document.querySelector("#rojo");
const btnAmarillo = document.querySelector("#amarillo");
const btnElegir = document.querySelector("#elegir");

const pintarRojo = function () {
    docu.style.backgroundColor = "red";
}
const pintarAmarillo = function () {
    docu.style.backgroundColor = "yellow"
}

btnRojo.addEventListener("click", () =>{
    pintarRojo();
})
btnAmarillo.addEventListener("click", () => {
    pintarAmarillo();
})

pintar = function(){
    elemento = document.querySelector("body")
    const color = prompt("Ingrese un color: ");
    elemento.style.backgroundColor = color;
    }

 function agregarBordes(elementId) {
 elemento = document.querySelector('#' + elementId);
 elemento.style.border="dashed 3px brown"
 }

 
function validar(numero){
    const parraf = document.querySelector("#parrafo");
    let texto;

    if(numero < 7){
        texto = "Muy poco";
    }else if(numero > 7){
        texto = "Mucho";
    }else{
        texto = "Exacto";
    }
    parraf.innerHTML = texto;

}
const btnValidar = document.querySelector("#btnValidar");
btnValidar.addEventListener("click",()=>{       
    const numero = document.querySelector("#in").value;
    validar(numero);
})