console.log("Simtema paranomenal iniciado");

const btnTeste = document.getElementById("testeSistema");


btnTeste.addEventListener("click", function () {
  alert("⚠️ Presença paranormal detectada!");
});


const btnProtocolo = document.getElementById("protocolo");
const titulo = document.getElementById("tituloPrincipal");

btnProtocolo.addEventListener("click", function () {
  titulo.textContent = "🚨 PROTOCOLO DE EMERGÊNCIA ATIVADO 🚨";
});


const btnAlerta = document.getElementById("alertaMaximo");

btnAlerta.addEventListener("click", function () {
  document.body.classList.toggle("alerta-maximo");
});

