import ScrollSuave from "./modules/scrollSuave.js";
import initAnimarScroll from "./modules/scrollAnime.js";
import initTabNav from "./modules/tabNav.js";
import initAccordion from "./modules/accordion.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/toolTip.js";
import initDropdownMenu from "./modules/dropdownMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.init();

initAnimarScroll();
initTabNav();
initAccordion();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
