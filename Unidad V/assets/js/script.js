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




const invitados = [
    { id: 431, nombre: "Jhonny Depp" },
    { id: 124, nombre: "Brad Pitt" },
    { id: 541, nombre: "Leonardo DiCaprio" },
    { id: 664, nombre: "Morgan Freeman" }
   ];