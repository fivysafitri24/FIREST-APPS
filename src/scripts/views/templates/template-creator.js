import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__name">${resto.name}</h2>
  <img class="resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Informasi</h3>
    <h4>Alamat : </h4><p>${resto.address}, ${resto.city}</p>
    <h4>Rating : </h4><p>${resto.rating}</p>
  </div>
  <div class="resto__description">
    <h3>Deskripsi</h3>
    <p>${resto.description}</p>
  </div>

    <h3>Daftar Menu</h3>
    <div class="resto-menu">
      <div class="resto-food">
        <h4>Daftar Makanan : </h4>
        <ol>
          ${resto.menus.foods.map((food) => `<li><p>${food.name}</p></li>`).join('')}
        <ul>
      </div>

      <div class="resto-drink">
        <h4>Daftar Minuman</h4>
        <ol>
          ${resto.menus.drinks.map((drink) => `<li><p>${drink.name}</p></li>`).join('')}
        <ul>
      </div>
    </div>

    <h3>Reviews</h3>

    <div class="review">
      ${resto.customerReviews.map((review) => `
          <div class="detail-review-item">
            <div class="header-review">
              <p class="name-review"><i title="restaurant" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>

              <p class="date-review">${review.date}</p>
            </div>

            <div class="body-review">
              ${review.review}
            </div>
          </div>
        `).join('')
}
    </div>
 
`;

const createRestoItemTemplate = (resto) => `
<div class="card">
  <div class="container-card">
    <div class="resto-item">
    <div tabindex="0" class="card-rating">
        <i title="ratings" class="fa fa-star"></i>
        <span>${resto.rating}</span>
      </div>
      <img class="resto-item__header__poster lazyload" alt="${resto.name}" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
      
    </div>
    <div class="resto-item__content">
      <h3 class="resto-item__header"><a href="/#/detail/${resto.id}" class="resto-item__header"> ${resto.name} - ${resto.city}</a></h3>
      <p class="truncate" >${resto.description}</p>
    </div>
  </div>  
</div>  

`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
