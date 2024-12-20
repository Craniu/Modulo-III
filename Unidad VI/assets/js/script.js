async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  console.log(data);
  const element = document.querySelector(".user");
  element.innerHTML = `${data.results[0]["email"]}<br>
        ${data.results[0]["name"]["first"]}<br>
        ${data.results[0]["phone"]}<br>
        ${data.results[0]["location"]["city"]}<br>
        <img src="${data.results[0]["picture"]["thumbnail"]}">
    `;
}
getRandomUser();

async function getSomething() {
  try {
    const res = await fetch("https://estapaginanoexiste.cl");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    alert(error.message);
  }
}
getSomething();

const climasSection = document.querySelector(".climas");
const apiURL = "https://api.gael.cloud/general/public/clima";
async function getClimas() {
  const res = await fetch(apiURL);
  const climas = await res.json();
  return climas;
}

async function renderClimas() {
  const climas = await getClimas();
  let template = "";
  climas.forEach((clima) => {
    template += `
        <div class="clima">
        <h3>${clima.Estacion}</h3>
        <p>${clima.Temp}°C</p>
        </div>
        `;
  });
  climasSection.innerHTML = template;
}
renderClimas();


async function getAndCreateDataToChart() {
    const res = await
    fetch("https://api.gael.cloud/general/public/sismos");
    const sismos = await res.json();
    const labels = sismos.map((sismo) => {
    return sismo.Fecha;
    });
    const data = sismos.map((sismo) => {
    const magnitud = sismo.Magnitud.split(" ")[0];
    return Number(magnitud);
    });
    const datasets = [
    {
    label: "Sismo",
    borderColor: "rgb(255, 99, 132)",
    data
    }
    ];
    return { labels, datasets };
    }
    async function renderGrafica() {
        const data = await getAndCreateDataToChart();
        const config = {
        type: "line",
        data
        };
        const myChart = document.getElementById("myChart");
        myChart.style.backgroundColor = "white";
        new Chart(myChart, config);
        }
        renderGrafica();
        