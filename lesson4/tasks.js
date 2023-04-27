{
  // Вторая задача:
  const rain = Math.round(Math.random());

  if (rain === 1) {
    console.log("Пошёл дождь. Возьмите зонт!");
  } else {
    console.log("Дождя нет!");
  }
}

{
  // Третья задача:
  const math = +prompt("Введите кол-во баллов по математике: ");
  const rus = +prompt("Введите кол-во баллов по русскому языку: ");
  const inform = +prompt("Введите кол-во баллов по информатике: ");
  const res = math + rus + inform;

  if (res >= 265) {
    console.log("Поздравляю, вы поступили на бюджет!");
  }
}
{
  //Четвёртая задача:

  const askMoney = +prompt("Введите нужную сумму ");

  if (askMoney % 100) {
    console.log("Минимальные купюры для выдачи 100 р");
  } else {
    console.log("Подождите немного, банкомат считает ваши деньги");
  }
}
