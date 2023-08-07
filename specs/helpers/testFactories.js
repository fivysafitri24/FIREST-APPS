/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/LikeButtonPresenter';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
