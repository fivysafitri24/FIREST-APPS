import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/LikeButtonPresenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <div class="mainContent__container">
      <h2 tabindex="0" class="mainContent__title">Detail Restaurant</h2>
        <section id="detail-resto"></section>
        <div class="like" id="likeButtonContainer"></div>
        <div class="form-review">
        </div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    console.log(resto);
    const restoContainer = document.querySelector('#detail-resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        pictureId: resto.pictureId,
        description: resto.description,
        rating: resto.rating,
      },
    });

    const skipContentElement = document.querySelector('.skipContent');
    skipContentElement.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  },

};

export default Detail;
