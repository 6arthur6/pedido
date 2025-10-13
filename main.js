// Mostrar mensagens ao clicar nas imagens
function showMessage(msg) {
  alert(msg);
}

// Mostrar o pedido final
function mostrarPedido() {
  const pedido = document.getElementById("pedido-final");
  pedido.classList.remove("hidden");
  pedido.scrollIntoView({ behavior: "smooth" });
}

// Efeito fade-in ao rolar
const elements = document.querySelectorAll(".fade-in");

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.8;

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add("visible");
  });
}

window.addEventListener("scroll", checkVisibility);
checkVisibility();