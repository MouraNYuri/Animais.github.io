export default function initTabNav() {
  const imagens = document.querySelectorAll('[data-tab="menu"] li');
  const imagemDescricao = document.querySelectorAll('[data-tab="content"] section');

  function mostrarDescricao(index) {
    imagemDescricao.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direction = imagemDescricao[index].dataset.anime;
    imagemDescricao[index].classList.add("ativo", direction);
  }
  if (imagens.length && imagemDescricao.length) {
    imagemDescricao[0].classList.add("ativo");
    imagemDescricao[0].classList.add("show-right");

    imagens.forEach((imagem, index) => {
      imagem.addEventListener("click", () => {
        mostrarDescricao(index);
      });
    });
  }
}
