alert("Desafio Treineer em construção..");


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