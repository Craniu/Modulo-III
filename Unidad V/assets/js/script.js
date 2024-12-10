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