
    
 function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;

    // Authentication logic
    if((username=="daviagatti@gmail.com" && password=="telemetria23" )|| (username=="guiefgen@gmail.com" && password=="telemetria23")||(username=="fernandorr1108@gmail.com" && password=="telemetria23")||(username=="dionatas-solares@gmail.com" && password=="telemetria")){
        if (remember) {
            localStorage.setItem("username", username);
        }
            //alert("Login bem-sucedido!");
            window.location="index.html";

        } 
     else if (username =='' && password ==''){
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
    }
}

document.getElementById("revealPassword").addEventListener("change", function () {
    let passwordInput = document.getElementById("password");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }  });