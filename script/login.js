document.getElementById("btnLogin").addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let erro = document.getElementById("mensagemErro");

  if (email === "admin" && password === "admin") {
    if (erro.innerHTML == "Usuário ou senha incorretos!"){
      erro.innerHTML = "";
    }
    alert("Login efetuado com sucesso!\nTe redirecionando para a pagina principal...")
    window.location.href = "index.html";
    localStorage.setItem("login", "true");
  } else{
    erro.innerHTML = "Usuário ou senha incorretos!";
  }
});