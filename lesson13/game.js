'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
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
      let userChoice = prompt('Камень, ножницы, бумага?');
      const computerChoiceNumber = getRandomIntInclusive(0, 2);
      let computerChoice = '';
      if (userChoice === null) {
        let end = confirm('Хотите закончить?');
        alert(
          `Результат игрока: ${result.player}\nРезультат компьютера ${result.computer}`,
        );
        return end;
      }
      for (let i = 0; i < FIGURES_RUS.length; i++) {
        if (FIGURES_RUS[i].startsWith(userChoice.toLowerCase())) {
          userChoice = FIGURES_RUS[i];
        }
        if (i === computerChoiceNumber) {
          computerChoice = FIGURES_RUS[i];
        }
      }

      if (computerChoice === userChoice) {
        alert(
          `Ничья\nВаш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}`,
        );
      } else if (
        (computerChoice === FIGURES_RUS[0] && userChoice === FIGURES_RUS[2]) ||
        (computerChoice === FIGURES_RUS[2] && userChoice === FIGURES_RUS[1]) ||
        (computerChoice === FIGURES_RUS[1] && userChoice === FIGURES_RUS[0])
      ) {
        alert(
          `Вы выиграли\nВаш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}`,
        );
        result.player += 1;
      } else {
        alert(
          `Вы проиграли\nВаш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}`,
        );
        result.computer += 1;
      }
      start();
    };
  };
  window.RPS = game;
})();
