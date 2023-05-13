'use strict';

(() => {
  // нужные константы и функции
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  //   const logic = (p, c, resP, resC) => {
  //     if (p % 2 === c) {
  //       resP -= p;
  //       resC += p;
  //       alert(
  //         `Вы проиграли. Остаток шариков у игрока: ${resP}, у компьютера: ${resC} `,
  //       );
  //     } else {
  //       resC -= p;
  //       resP += p;
  //       alert(
  //         `Вы выиграли. Остаток шариков у игрока: ${resP}, у компьютера: ${resC} `,
  //       );
  //     }
  //     if (resP <= 0 || resC <= 0) {
  //       alert('Игра окончена');
  //       return { resP, resC };
  //     }
  //   };
  // основная функция игры
  const game = () => {
    const result = {
      player: 5,
      computer: 5,
    };
    const level = prompt('Введите уровень игры: лёгкий, средний, сложный');

    // Здесь логика игры
    return function start() {
      const playerGame = () => {
        const playerNumber = +prompt(
          `Введите количество шариков от 1 до ${result.player}`,
        );
        if (playerNumber === 0) {
          const end = confirm('Хотите выйти?');
          alert('От нас так просто не уходят!!! Ты еще вернешься');
          return end;
        }
        const computerChoice = Math.round(Math.random());
        if (playerNumber % 2 === computerChoice) {
          result.player -= playerNumber;
          result.computer += playerNumber;
          alert(
            `Вы проиграли. Остаток шариков у игрока: ${result.player}, у компьютера: ${result.computer} `,
          );
        } else {
          result.computer -= playerNumber;
          result.player += playerNumber;
          alert(
            `Вы выиграли. Остаток шариков у игрока: ${result.player}, у компьютера: ${result.computer} `,
          );
        }
      };
      const computerGame = () => {
        const computerNumber = getRandomIntInclusive(1, result.computer);
        // console.log(computerNumber);
        const playerChoice = confirm('Число четное?');
        let choice = 0;
        playerChoice ? (choice = 0) : (choice = 1);
        console.log('player: ', playerChoice);

        if (computerNumber % 2 === choice) {
          result.computer -= computerNumber;
          result.player += computerNumber;
          alert(
            `Вы выиграли. Остаток шариков у игрока: ${result.player}, у компьютера: ${result.computer} `,
          );
        } else {
          result.computer += computerNumber;
          result.player -= computerNumber;
          alert(
            `Вы проиграли. Остаток шариков у игрока: ${result.player}, у компьютера: ${result.computer} `,
          );
        }
        // console.log(result);
      };

      //!light level
      if (
        level === '' ||
        level.toLowerCase() === 'лёгкий' ||
        level.toLowerCase() === 'легкий'
      ) {
        playerGame();
        if (result.player <= 0 || result.computer <= 0) {
          alert('Игра окончена');
          return result;
        }
      }
      //! middle level
      if (level.toLowerCase() === 'средний') {
        playerGame();
        if (result.player <= 0 || result.computer <= 0) {
          alert('Игра окончена');
          return result;
        }

        computerGame();
        if (result.player <= 0 || result.computer <= 0) {
          alert('Игра окончена');
          return result;
        }
      }
      //! hard level
      if (level.toLowerCase() === 'сложный') {
        let playerRsp = prompt(
          'Чтобы узнать кто первый ходит, сыграем в камень, ножницы, бумага. Выбирай',
        );
        const computerRspNumber = getRandomIntInclusive(0, 2);
        let computerRsp = '';
        if (playerRsp === null) {
          const end = confirm('Хотите выйти?');
          alert('От нас так просто не уходят!!! Ты еще вернешься');
          return end;
        }
        for (let i = 0; i < FIGURES_RUS.length; i++) {
          if (FIGURES_RUS[i].startsWith(playerRsp.toLowerCase())) {
            playerRsp = FIGURES_RUS[i];
          }
          if (i === computerRspNumber) {
            computerRsp = FIGURES_RUS[i];
          }
        }
        if (computerRsp === playerRsp) {
          alert('Ничья. Сыграем еще раз');
        } else if (
          (computerRsp === FIGURES_RUS[0] && playerRsp === FIGURES_RUS[2]) ||
          (computerRsp === FIGURES_RUS[2] && playerRsp === FIGURES_RUS[1]) ||
          (computerRsp === FIGURES_RUS[1] && playerRsp === FIGURES_RUS[0])
        ) {
          alert('Начинает игрок');
          playerGame();
          console.log(result);
          if (result.player <= 0 || result.computer <= 0) {
            const end = confirm('Игра окончена. Сыграем еще разок?');
            // console.log(end);
            if (end === true) {
              result.player = 5;
              result.computer = 5;
              start();
            }
            return;
          }
          computerGame();
          console.log(result);
          if (result.player <= 0 || result.computer <= 0) {
            const end = confirm('Игра окончена. Сыграем еще разок?');
            // console.log(end);
            if (end === true) {
              result.player = 5;
              result.computer = 5;
              start();
            }
            return;
          }
        } else {
          alert('Начинает компьютер');
          computerGame();
          //   console.log(result);
          if (result.player <= 0 || result.computer <= 0) {
            const end = confirm('Игра окончена. Сыграем еще разок?');
            // console.log(end);
            if (end === true) {
              result.player = 5;
              result.computer = 5;
              start();
            }
            return;
          }
          playerGame();
          //   console.log(result);
          if (result.player <= 0 || result.computer <= 0) {
            const end = confirm('Игра окончена. Сыграем еще разок?');
            // console.log(end);
            if (end === true) {
              result.player = 5;
              result.computer = 5;
              start();
            }
            return;
          }
        }
      }

      start();
    };
  };
  window.marbles = game;
})();
