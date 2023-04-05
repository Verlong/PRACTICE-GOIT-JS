// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.
// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// function timeConvertor(number) {
//   // console.log(number);
//   const hours = Math.floor(number / 60);
//   const doubleDigitHours = String(hours).padStart(2, '0');
//   //   console.log(doubleDigitHours);
//   const minutes = number % 60;
//   const doubleDigitMinutes = String(minutes).padStart(2, '0');
//   //   console.log(doubleDigitMinutes);

//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }
// console.log(timeConvertor('70'));
// console.log(timeConvertor('450'));
// console.log(timeConvertor('1441'));
////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calculateBMI(weight, height) {
//   console.log(weight, height);
//   const BMI = Number.parseFloat(weight) / Number.parseFloat(height) ** 2;
//   return BMI.toFixed(1);
// }

// console.log(calculateBMI('88,3', '1.75')); // 28.7

//////////////////////////////////////////////////////////////////////////////////////////

// 3. Перше століття охоплює період з 1-го по 100-й рік включно, друге - з 101-го по 200-й рік включно і т.д. За заданим роком повернути століття, в якому він знаходиться.

// function centuryFromYear(year) {
//   let century = year / 100;
//   //   console.log(century);
//   if (year % 100 > 0) {
//     century++;
//   }
//   return Math.floor(century);
// }
// console.log(centuryFromYear(1705)); // 18
// console.log(centuryFromYear(1900)); // 19
// console.log(centuryFromYear(1601)); // 17
// console.log(centuryFromYear(2000)); // 20
/////////////////////////////////////////////////////////////////////////////////////

// Блок 2 - Робота з рядками, методи рядків
// 1. Перевірь чи param є рядком. Результатом виконання функції має бути true або false

// function isString(param) {
//   let isString = typeof param;
//   if (isString === `string`) {
//     return true;
//   } else {
//     return false;
//   }

//   isString = isString === `string` ? true : false;
//   return typeof param === `string`;
// }

// console.log(isString('hello world'));
// console.log(isString('undefined'));
// console.log(isString([1, 2, 4, 0]));
// console.log(isString({ course: 'GoIT' }));
// console.log(isString(+'5'));

/////////////////////////////////////////////////////////////////////////////////////////

// 2. Напишіть функцію для перетворення імені в ініціали. Ви отримаєтеім'я з прізвищем розділені пробілом. В результаті це має виглядати так:
// `Sam Harris => S.H`
// `Patrick Feeney => P.F`

// function abbrevName(name) {
//   console.log(name.split(' '));
//   const fullName = name.split(' ');
//   const firstName = fullName[0];
//   const lastName = fullName[1];
//   console.log(firstName[0]);
//   console.log(lastName[0]);
//   return `${firstName[0]}.${lastName[0]}.`;
// }

// console.log(abbrevName('Sam Harris'));
// console.log(abbrevName('Patrick Feeney'));
////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Напиши функцію protectEmail, щоб захистити свій емейл від неавторизованого користувача. Половина емейла (до @) повинна замінитися на три крапки.
// Input: robin_singh@example.com Expected result: robin...@example.com

// function protectEmail(email) {
//   const splitEmail = email.split('@');
//   const emailStart = splitEmail[0];
//   const emailLength = emailStart.length / 2;
//   const visibleEmail = emailStart.slice(0, emailLength);
//   console.log(visibleEmail);
//   return `${visibleEmail}...@${splitEmail[1]}`;
// }

// console.log(protectEmail('robin_singh@gmail.com'));
// console.log(protectEmail('jimmyMc@gmail.com'));
// console.log(protectEmail('spr@yahoo.com'));
////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Створіть функцію notBad, яка приймає один аргумент, рядок. Він повинен знайти першу появу підрядка «not» і «bad». Якщо «bad» слідує за «not», тоді він має замінити весь підрядок «not»...«bad» на good та повернути результат. Якщо він не знаходить «not» і «bad» у правильній послідовності (або взагалі), просто повертає вихідне речення.
// function notBad(sentence) {}

// console.log(notBad('This dinner is not that bad!'));
// console.log(notBad('This movie is not so bad!'));
// console.log(notBad('This dinner is bad!'));

//////////////////////////////////////////////////////////////////////////////////////////////

// 1. Напиши функцію, яка просить користувача ввести 2 числа і додає їх, результат вивести в алертом.
// function calculateSum() {
//   const num1 = prompt('input first number');
//   const num2 = prompt('input second number');
//   alert(Number(num1) + Number(num2));
// }
// calculateSum();

/////////////////////////////////////////////////////////////////////////////////////////////
