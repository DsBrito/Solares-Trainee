
/**
 * Aqui se encontra do o script simples de verificação do login, tendo
 * tratamento de erros (login e senha errados ou em branco), também
 * há uma função referente a visibilidade da senha inserida pelo usuário
 */


//verificação da visibilidade da senha com base no estado do checkbox
  const passwordInput = document.getElementById('password');
  const revealPasswordCheckbox = document.getElementById('revealPassword');

  revealPasswordCheckbox.addEventListener('click', function() {

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });

//verificação de entrada pelo teclado (tecla "Enter")
  document.getElementById("password").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      login();
    }
  });


//Lógica de login, utilizando blocos condicionais simples para 
 function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;

    //lógica para autenticação
    if((username=="daviagatti@gmail.com" && password=="telemetria23" )|| (username=="guiefgen@gmail.com" && password=="telemetria23")||(username=="fernandorr1108@gmail.com" && password=="telemetria23")||(username=="dionatas-solares@gmail.com" && password=="telemetria")){
        if (remember) {
            localStorage.setItem("username", username);
        }
        //alert("Login bem-sucedido!");
        window.location="index2.html";
        } 
    //lógica para a correção de erros.
    else{
        if (username =='' && password ==''){
            alert("Usuário e senha não inseridos. Tente novamente.");
        }
        else if (password ==''){
            alert("Senha não inserida. Tente novamente.");
        }
        else if (username ==''){
            alert("Usuário não inserido. Tente novamente.");
        }
        else {
            alert("Nome de usuário ou senha incorretos. Tente novamente.");
            document.getElementById("password").value = ""; // Limpa o campo de senha
        }
        window.location="login.html";
    }
}
