/*alert("Desafio Treineer em construção..");
*/

/**
 * Pegar no JS o elemento HTML correstpondente ao botão de troca de tema
 */

const lightBotton = document.getElementById("change-light");

const body = document.querySelector("body");
console.log(body);

/**
 * Identificar o clique do usuário no botão de troca de luz e trocar a imagem
 *
*/
const changeBottonImg = document.querySelector(".botton-image");

lightBotton.addEventListener("click", () => {

    const mode = body.classList.contains("black-mode");
    body.classList.toggle("black-mode"); /* alternar = toggle */
    if(mode){
        console.log("black mode off")
        console.log("click-light-button");
        changeBottonImg.setAttribute("src","./src/images/itens/sun.png");

    }
    else{
        console.log("black mode on")
        console.log("click-light-button");
        changeBottonImg.setAttribute("src","./src/images/itens/moon.png");
    }


})


//grafico 1
// Variáveis globais
var chart;
var chartData = [];

// Função para inicializar o gráfico
function initChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'VELOCIDADE DO BARCO',
        data: chartData,
        borderColor: 'white',
        backgroundColor: 'transparent',
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
// Função para adicionar novos dados ao gráfico
function addDataToChart(newData) {
  chartData.push(newData);
  if (chartData.length > 10000) {
    chartData.shift();
  }

  chart.data.labels = Array.from({ length: chartData.length }, (_, i) => i + 1);
  chart.update();
}

//grafico 2

//Variaveis boleanas ON/OFF
const toggleButton1 = document.getElementById('toggleButton1');
const toggleButton2 = document.getElementById('toggleButton2');


// Exemplo de alteração nas variáveis booleanas

//escrita na tela
var info = document.getElementById("info");


// connect to the websocket server
const socket = io.connect('https://telemetria-trainee-2023.onrender.com');
//console.log('entrei aqui 1: ')
// this message is triggered when the websocket gets connected
socket.on('connect', () => console.log('websocket connected!'))
//console.log('entrei aqui 2: ')

// this message is triggered when the websocket gets disconnected
socket.on('disconnect', () => console.log('websocket disconnect'))
console.log('entrei aqui 3: ')

// receive a message from the server on the info 'channel'
socket.on("info", data => {
info.innerHTML = "Resultado:<br>" +
                "<br>  -> corrente do motor: " + data.correnteMotor +
                "<br>  -> corrente da baterias: " + data.correnteBaterias +
                "<br>  -> temperatura: " + data.temperatura +
                "<br>  -> umidade: " + data.umidade +
                "<br>  -> tensão da alimentação PCB: " + data.tensaoAlimentacaoPCB +
                "<br>  -> estado da string Solar1: " + data.estadoStringSolar1 +
                "<br>  -> estado da string Solar2: " + data.estadoStringSolar2 +
                "<br>  -> tensão de saída MPPT: " + data.tensaoAlimentacaoPCB +
                "<br>  -> tensao de entrada MPPT: " + data.tensaoEntradaMPPT +
                "<br>  -> corrente MPPT: " + data.correnteMPPT +
                "<br>  -> velocidade do barco: " + data.velocidadeBarco +
                "<br>  -> latitude: " + data.latitude +
                "<br>  -> longitude: " + data.longitude +
                "<br>  -> update At: " + data.updateAt
              ;

    if(data.estadoStringSolar1 == 1 && data.estadoStringSolar2==1){
      toggleButton1.textContent = 'ON'
      toggleButton2.textContent = 'ON'
      toggleButton1.classList.toggle('on');
      toggleButton2.classList.toggle('on');

    }
    else if(data.estadoStringSolar1==0 && data.estadoStringSolar2==0){
      toggleButton1.textContent = 'OFF'
      toggleButton2.textContent = 'OFF'
      toggleButton2.classList.toggle('off');
      toggleButton1.classList.toggle('off');

    }

    if(data.estadoStringSolar1 == 1 && data.estadoStringSolar2==0){
      toggleButton1.textContent = 'ON'
      toggleButton1.classList.toggle('on');

      toggleButton2.textContent = 'OFF'
      toggleButton2.classList.toggle('off');

    }
    else if(data.estadoStringSolar1==0 && data.estadoStringSolar2==1){
      toggleButton1.textContent = 'OFF'
      toggleButton1.classList.toggle('off');

      toggleButton2.textContent = 'ON'
      toggleButton2.classList.toggle('on');

    }


//grafico
  console.log('velocidadeBarco: ', data.velocidadeBarco);
  
  addDataToChart(data.velocidadeBarco);
  //addDataToChart(data.temperatura);


});

initChart();
