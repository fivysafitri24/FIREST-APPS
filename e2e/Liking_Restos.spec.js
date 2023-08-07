/* eslint-disable no-undef */
Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#restos');
  I.see('Belum ada restoran yang disukai', '.resto_empty');
});

Scenario('liking one resto', ({ I }) => {
  I.see('Belum ada restoran yang disukai', '.resto_empty');
  I.amOnPage('/');
  I.seeElement('.resto-item__header a');
  I.click(locate('.resto-item__header a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.card');
});

Scenario('unliking one resto', ({ I }) => {
  I.see('Belum ada restoran yang disukai', '.resto_empty');
  I.amOnPage('/');
  I.seeElement('.resto-item__header a');
  I.click(locate('.resto-item__header a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  I.amOnPage('/#/favorite');
  I.seeElement('#restos');
  I.seeElement('.resto-item__header');
  I.click(locate('.resto-item__header a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#restos');
  I.see('Belum ada restoran yang disukai', '.resto_empty');
});
