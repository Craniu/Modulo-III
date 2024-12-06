let nombres = [
    "Juan",
    "Luisa",
    "Fabian",
    "Jorge",
    "Elon",
    "Steve",
    "Bill",
    "Estefany",
];

const buscarNombre = function (nombre) {
    let indice = nombres.indexOf(nombre);
    return indice;
};

let ultimo = nombres.length - 1;

console.log(nombres[buscarNombre("Juan")]);
console.log(nombres[buscarNombre("Steve")]);
console.log(nombres[ultimo]);

const datos = [1200, 350, 1500, 1400, 250, 5000, 1950, 1952];
const d = document.querySelector("#datos");

for (let valor of datos) {
    if (valor > 1000 && valor < 2000) {
        d.innerHTML += `<li style="background-color:green">${valor}</li>`;
    } else {
        d.innerHTML += `<li style="background-color:red">${valor}</li>`;
    }
}

const estudiantes = [
    ["Francisca", 10, 8, 10],
    ["Camila", 9, 9, 10, 9],
    ["Patricio", 7, 9, 9, 6, 10, 10],
    ["Pedro", 8, 8, 10],
];
let html = "";
for (let estudiante of estudiantes) {
    html += `<p>`;
    for (let nota of estudiante) {
        html += ` ${nota} `;
    }
    html += `</p>`;
}
//const body = document.querySelector("body");
//body.innerHTML = html;

const persona = {
    nombre: "Pedro",
    apellido: "Perez",
    profesion: "Frontend Developer",
    hobby: "Trekking",
    anoDeNacimiento: 1988,
};
console.log(persona["anoDeNacimiento"] + " " + persona["apellido"]);

const articulo = {
    id: 31,
    titulo: "Autos nuevos en Chile",
    subtitulo: "El mercado de autos se normaliza",
    descripcion: `No es novedad que los precios
de los autos usados se han disparado debido
a la falta en stock de autos nuevos, sin embargo
puede que esto esté llegando a su fin...`,
};

const articulosSection = document.querySelector(".articulos")
articulosSection.innerHTML = `
<article class="articulo2">
<h4>${articulo.titulo}</h4>
<h6>${articulo.subtitulo}</h6>
<p>${articulo.descripcion}</p>
<a href="/articulo/${articulo.id}"><button>Ver más</button></a>
</article>
`;

const departamentos = [
    { departamento: 323, propietario: "Natalia Jiménez", telft: "+56 9 5312 4578"},
    { departamento: 123, propietario: "Luis Fonsi", telft: "+56 9 4612 7894"},
    { departamento: 431, propietario: "David Bisbal", telft: "+56 9 8978 4465"},
    { departamento: 412, propietario: "Noel Schajris", telft: "+56 9 9874 6432"},
    { departamento: 203, propietario: "Ricardo Montaner", telft: "+56 9 8764 6813"},
    ]

    let template ="";
for (let dpto of departamentos){
    template += `
        <tr>
            <td>${dpto.departamento}</td>
            <td>${dpto.propietario}</td>
            <td>${dpto.telft}</td>
        </tr>
    `;
}
const tbody = document.querySelector("table");
tbody.innerHTML = template;