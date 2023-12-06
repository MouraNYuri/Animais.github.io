import ScrollSuave from "./modules/scrollSuave.js";
import initAnimarScroll from "./modules/scrollAnime.js";
import TabNav from "./modules/tabNav.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal.js";
import initTooltip from "./modules/toolTip.js";
import initDropdownMenu from "./modules/dropdownMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabnav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

initAnimarScroll();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
