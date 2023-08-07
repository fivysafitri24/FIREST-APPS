/* eslint-disable no-shadow */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
      <h2 class="content__heading">Daftar Restoran Favoritmu</h2>
      <h3 class="resto_empty"></h3>
      <section id="restos" class="restos"></section>
      </div>
      `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector('#restos');
    const skipContentElement = document.querySelector('.skipContent');
    const emptyContainer = document.querySelector('.resto_empty');
    if (restos.length === 0) {
      emptyContainer.innerHTML = `
          Belum ada restoran yang disukai
      `;
    }

    restos.forEach((restos) => {
      restoContainer.innerHTML += createRestoItemTemplate(restos);
    });

    skipContentElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  },
};

export default Favorite;
