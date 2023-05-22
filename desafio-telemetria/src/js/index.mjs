/* mensagem de alerta */
/*alert("Desafio Treineer em construção..");
*/

    
  /************************************/
  /* mudar tema da página (escuro e claro)*/

const lightBotton = document.getElementById("changeLight");

const body = document.querySelector("body");
//console.log(body);

const changeBottonImg = document.querySelector(".theme-image");

lightBotton.addEventListener("click", () => {

    const mode = body.classList.contains("black-mode");
    body.classList.toggle("black-mode"); /* alternar = toggle */
    if(mode){
        //console.log("black mode off")
        //console.log("click-light-button");
        changeBottonImg.setAttribute("src","./src/images/itens/sun.png");
    }
    else{
        //console.log("black mode on")
        //console.log("click-light-button");
        changeBottonImg.setAttribute("src","./src/images/itens/moon.png");
    }
  }
)

  /************************************/
  /* Funções para auxiliar na criação de grafícos*/
  
  //-> PARA O GRAFÍCO  DE VELOCIDADE DO MOTOR DO BARCO 
  // letiáveis globais
let chart_engineSpeed;
let chart_DataEngineSpeed = [];

// Função para inicializar o gráfico
function initiEngineSpeed() {
  let ctx_engineSpeed = document.getElementById('engineSpeed').getContext('2d');
  chart_engineSpeed = new Chart(ctx_engineSpeed, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'VELOCIDADE DO BARCO',
        data: chart_DataEngineSpeed,
        borderColor: 'blue',
        backgroundColor: 'transparent',
      }]
    },
    options: {
      
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.5)', // Cor da grade do eixo Y (mais escura)
              borderColor: 'rgba(0, 0, 0, 0.5)', // Cor da borda da grade do eixo Y (mais escura)
              borderWidth: 20000 // Espessura da borda da grade do eixo Y (mais grossa)
            },
                      
        },
        x: {
          
          grid: {
            color: 'rgba(0, 0, 0, 0.5)', // Cor da grade do eixo Y (mais escura)
            borderColor: 'rgba(0, 0, 0, 0.5)', // Cor da borda da grade do eixo Y (mais escura)
            borderWidth: 20000 // Espessura da borda da grade do eixo Y (mais grossa)
          }
        }
      }
    }
  });
}


function addDataToChartSpeed(newData, otherData) {
  if (chart_DataEngineSpeed.length > 5) {
   // chart_DataEngineSpeed.push(otherData);
   // chart_DataEngineSpeed.shift();
    chart_DataEngineSpeed.push(newData);
    chart_DataEngineSpeed.shift();
    
  }
  if (chart_engineSpeed.data.labels.length > 5) {

    chart_engineSpeed.data.labels.push(otherData);
    chart_engineSpeed.data.labels.shift();
   }
  else {
  //    chart_DataEngineSpeed.push(otherData);
      chart_DataEngineSpeed.push(newData);
      chart_engineSpeed.data.labels.push(otherData);

    } 
    chart_engineSpeed.update('none');

    // Atualizar o tamanho do canvas do gráfico para acomodar o rótulo longo
    chart_engineSpeed.resize();
  }

//SEGUNDO GRÁFICO 
  /************************************/

  //-> PARA O GRAFÍCO  DE VELOCIDADE DO MOTOR DO BARCO 
  // letiáveis globais
  let chart_engineCurrent;
  let chart_DataEngineCurrent = [];
  
  // Função para inicializar o gráfico
  function initiEngineCurrent() {
    let ctx_engineCurrent = document.getElementById('engineCurrent').getContext('2d');
    chart_engineCurrent = new Chart(ctx_engineCurrent, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'CORRENTE DO MOTOR',
          data: chart_DataEngineCurrent,
          borderColor: 'blue',
          backgroundColor: 'transparent',
        }]
      },
      options: {
        
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.5)', // Cor da grade do eixo Y (mais escura)
                borderColor: 'rgba(0, 0, 0, 0.5)', // Cor da borda da grade do eixo Y (mais escura)
                borderWidth: 20000 // Espessura da borda da grade do eixo Y (mais grossa)
              }
            
          },
          x: {
            
            grid: {
              color: 'rgba(0, 0, 0, 0.5)', // Cor da grade do eixo Y (mais escura)
              borderColor: 'rgba(0, 0, 0, 0.5)', // Cor da borda da grade do eixo Y (mais escura)
              borderWidth: 20000 // Espessura da borda da grade do eixo Y (mais grossa)
            }
          }
        }
      }
    });
  }

  function addDataToChartCurrent(newData, otherData) {
    if (chart_DataEngineCurrent.length > 5) {
     // chart_DataEngineCurrent.push(otherData);
     // chart_DataEngineCurrent.shift();
      chart_DataEngineCurrent.push(newData);
      chart_DataEngineCurrent.shift();
      
    }
    if (  chart_engineCurrent.data.labels.length > 5) {
  
      chart_engineCurrent.data.labels.push(otherData);
      chart_engineCurrent.data.labels.shift();
     }
    else {
    //    chart_DataEngineCurrent.push(otherData);
        chart_DataEngineCurrent.push(newData);
        chart_engineCurrent.data.labels.push(otherData);
  
      } 
      chart_engineCurrent.update('none');
  
      // Atualizar o tamanho do canvas do gráfico para acomodar o rótulo longo
      chart_engineCurrent.resize();
    }




//TERCEIRO GRÁFICO
let chart_batteryCurrent;
let chart_DataBatteryCurrent = [];

// Função para inicializar o gráfico
function initiBatteryCurrent() {
  let ctx_batteryCurrent = document.getElementById('batteryCurrent').getContext('2d');
  chart_batteryCurrent = new Chart(ctx_batteryCurrent, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'CORRENTE DA BATERIA',
        data: chart_DataBatteryCurrent,
        borderColor: 'blue',
        backgroundColor: 'transparent',
      }]
    },
    options: {
      
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.5)', // Cor da grade do eixo Y (mais escura)
              borderColor: 'rgba(0, 0, 0, 0.5)', // Cor da borda da grade do eixo Y (mais escura)
              borderWidth: 20000 // Espessura da borda da grade do eixo Y (mais grossa)
            },

        },
        x: {
          
          grid: {
            color: 'rgba(0, 0, 0, 0.5)', // Cor da grade do eixo Y (mais escura)
            borderColor: 'rgba(0, 0, 0, 0.5)', // Cor da borda da grade do eixo Y (mais escura)
            borderWidth: 20000 // Espessura da borda da grade do eixo Y (mais grossa)
          }
        }
      }
    }
  });
}


function addDataToChartCurrentB(newData, otherData) {
  if (chart_DataBatteryCurrent.length > 5) {
   // chart_DataBatteryCurrent.push(otherData);
   // chart_DataEngineCurrent.shift();
   chart_DataBatteryCurrent.push(newData);
    chart_DataBatteryCurrent.shift();
    
  }
  if (chart_batteryCurrent.data.labels.length > 5) {

    chart_batteryCurrent.data.labels.push(otherData);
    chart_batteryCurrent.data.labels.shift();
   }
  else {
  //    chart_DataBatteryCurrent.push(otherData);
  chart_DataBatteryCurrent.push(newData);
  chart_batteryCurrent.data.labels.push(otherData);

    } 
    chart_batteryCurrent.update('none');

    // Atualizar o tamanho do canvas do gráfico para acomodar o rótulo longo
    chart_batteryCurrent.resize();
  }



//mapa 
  var mymap = L.map('map').setView([51.505, -0.09], 13);
  var marker;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(mymap);


  function atualizarMapa(latitude, longitude) {
    if (marker) {
      marker.setLatLng([latitude, longitude]);
    } else {
      marker = L.marker([latitude, longitude]).addTo(mymap);
    }

    mymap.setView([latitude, longitude]);
  }


  /* Váriáveis pora os indicadores Booleanos*/
  //letiaveis boleanas ON/OFF
const toggleSolar1 = document.getElementById('toggleSolar1');
const toggleSolar2 = document.getElementById('toggleSolar2');


  /************************************/
  //escrita na tela
let info = document.getElementById("info");


  /************************************/
  //conexão com o socket.io - site
// connect to the websocket server
const socket = io.connect('https://telemetria-trainee-2023.onrender.com');
//console.log('entrei aqui 1: ')
socket.on('connect', () => console.log('websocket connected!'))
//console.log('entrei aqui 2: ')
socket.on('disconnect', () => console.log('websocket disconnect'))
//console.log('entrei aqui 3: ')

socket.on("info", data => {

  //Escrita na API com os dados retirados do site
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

  //Tratamento dos indicadores booleanos            
    if(data.estadoStringSolar1 == 1 && data.estadoStringSolar2==1){
      toggleSolar1.textContent = 'ON'
      toggleSolar2.textContent = 'ON'
      toggleSolar1.classList.toggle('on');
      toggleSolar2.classList.toggle('on');
    }
    else 
    if(data.estadoStringSolar1==0 && data.estadoStringSolar2==0){
      toggleSolar1.textContent = 'OFF'
      toggleSolar2.textContent = 'OFF'
      toggleSolar2.classList.toggle('off');
      toggleSolar1.classList.toggle('off');
    }

    else 
    if(data.estadoStringSolar1 == 1 && data.estadoStringSolar2==0){
      toggleSolar1.textContent = 'ON'
      toggleSolar1.classList.toggle('on');
      toggleSolar2.textContent = 'OFF'
      toggleSolar2.classList.toggle('off');
    }
    else 
    if(data.estadoStringSolar1==0 && data.estadoStringSolar2==1){
      toggleSolar1.textContent = 'OFF'
      toggleSolar1.classList.toggle('off');

      toggleSolar2.textContent = 'ON'
      toggleSolar2.classList.toggle('on');

    }

  //console.log('Boleano: ', data.estadoStringSolar1);
  //console.log('Boleano: ', data.estadoStringSolar2);
  //console.log('prox:');

//gráficos
  //console.log('velocidadeBarco: ', data.velocidadeBarco);
  
  //Inserção dos elementos no gráfico           
  addDataToChartSpeed(data.velocidadeBarco, data.updateAt);
  addDataToChartCurrent(data.correnteMotor, data.updateAt);
  addDataToChartCurrentB(data.correnteBaterias, data.updateAt);
 
  //atualizando o mapa com dados do site
   atualizarMapa(data.latitude, data.longitude);


});

//Inicialização dos gráficos
initiEngineSpeed();
initiEngineCurrent();
initiBatteryCurrent();
