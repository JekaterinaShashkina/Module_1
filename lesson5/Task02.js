// Вторая задача:
// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие
// Пример:  "привет Мир" => "Привет мир"

const strCapitalize = (str) => {
  const strLower = str.toLowerCase();
  return strLower[0].toUpperCase() + strLower.slice(1);
};

console.log(strCapitalize("hello World"));
