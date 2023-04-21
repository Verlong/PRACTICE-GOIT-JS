// // 1. Напиши функції які за допомогою методів масиву, що перебирають (жодних for, splice і т. д.) виконують такі операції над масивом об'єктів користувачів із файлу cars.js.
// const cars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// // Example 1.1 - Метод map
// // Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = cars => {};

// console.table(getModels(cars));
// // Example 1.2 - Метод map
// // Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// function makeCarsWithDiscount(discount) {
//   const result = cars.map(car => {
//     const copyCar = { ...car };
//     copyCar.price = copyCar.price * (1 - discount / 100);
//     return copyCar;
//   });
//   return result;
// }

// console.log(makeCarsWithDiscount());

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// //////////////////////////////////////////////////////////////////////////////
// // Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// function filterByPrice(threshold) {
//   return cars.filter(car => car.price < threshold);
// }

// console.table(filterByPrice(30000));

// // Example 1.4 - Метод filter
// // Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// // const getCarsWithDiscount = cars => {};

// // console.table(getCarsWithDiscount(cars));

// function getCarsWithDiscount() {
//   return cars.filter(car => car.onSale);
// }
// console.table(getCarsWithDiscount());
// // const filterByPrice = (cars, threshold) => {};

// // console.table(filterByPrice(cars, 30000));
// // console.table(filterByPrice(cars, 25000));

// // Example 1.5 - Метод filter
// // Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.
// // function getCarsWithType(type) {
// //   return cars.filter(car =>!type || car.type === type);
// // }
// // console.table(getCarsWithType('sedan'));

// // Example 1.7 - Метод sort
// // Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.
// // function sortByAscendingAmount() {
// //   return [...cars].sort((a, b) => {
// //     return a.amount - b.amount;
// //   });
// // }

// // Example 1.8 - Метод sort
// // Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// // Example 1.9 - Метод sort
// // Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// // Example 1.10 - Метод reduce
// // Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// // const getTotalAmount = cars => {};

// // console.log(getTotalAmount(cars));
// // Example 1.11 - Ланцюжки методів
// // Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// // const getModelsOnSale = cars => {};

// // console.table(getModelsOnSale(cars));
// // Example 1.12 - Ланцюжки методів
// // Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// 2. Виконай комплексне завдання на тему інтернет замовлення. До кожної функції прописаний guideline як її виконати. Використовуй файл order.js.
// const order = {
//   items: [
//     {
//       id: 248,
//       type: 'shoes',
//       name: 'Puma RS-X',
//       quantity: '3',
//       originalPrice: '120.00',
//     },
//     {
//       id: 220,
//       type: 'shoes',
//       name: 'The Nike Monarch',
//       quantity: '1',
//       originalPrice: '87.50',
//       salePrice: '51.99',
//     },
//     {
//       id: 231,
//       type: 'shoes',
//       name: 'Nike Air Max Plus',
//       quantity: '4',
//       originalPrice: '187.50',
//       salePrice: '151.99',
//     },
//     {
//       id: 389,
//       type: 'clothing',
//       name: 'Puma T-shirt',
//       quantity: '1',
//       originalPrice: '15.99',
//     },
//     {
//       id: 389,
//       type: 'accessories',
//       name: 'Watches TISSOT',
//       quantity: '5',
//       originalPrice: '99.50',
//       salePrice: '89.99',
//     },
//   ],
//   shipping: {
//     id: 'shipping1',
//     name: 'US Delivery',
//     originalPrice: '11.00',
//   },
// };

// 2. Виконай комплексне завдання на тему інтернет замовлення. До кожної функції прописаний guideline як її виконати. Використовуй файл order.js.
// 2.1.

/**
 * Calculate the cost of products by category type of product
 * @param {Array} items - items of order
 * @param {String} productType  - product category
 * @returns Total price by product category
 */
// function calculateProductsAmoutByType(type) {
//   return order.items.reduce((total, order) => {
//     return order.type === type ? (total = +order.quantity) : total;
//   }, 0);
// }

// console.log(calculateProductsAmoutByType('shoes'));

// 2.2.
// function calculateTotalOrderPrice() {
//   return order.items.reduce((acc, elem, index, array) => {
//     total += elem.quantity * elem.originalPrice;
//     return total;
//   }, 0);
// }
// console.log(calculateTotalOrderPrice()); // 510.49

// 2.3.
/**
 * Calculate the final cost of the order after all discounts have been applied.
 * If the order amount is more than $100, free shipping applies.
 * If the total number of products is greater than or equal to 20, a 13% discount
  is applied to the order.
 * Discount and free shipping can be combined together.
 * @param {Array} items - items of order
 * @param {Object} shipping - shipping method
 * @returns Total cost
 */
// console.log(calculateTotalOrderPrice());
// function calculateTotalOrderPriceAfterDiscout() {
//   return order.items.reduce((total, el) => {
//     const price = el.salePrice || el.originalPrice;
//     total += el.quantity * price;
//     return total;
//   }, 0);
// }
// const result = calculateTotalOrderPriceAfterDiscout();
// console.log(result);

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newEven = [];

//   numbers.forEach(elem => {
//     if (elem % 2 === 0) {
//       newEven.push(elem + value);
//     } else {
//       newEven.push(elem);
//     }
//   });
// }
// Change code above this line

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log('vyzov fnB', number);
// };

// fnA('some text', fnB);

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
// static checkPrice (price) {
//   if (price > #MAX_PRICE) {
//     console.log("Error! Price exceeds the maximum")
//   }
//   console.log( "Success! Price is within acceptable limits")
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
