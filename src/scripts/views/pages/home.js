import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h1 class="content__heading">Beberapa Rekomendasi Restoran untuk Anda</h1>
        <section id="explore-restaurant"></section>
      </div>
      `;
  },

  afterRender: async () => {
    const listContainer = document.querySelector('#explore-restaurant');
    const data = await TheRestoDbSource.homeListResto();
    data.restaurants.forEach((restaurant) => {
      listContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
