// grados = Number(prompt("Introduce la temperatura"))
// if (grados > 30) {
//     console.log('Uf que Calor!')
// }

btn = document.querySelector("#btn")

btn.addEventListener("click",()=>{
    value = document.querySelector('#input').value
    if (value == 'password-secreto'){
        par = document.querySelector('#secret-result')
        par.innerHTML = 'lo lograste'
        }else{
           par = document.querySelector('#secret-result')
           par.innerHTML = 'Nones'
        }
})

if (false) {
    console.log("Este mensaje no se mostrará");
    } else if (false) {
    console.log("Este mensaje tampoco");
    } else if (true) {
    console.log("Este mensaje SI se mostrará 👋😁");
    } else {
    console.log("A mi no me verás 😑🙄");
    }
    

    btn2 = document.querySelector("#btnVer")
    btn2.addEventListener("click", () => {
        ancho = Number(document.querySelector("#inAncho").value)
        if(ancho < 576){
            alert("xs")
        }else if(ancho >= 576 && ancho < 768){
            alert("sm")
        }else if(ancho >=768 && ancho < 962){
            alert("md")
        }else if(ancho >= 962){
            alert("xl")
        }
    })

    