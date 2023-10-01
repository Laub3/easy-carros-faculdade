window.onload = function() {
    const dia = document.getElementById('dia');
    dia.value = 0;
    const hora = document.getElementById('hora');
    hora.value = 1;
  },

function redirectToLogin() {
  document.getElementById("redirectToLogin").onclick = function () {
    location.href = "/index.html";
  };
}
  