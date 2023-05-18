/*alert("Desafio Treineer em construção..");
*/

/**
 * Pegar no JS o elemento HTML correstpondente ao botão de troca de tema
 */

const lightBotton = document.getElementById("change-light");

/**
 * Pegar no JS o elemento HTML correspondente ao body
 */

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


//Variaveis boleanas ON/OFF
const toggleButton1 = document.getElementById('toggleButton1');
const toggleButton2 = document.getElementById('toggleButton2');
const state = {
  isOn1: false,
  isOn2: false
};

const handler = {
  set: function(target, key, value) {
    target[key] = value;
    updateButtonState(key, value);
    return true;
  }
};

const stateProxy = new Proxy(state, handler);

function updateButtonState(key, value) {
  if (key === 'isOn1') {
    toggleButton1.textContent = value ? 'ON' : 'OFF';
    toggleButton1.classList.toggle('on', value);
    toggleButton1.classList.toggle('off', !value);
  } else if (key === 'isOn2') {
    toggleButton2.textContent = value ? 'ON' : 'OFF';
    toggleButton2.classList.toggle('on', value);
    toggleButton2.classList.toggle('off', !value);
  }
}

// Exemplo de alteração nas variáveis booleanas
stateProxy.isOn1 = 1;
stateProxy.isOn2 = 1;


const toggleButton = document.getElementById('toggleButton');
let isOn = false;

toggleButton.addEventListener('click', function() {
  isOn = !isOn;
  updateButtonState();
});

function updateButtonState() {
  if (isOn) {
    toggleButton.textContent = 'On';
    toggleButton.classList.remove('off');
    toggleButton.classList.add('on');
  } else {
    toggleButton.textContent = 'Off';
    toggleButton.classList.remove('on');
    toggleButton.classList.add('off');
  }
}