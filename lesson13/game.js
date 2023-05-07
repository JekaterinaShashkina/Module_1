'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.round() * (max - min + 1) + min);
  };

  const getFigure = (lang) => {};

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang =
      language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    return function start() {
      // сюда писать логику игры
    };
  };
  window.rps = game;
})();
