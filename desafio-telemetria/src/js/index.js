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
const changeLogo = document.querySelector(".logo");

lightBotton.addEventListener("click", () => {

    const mode = body.classList.contains("black-mode");
    body.classList.toggle("black-mode"); /* alternar = toggle */
    if(mode){
        console.log("black mode off")
        console.log("click-light-button");
        changeLogo.setAttribute("src","./src/images/itens/solares.png");
        changeBottonImg.setAttribute("src","./src/images/itens/sun.png");

    }
    else{
        console.log("black mode on")
        console.log("click-light-button");
        changeLogo.setAttribute("src","./src/images/itens/solaresmoon.png");
        changeBottonImg.setAttribute("src","./src/images/itens/moon.png");
    }


})

const changeOff = document.querySelector(".off");
const changeOn = document.querySelector(".on");
const toggleButton1 = document.getElementById('toggleButton1');
const toggleButton2 = document.getElementById('toggleButton2');
let isOn1 = false;
let isOn2 = false;

toggleButton1.addEventListener('click', function() {
  isOn1 = !isOn1;
  updateButtonState(toggleButton1, isOn1);
  
});

toggleButton2.addEventListener('click', function() {
  isOn2 = !isOn2;
  updateButtonState(toggleButton2, isOn2);
});

function updateButtonState(button, isOn) {
  if (isOn) {
    button.textContent = 'On';
    button.classList.remove('off');
    button.classList.add('on');
  } else {
    button.textContent = 'Off';
    button.classList.remove('on');
    button.classList.add('off');
  }
}