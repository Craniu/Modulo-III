const a = [1,2,3,5];
a.push("papaya");
a.unshift("holi");
console.log(a);


const superHeroes= [
    "Ironman",
    "Superman",
    "Hawkeye"
   ]

superHeroes.unshift("spiderman");
superHeroes.push("papayaman");
console.log(superHeroes);


//Invitados
const btnAgregar = document.querySelector("#btnAgregar");
const invitado = document.querySelector("#nuevoInvitado");
const doc = document.querySelector("#invitados")
let listaInvitados = [];

const cargarInvitados = function () {
    let html = "";
    for(let valor of listaInvitados){
        html += `
            <li>${valor}</li>
        `;
    }
    doc.innerHTML = html;
};

const agregarInvitado = function (invitado){
    listaInvitados.push(invitado);
    cargarInvitados();
};

btnAgregar.addEventListener("click", ()=>{
    if(invitado.value != ""){
        agregarInvitado(invitado.value);
        invitado.value = "";
    }else{
        alert("Debe ingresar un invitado");
    }
});

const borrarInvitado = function (valor){
    if(invitado.value != ""){
            indice = listaInvitados.indexOf(valor);  
            if(indice >= 0){
                listaInvitados.splice(indice, 1);
                cargarInvitados();
            }else{
                alert("El invitado no esta en la lista");
            }

    }else{
        alert("Debe agregar un valor");
    }
};

const btnEliminar = document.querySelector("#btnEliminar");
btnEliminar.addEventListener("click", () =>{
    borrarInvitado(invitado.value);
    invitado.value = "";
},);



//
const servicios = [  
    { id: 1, nombre: "Agua" },  
    { id: 2, nombre: "Electricidad" },  
    { id: 3, nombre: "Gas" },  
    { id: 4, nombre: "Internet" },  
    { id: 5, nombre: "Cable Tv" }, 
];
const docCtas = document.querySelector(".servicios")



const cargarCtas = function (){
    let htmlServ = "";
    for(let servicio of servicios){
        htmlServ += `
        <li>${servicio.nombre}</li><button onclick="borraCta('${servicio.id}')">Borrar</button>
        `;
    }
    docCtas.innerHTML = htmlServ;
}


const borraCta = function (id){
    servicios.splice(servicios.findIndex((item)=>item.id == id), 1);
    cargarCtas();
};
cargarCtas();



//includes
const pelmasos = ["Julio", "Palta", "Flanders", "Daniela", "Miguelito"];
const btnValidar = document.querySelector("#validar");
const txtIn = document.querySelector("#text");
const pelmaDoc = document.querySelector("#busqueda");

const cargarPelmasos = function() {
    let html = "";
    for (let item of pelmasos){
        html += `
            <li>${item}</li>
        `;
    }
    pelmaDoc.innerHTML = html;
}


cargarPelmasos();
btnValidar.addEventListener("click",()=>{
    if(txtIn.value != ""){
        if(pelmasos.includes(txtIn.value)){
            alert("El pelmaso Si existe en la lista");
        }else{
            alert("El pelmaso no existe en la lista");
        }
    }else{
        alert("Ingrese un pelmaso para validarlo");
    }
    txtIn.value = "";
});


//
const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];
estaciones.forEach(x => console.log(x)) /* con arrow functions */ 

body = document.querySelector("body") 
const valores = [200, 100, 500, 300, 250] 
valores.forEach(x => body.innerHTML += `<p> ${2* x} </p>`)

let trabajadores = [ 
    {nombre: "Contanza", cargo: "Chef"},
    {nombre: "Luis", cargo: "garzón"},
    {nombre: "Estefany", cargo: "Administradora"}, 
    {nombre: "Andrés", cargo: "Recepcionista"}, 
    {nombre: "Pedro", cargo: "garzón"}, 
    {nombre: "Felipe", cargo: "Aseo"}, 
    {nombre: "Maria", cargo: "garzón"}, 
    {nombre: "Diego", cargo: "garzón"}
];
const lista2 = trabajadores.filter(x => x.cargo == "garzón");
console.log(`Hay ${lista2.length} garzones`);
console.log(lista2);

const estudiantes = [ 
    { nombre: "Juan", nota: 3.4 }, 
    { nombre: "Laura", nota: 6 }, 
    { nombre: "Katherine", nota: 4.3 }, 
    { nombre: "Jonathan", nota: 5.4 } 
]; 
const estudiantesOrdenado = estudiantes.sort((x,y) => x.nota- y.nota) ;
console.table(estudiantesOrdenado);