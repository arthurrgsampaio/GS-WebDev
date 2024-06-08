document.addEventListener("DOMContentLoaded", () => {
  const login = document.getElementById("login");
  if (localStorage.getItem("login") == "true") {
    login.innerHTML = "Logout";
  }
});

document.getElementById("login").addEventListener("click", () => {
  const login = document.getElementById("login");

  if (login.innerHTML == "Login") {
    window.location.href = "login.html";
  } else {
    localStorage.setItem("login", "false");
    login.innerHTML = "Login";
  }
});