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
      const choices = () => {
      let userChoice = prompt('Камень, ножницы, бумага?');
      const computerChoiceNumber = getRandomIntInclusive(0, 2);
      let computerChoice = '';
      console.log(computerChoice);
      for (let i = 0; i < FIGURES_RUS.length; i++) {
        if (FIGURES_RUS[i].startsWith(userChoice.toLowerCase())) {
          userChoice = FIGURES_RUS[i];
        }
        if (i === computerChoiceNumber) {
          computerChoice = FIGURES_RUS[i];
        }
      console.log(userChoice);
      console.log(`${userChoice[0]} ${computerChoice[0]}`);
        return {userChoice, computerChoice};
      }
    }
    let u = '';
    let c = '';
    u, c = choices()
    console.log("new words: ", u, c);


      const checkResult = (u, c) => {
        if (u === null) {
          return confirm('Хотите закончить?');
        }
        if (c === u) {
          alert("it's a draw");
          u, c = choices()
        } else if (
          (c === FIGURES_RUS[0] && u === FIGURES_RUS[2]) ||
          (c === FIGURES_RUS[2] && u === FIGURES_RUS[1]) ||
          (c === FIGURES_RUS[1] && u === FIGURES_RUS[0])
        ) {
          alert(`Вы выиграли\nВаш выбор: ${u}\nВыбор компьютера: ${c}`);
          u, c = choices()
        } else {
          alert(`Вы проиграли\nВаш выбор: ${u}\nВыбор компьютера: ${c}`);
          u, c = choices()

        }
        checkResult(u, c);
      };
      checkResult(choices());

      // if (computerChoice === userChoice) {
      //   alert("it's a draw");
      // } else if (
      //   (computerChoice === FIGURES_RUS[0] && userChoice === FIGURES_RUS[2]) ||
      //   (computerChoice === FIGURES_RUS[2] && userChoice === FIGURES_RUS[1]) ||
      //   (computerChoice === FIGURES_RUS[1] && userChoice === FIGURES_RUS[0])
      // ) {
      //   alert(
      //     `Вы выиграли\nВаш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}`,
      //   );
      // } else {
      //   alert(
      //     `Вы проиграли\nВаш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}`,
      //   );
      // }
    };
  };
  window.RPS = game;
})();
