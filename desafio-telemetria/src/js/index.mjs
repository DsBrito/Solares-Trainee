
/**
 * Aqui se encontra todos scripts para o funcionamento da API, desde
 * a conexão com o socket.io (site/servidor) até o script para mapas,
 * variáveis, botões e gráficos.
 */


/***************************************************************/
/****              [Mensagem do Criador dessa API]          ****/
/***************************************************************/
alert("Olá, eu sou o Dionatas -> Desafio Treineer Finalizado! ツ");


/*****************************************************************************/
/****                  [Script para o botão de logoff]                    ****/
/*****************************************************************************/
document.getElementById("logoffButton").addEventListener("click", function() {
    localStorage.removeItem("username");
    window.location.href = "login.html";
  }
);

    
/***************************************************************/
/****      [Script para o botão de mudança de tema]         ****/
/***************************************************************/
const lightBotton = document.getElementById("changeLight");
const body = document.querySelector("body");
const changeBottonImg = document.querySelector(".theme-image");

lightBotton.addEventListener("click", () => {
    const mode = body.classList.contains("black-mode");
    body.classList.toggle("black-mode"); 
    if(mode){
        changeBottonImg.setAttribute("src","./src/images/itens/sun.png"); //claro
    }
    else{
        changeBottonImg.setAttribute("src","./src/images/itens/moon.png"); //escuro
    }
  }
)

/*************************************************************************************************/
/****                                [Script para os gráficos]                               ****/
/****  Cada gráfico possui a função de inicialização e a função de adicionar uma informação]  ***/
/************************************************************************************************/

/************************************************************************************/
//PRIMEIRO GRÁFICO -> GRÁFICO DE VELOCIDADE DO BARCO
/************************************************************************************/
let chart_engineSpeed;
let chart_DataEngineSpeed = [];

//Função para inicializar o gráfico
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

//função para adicionar uma informação no gráfico
function addDataToChartSpeed(newData, otherData) {
  if (chart_DataEngineSpeed.length > 5) {
    chart_DataEngineSpeed.push(newData);
    chart_DataEngineSpeed.shift()
  }
  if (chart_engineSpeed.data.labels.length > 5) {
    chart_engineSpeed.data.labels.push(otherData);
    chart_engineSpeed.data.labels.shift();
   }
  else {
      chart_DataEngineSpeed.push(newData);
      chart_engineSpeed.data.labels.push(otherData);
    } 
  chart_engineSpeed.update('none');
  chart_engineSpeed.resize();
}

/************************************************************************************/
//SEGUNDO GRÁFICO -> GRÁFICO DE CORRENTE DO MOTOR DO BARCO
/************************************************************************************/
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
    }
  );
}

//função para adicionar uma informação no gráfico
function addDataToChartCurrent(newData, otherData) {
    if (chart_DataEngineCurrent.length > 5) {
      chart_DataEngineCurrent.push(newData);
      chart_DataEngineCurrent.shift();   
    }
    if (  chart_engineCurrent.data.labels.length > 5) {
      chart_engineCurrent.data.labels.push(otherData);
      chart_engineCurrent.data.labels.shift();
    }
    else {
        chart_DataEngineCurrent.push(newData);
        chart_engineCurrent.data.labels.push(otherData);
      }    
  chart_engineCurrent.update('none');
  chart_engineCurrent.resize();
}

/************************************************************************************/
//TERCEIRO GRÁFICO -> GRÁFICO DE CORRENTE DA BATERIA
/************************************************************************************/
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

//função para adicionar uma informação no gráfico
function addDataToChartCurrentB(newData, otherData) {
  if (chart_DataBatteryCurrent.length > 5) {
    chart_DataBatteryCurrent.push(newData);
    chart_DataBatteryCurrent.shift();  
  }
  if (chart_batteryCurrent.data.labels.length > 5) {
    chart_batteryCurrent.data.labels.push(otherData);
    chart_batteryCurrent.data.labels.shift();
   }
  else {
    chart_DataBatteryCurrent.push(newData);
    chart_batteryCurrent.data.labels.push(otherData);
  } 
    chart_batteryCurrent.update('none');
    chart_batteryCurrent.resize();
}



/************************************************************************************************************/
/****                                         [Script para o mapa]                                       ****/
/***********************************************************************************************************/
var mymap = L.map('map').setView([51.505, -0.09], 13);
var marker;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(mymap);

//função para adicionar uma informação no mapa
function atualizarMapa(latitude, longitude) {
    if (marker) {
      marker.setLatLng([latitude, longitude]);
    } else {
      marker = L.marker([latitude, longitude]).addTo(mymap);
    }
    mymap.setView([latitude, longitude]);
}

/*****************************************************************************************/
/****                      [Script para as variáveis boleanas]                        ****/
/*****************************************************************************************/
const toggleSolar1 = document.getElementById('toggleSolar1');
const toggleSolar2 = document.getElementById('toggleSolar2');



/*****************************************************************************************/
/****                  [Script conexão e funcionamento da API]                        ****/
/*****************************************************************************************/
let info = document.getElementById("info");

//conexão com o socket.io - websocket server
const socket = io.connect('https://telemetria-trainee-2023.onrender.com');
socket.on('connect', () => console.log('websocket connected!'))
socket.on('disconnect', () => console.log('websocket disconnect'))

//a variável "data" contém todos os dados retirados do servidor/site
socket.on("info", data => {

//-> ATUALIZAÇÃO DOS DADOS/INFORMAÇÕES DA API

//escrita na API com os dados retirados do site
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

// tratamento dos indicadores booleanos
  if (data.estadoStringSolar1 == 1 && data.estadoStringSolar2 == 1) {
    toggleSolar1.textContent = 'ON';
    toggleSolar2.textContent = 'ON';
    toggleSolar1.classList.remove('off');
    toggleSolar1.classList.add('on');
    toggleSolar2.classList.remove('off');
    toggleSolar2.classList.add('on');

  } else if (data.estadoStringSolar1 == 0 && data.estadoStringSolar2 == 0) {
    toggleSolar1.textContent = 'OFF';
    toggleSolar2.textContent = 'OFF';
    toggleSolar1.classList.remove('on');
    toggleSolar1.classList.add('off');
    toggleSolar2.classList.remove('on');
    toggleSolar2.classList.add('off');

  } else if (data.estadoStringSolar1 == 1 && data.estadoStringSolar2 == 0) {
    toggleSolar1.textContent = 'ON';
    toggleSolar1.classList.remove('off');
    toggleSolar1.classList.add('on');
    toggleSolar2.textContent = 'OFF';
    toggleSolar2.classList.remove('on');
    toggleSolar2.classList.add('off');

  } else if (data.estadoStringSolar1 == 0 && data.estadoStringSolar2 == 1) {
    toggleSolar1.textContent = 'OFF';
    toggleSolar1.classList.remove('on');
    toggleSolar1.classList.add('off');
    toggleSolar2.textContent = 'ON';
    toggleSolar2.classList.remove('off');
    toggleSolar2.classList.add('on');
  }

//inserção dos elementos no gráfico           
  addDataToChartSpeed(data.velocidadeBarco, data.updateAt);
  addDataToChartCurrent(data.correnteMotor, data.updateAt);
  addDataToChartCurrentB(data.correnteBaterias, data.updateAt);
 
//atualizando o mapa com dados do site
   atualizarMapa(data.latitude, data.longitude);


});

//inicialização dos gráficos
initiEngineSpeed();
initiEngineCurrent();
initiBatteryCurrent();
