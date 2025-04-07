/**
 * Módulo Header
 * Controla el comportamiento sticky y el scroll suave a secciones
 */

export const initHeader = () => {
    const header = document.querySelector('.header');
  
    // Enlaces de navegación dentro del header
    const linkProducts = document.querySelector('.header__link[href="#featured-products"]');
    const linkCollections = document.querySelector('.header__link[href="#collections"]');
  
    /**
     * Sticky Header
     * Al hacer scroll, se agrega una clase para aplicar transparencia y efecto sticky
     */
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header--sticky');
      } else {
        header.classList.remove('header--sticky');
      }
    });
  
    /**
     * Scroll Suave
     * Realiza scroll animado a la sección especificada
     * @param {string} selector - ID del elemento al que se desea hacer scroll
     */
    const smoothScroll = (selector) => {
      const section = document.querySelector(selector);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    // Listeners para scroll suave
    linkProducts?.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScroll('#featured-products');
    });
  
    linkCollections?.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScroll('#collections');
    });
  };
  