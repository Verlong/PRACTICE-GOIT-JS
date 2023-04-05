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
