// Модуль 2. Заняття 3. Масиви
// 1. Виконай базові операції над масивом. Після кожної дії робити console.log щоб слідкувати як змінюється масив.
// Створіть масив products1 з елементами «apple», «orange» і «melon».
// Додайте «pear» до кінця.
// Виведіть у консоль довжина масиву
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Видаліть останній елемент та виведіть його в консоль.
// Вставте «cherry» та «lemon» на початок масиву.
// Замініть «lemon» на «grapes»
// Видаліть «orange» з масиву products1
// Об'єднайте масив products1 з масивом products2 = ["melon", "watermelon", "pineapple"];
// Видаліть дублікати з новоствореного масива (products3)
// Обріж новостворений масив без дублікатів (products3NoDubs) від першого до третього елемента
// Створіть новий масив products4 = ["grapes", "pineapple", "cherry"] і зробіть його копію у змінну products4Copy
// Чи рівні між собою products4 і products4Copy? Чому? Якщо додати новий елемент у products4 чи додасться він у products4Copy?

// const fruits = ['apple', 'orange', 'melon'];
// console.log(fruits);
// fruits.push('pear');
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.unshift('cherry', 'lemon'));
// console.log(fruits);
// const indexLemon = fruits.indexOf('lemon');
// console.log(fruits.splice(indexLemon, 1, 'grapes'));
// console.log(fruits);
// const indexOrange = fruits.indexOf('orange');
// console.log(fruits.splice(indexOrange, 1));
// console.log(fruits);
// const fruits2 = ['melon', 'watermelon', 'pineapple'];
// console.log(fruits);
// const fruits3 = fruits.concat(fruits2);
// console.log(new Set(fruits3));
// // console.log(Array.from(new Set(fruits3)));
// console.log([...new set(fruits3)]);
// const fruits4 = ['grapes', 'pineapple', 'cherry'];
// // const fruits4Copy = fruits4;
// // console.log('fruits4', fruits4);
// // console.log('fruits4Copy', fruits4Copy);

// // console.log(fruits4Copy.push("oops"));
// // console.log('fruits4', fruits4);
// // console.log('fruits4Copy', fruits4Copy);

// // const fruits4Copy = [].concat(fruits4);
// // console.log(fruits4Copy.push("oops"));8
// // console.log('fruits4', fruits4);
// // console.log('fruits4Copy', fruits4Copy);

// console.log(Array.from(fruits4));
////////////////////////////////////////////////////////////////////////
// 2. Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   console.log(namesArr);
//   const phonesArr = phones.split(',');
//   console.log(phonesArr);
//   for (let index = 0; index < namesArr.length; index++) {
//     console.log(`${namesArr[index]} ${phonesArr[index]}`);
//   }
// }

// console.log(
//   printContactsInfo(
//     'Jacob,William,Solomon,Artemis',
//     '89001234567,89001112233,890055566377,890055566300',
//   ),
// );
///////////////////////////////////////////////////////////////////////////////
// 3. Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і пробіли) і повертає найдовше слово в цьому рядку.
// function findLongestWord(string) {
//   const words = string.split(' ');
//   let theLongestWord = words[0];
//   for (const word of words) {
//     if (word.length > theLongestWord.length) {
//       theLongestWord = word;
//     }
//   }

//   return theLongestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'
