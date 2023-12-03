export default function initAnimarNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animarMutation() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = total / 100;

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = Math.floor(start);
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 50 * Math.random());
    });
  }

  const observer = new MutationObserver((mutation) => {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animarMutation();
    }
  });

  const observeTarget = document.querySelector(".numeros");

  observer.observe(observeTarget, { attributes: true });
}
