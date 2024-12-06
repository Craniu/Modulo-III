const nombres = [  "Juan",  "Luisa",  "Fabian",  "Jorge", ]
for (let nombre of nombres){{
    console.log(nombre);
}}

const lenguajes = [  "JavaScript",  "Php",  "Ruby",  "Python",  "Scala",  "Go" ]
for (let lenguaje of lenguajes) { console.log(lenguaje) }


const nombre = "Luis";
const fecha = "2022-03-25";
const interpolacion = `Hola, mi nombre es ${nombre}, hoy ${fecha} quiero emitir una solicitud`;
const concatenacion = 'Hola, mi nombre es ' + nombre + ', hoy ' + fecha + ' quiero emitir una solicitud' ;
console.log(interpolacion) 
console.log(concatenacion)


const escalaMayorDeDo= [  "Do",  "Re",  "Mi",  "Fa",  "Sol",  "La",  "Si", ];
const ulNotas = document.querySelector("#notas");
let lis = "";
for (let nota of escalaMayorDeDo){
    lis += '<li>'+nota+'</li>';
}
ulNotas.innerHTML = lis;

let auto = {
    marca: "JAC",
    modelo: "S4",
    año: 2018,
    km: 60304
   };
   console.log(auto.marca);
   console.log(auto["marca"]);

   const persona = {
    nombre: "Pedro",
    apellido: "Perez",
    profesion: "Frontend Developer",
    hobby: "Trekking"
   }
   console.log(persona.hobby);


   const articulo = {
    id: 31,
    titulo: "Autos nuevos en Chile",
    subtitulo: "El mercado de autos se normaliza",
    descripcion: "No es novedad que los precios de los autos usados se han disparado debido a la falta en stock de autos nuevos, sin embargo puede que esto esté llegando a su fin…"
   };
   
   const articulosSection = document.querySelector(".articulos");
 articulosSection.innerHTML = `
 <article class="articulo">
 <h4>${articulo.titulo}</h4>
 <h6>${articulo.subtitulo}</h6>
 <p>${articulo.descripcion}</p>
 <a href="/articulo/${articulo.id}"><button>Ver más</button></a> </article> `;

 const producto = {
    id: 43,
    titulo: "Cafetera magnética",
    precio: 23990,
    color: "rojo",
    src: "https://placedog.net/250/", // ingresa aquí la URL de la imagen,
    descripción: `Calienta tu café matutino
    con la nueva tecnología magnética`
   };
   
 const sectionProductos = document.querySelector(".productos");
 const template = `
 <div class="targeta">
   <h4>${producto.titulo}</h4>
   <img src="${producto.src}">
   <h5>Color: ${producto.color}</h6>
   <p>${producto.descripción}</p>
   <h5>$${producto.precio}</h5>
</div>
 `;
sectionProductos.innerHTML = template;

const productos = [
    {
     id: 1,
     nombre: "Item 1",
     precio: "12000"
    },
    {
     id: 2,
     nombre: "Item 2",
     precio: "14000",
    }]
    
    let html = ""
for (let prod of productos){
 html += `<div id="${prod.id} class="targeta">
 <h2> ${prod.nombre} </h2>
 <p> ${prod.precio} </p>
 </div> `
 }
const ele = document.querySelector("#productos")
 ele.innerHTML = html


 const iconos = [
    { icono: "<i class='fa-solid fa-car fa-lg'></i>", descripcion: "Auto" },
    { icono: "<i class='fa-solid fa-robot fa-lg'></i>", descripcion: "Robot" },
    { icono: "<i class='fa-solid fa-ghost fa-lg'></i>", descripcion: "Fantasma" },
    { icono: "<i class='fa-solid fa-tooth fa-lg'></i>", descripcion: "Diente" },
   ];

   const secIcons = document.querySelector(".iconos");
   let htmlCode = "";

   for(let icon of iconos){
    htmlCode += `
        <div class="targeta">
            ${icon.icono}
            <h2>${icon.descripcion}</h1>
        </div>
    `;
   }
   secIcons.innerHTML = htmlCode;
let i = 0;
   for(let icon of iconos){
    console.log(iconos[i].descripcion);
    i++;
   }
   console.log(i);
