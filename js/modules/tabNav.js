export default class TabNav {
  constructor(menu, content) {
    this.imagens = document.querySelectorAll(menu);
    this.imagemDescricao = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  mostrarDescricao(index) {
    this.imagemDescricao.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direction = this.imagemDescricao[index].dataset.anime;
    this.imagemDescricao[index].classList.add(this.activeClass, direction);
  }

  addTabNavEvent() {
    this.imagens.forEach((imagem, index) => {
      imagem.addEventListener("click", () => this.mostrarDescricao(index));
    });
  }

  init() {
    if (this.imagens.length && this.imagemDescricao.length) {
      this.mostrarDescricao(0);
      this.addTabNavEvent();
    }
  }
}
