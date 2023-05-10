'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => {
    const userQuestion = []
    if (lang == FIGURES_ENG) {
      userQuestion.push('Rock, scissors, paper?')
      userQuestion.push('Want finish?')
      userQuestion.push('Players result: ')
      userQuestion.push('\nComputer result: ')
      userQuestion.push('Its draw\nUser choice: ')
      userQuestion.push('You win\nUser choice: ')
      userQuestion.push('You lose\nUser choice: ')
      userQuestion.push('\nComputer choice: ')
    } else {
      userQuestion.push('Камень, ножницы, бумага?')
      userQuestion.push('Хотите закончить?')
      userQuestion.push('Результат игрока: ')
      userQuestion.push('\nРезультат компьютера: ')
      userQuestion.push('Ничья\nВыбор игрока: ')
      userQuestion.push('Вы выиграли\nВыбор игрока: ')
      userQuestion.push('Вы проиграли\nВыбор игрока: ')
      userQuestion.push('\nВыбор компьютера: ')

    }
    return userQuestion
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    language = prompt("If you want play in English enter ENG or EN").toUpperCase()
    const lang =
      language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    const questions = getFigure(lang)
    return function start() {
      // сюда писать логику игры
      let userChoice = prompt(questions[0]); 

      const computerChoiceNumber = getRandomIntInclusive(0, 2);
      let computerChoice = '';
      if (userChoice === null) {
        let end = confirm(questions[1]);
        alert(
          questions[2] + result.player + questions[3] +result.computer
        );
        return end;
      }
      for (let i = 0; i < lang.length; i++) {
        if (lang[i].startsWith(userChoice.toLowerCase())) {
          userChoice = lang[i];
        }
        if (i === computerChoiceNumber) {
          computerChoice = lang[i];
        }
      }

      if (computerChoice === userChoice) {
        
        alert(
          questions[4] + userChoice + questions[7] + computerChoice

        );
      } else if (
        (computerChoice === lang[0] && userChoice === lang[2]) ||
        (computerChoice === lang[2] && userChoice === lang[1]) ||
        (computerChoice === lang[1] && userChoice === lang[0])
      ) {
        alert(
          questions[5] + userChoice + questions[7] + computerChoice

        );
        result.player += 1;
      } else {
        alert(
          questions[6] + userChoice + questions[7] + computerChoice

        );
        result.computer += 1;
      }
      start();
    };
  };
  window.RPS = game;
})();
