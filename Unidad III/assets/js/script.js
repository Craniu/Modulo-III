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

function suma(a, b){
    return a + b
    }
    var resultado = suma(2,3)
    //console.log(resultado)

function por_dos(){
    const num = prompt("Ingresa un numero");
    return num*2;
}
//por_dos();

function multiplicar(){
    const num = prompt("Ingresa un numero");
    const num2 = prompt("Ingresa un numero");
    return num*num2;
}

const btnMultiplicar = document.querySelector("#btnMultiplicar");
btnMultiplicar.addEventListener("click", () => {
   console.log(multiplicar());
})



const addDel = document.querySelector("#addDel");

function addDiv() {
    nuevoElement = document.createElement("div");
    nuevoElement.textContent = "Holi me agregaron",
    nuevoElement.style.backgroundColor = "red";
    addDel.appendChild(nuevoElement);
}

function delDiv() {
    listaElementos = addDel.querySelectorAll("div");
    if(listaElementos.length > 0){
        console.log(listaElementos.length);
        addDel.removeChild(listaElementos[listaElementos.length -1]);
    }
}

document.addEventListener("keydown", (event) =>{
    if(event.key === "a" || event.key ===  "A"){
        addDiv();
    }else if(event.key === "d" || event.key === "D"){
        delDiv();
    }
})

function responder(){
    let body = document.querySelector("body")
    body.innerHTML = "<body> <p>.- La diferencia entre var y let es que var no funciona en bloque y let si.</p>"+
    "<p>.- hoisting, se refiere a declarar o alzar algo, aplica a las funciones declaradas y no aplica a las expresiones de funcion. </p>"+
    "<p>.-La funcion anonima se usa para incorporar una funcion directamente sin nombrarla.</p>"+
    "<p>.-Son funciones anonimas que de ingresan en una sola linea</p>"+
    "<p>.-Son los lugares o secciones de codigo, global, de funcion y bloque y se diferencian según el lugar donde estan anidados</p>  </body>";
    body = document.querySelector("body");
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.margin = "20px";
    body.style.textAlign = "justify";



}