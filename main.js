var typed = new Typed(".text", {
  strings: [
    "Desenvolvedora Front End.",
    "Desenvolvedora Web.",
    "Programadora."
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1200,
  smartBackspace: true,
  loop: true
});
function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Meu nome é ${nome}.
Email: ${email}
Mensagem: ${mensagem}`;

  const numeroWhatsApp = "557996060189"; 
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}