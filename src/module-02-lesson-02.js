// 7. Що буде у консолі?
// let bread = 'white';

// function makeSandwich() {
//   let meat = 'chicken';
//   let condiment = 'mayo';

//   function getCheese() {
//     let cheese = 'swiss';

//     function condiment() {
//       let condiment = 'tabasco';
//     }

//     condiment();
//     return cheese + condiment;
//   }

//   return bread + meat + getCheese();
// }

// const sandwich = makeSandwich();
// console.log(sandwich);
/////////////////////////////////////////////////////////////////
// Що буде у консолі?
// function task1() {
//   console.log("before task 2");
//   task2();
//   console.log("after task 2");
//   console.log("Completed task 1");
// }
// function task2() {
//   console.log("before task 3");
//   task3();
//   console.log("after task 3");
//   console.log("Completed task 2");
// }
// function task3() {
//   console.log("Completed task 3");
// }
// console.log("before task 1");
// task1();
// console.log("after task 1");
/////////////////////////////////////////////////////////////////////
//  Порахуй суму чисел, які були передані аргументом у вигляді набору значень
// Виклич функції для перевірки працездатності твоєї реалізації.

// function countSum(a, b, ...arrNumbers) {
//   // const arrNumbers = Array.from(arguments);
//   // const arguments = [...arguments];

//   console.log(arrNumbers);
//   let sum = 0;
//   for (const arrNumber of arrNumbers) {
//     sum += arrNumber;
//   }
//   return sum;
// }
// console.log(countSum(1, 2, 3, 4, 5, 6)); // 21
// console.log(countSum(32, 8, 5, 6, 9)); // 60
////////////////////////////////////////////////////////////////////////////
// Напиши функцію consoleMessage, яка виводитиме у консоль повідомлення,
// яке було передане при виклику функції ту кількість раз,
// яку також передали аргументом при виклику.
// Якщо ж щось не передано, то число по дефолту має дорівнювати 10,
// а повідомлення має бути "Default message".
// Виклич функції для перевірки працездатності твоєї реалізації.
// function consoleMessage(message = 'Default message', count = 10) {
//   for (let i = 0; i < count; i++) {
//     console.log(message);
//   }
// }

// console.log('До виклика consoleMessage'); // навіщо тут ця стрічка?
// console.log(consoleMessage('Hello world', 3));
// console.log(consoleMessage('Java Script'));
// console.log(consoleMessage(undefined, 5));
// console.log('Після виклика consoleMessage'); // навіщо тут ця стрічка?
/////////////////////////////////////////////////////////////////////////////////////
// 4. Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив
// logins. Логін, який додається повинен:

// Проходити перевірку на довжину від 4 до 16-ти символів включно бути унікальним, тобто бути відсутнім в масиві logins Розбий завдання на підзадачі за допомогою функцій.

// Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.

// Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність login в массиве allLogins, повертає true якщо такого логіна ще немає і false якщо логін вже використовується.

// Напиши функцію addLogin(allLogins, login) яка:

// Приймає новий логін і масив всіх логінів як параметри
// Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid:
// Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів.
// Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique:
// Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!'
// Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'
// 🔔 Принцип єдиної відповідальності функції - кожна функція робить щось одне. Це дозволяє перевикористати код і змінювати логіку роботи функції тільки в одному місці, не зачіпаючи роботу програми в цілому.

// Предикатні функції повертають тільки true або false. Такі функції прийнято називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.

// isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.
// isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
// addLogin додають чи не додають логін в масив. При цьому для перевірок умови додавання використовує результати викликів інших функцій - isLoginUnique і isLoginValid.
// const addLogin = function (login, newLogin) {
//   const array = [...logins];
//   // console.log(array);
//   for (const login of array) {
//     // if (login !== newLogin) {
//     //   array.push(newLogin);
//     //   // console.log(newLogin);
//     //   break;
//     // }

//     if (!array.includes(newLogin)) {
//       if (newLogin.length >= 4 && newLogin.length <= 16) {
//         array.push(newLogin);
//         return 'Логін успішно доданий!';
//       }
//       return 'Помилка! Логін повинен бути від 4 до 16 символів';
//     }

//     return 'Такий логін вже використовується!';
//   }
//   console.log(array);
// };
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// // Виклич функції для перевірки працездатності твоєї реалізації.
// console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишіть функції для роботи з колекцією todos(завдання/плани):
// showTodos() - повертає всю колекцію
// addTodo(todo) - додає завдання до кінця колекції
// removeTodo(todo) - видаляє завдання із колекції
// updateTodo(oldTodo, newTodo) – оновлює старий текст завдання на нове (повністю новий текст або ж була помилка в слові і тд)
// const todos = ['Прочитати конспект по модулю 2', 'Зробити ДЗ'];

// /**
//  * повертає всю колекцію
//  * @return array of todos{array}
//  */

// function showTodos() {
//   return todos;
// }

// function addTodo(toDo) {
//   todos.push(toDo);
//   return showTodos();
// }

// function removeTodo(toDoRemove) {
//   const indexRemove = todos.indexOf(toDoRemove);
//   todos.splice(indexRemove, 1);
//   return showTodos();
// }

// function updateTodo(oldTodo, newTodo) {
//   const index = todos.indexOf(oldTodo);
//   if (index > -1) {
//     todos[index] = newTodo;
//   }
//   return todos;
// }
// // Виклич функції для перевірки працездатності твоєї реалізації.
// console.log(addTodo('Подивитися Майстер Шеф'));
// console.log(addTodo('Купити молоко'));
// console.log(showTodos());

// console.log(
//   updateTodo('Подивитися Майстер Шеф', 'Подивитися додатковий матеріал по JS'),
// );
// console.log(showTodos());

// console.log(removeTodo('Купити молоко'));
// console.log(showTodos());
///////////////////////////////////////////////////////////////////////////////////////////
// Напишіть функцію createGroups, яка розбиває отриманий масив на групи з заданою довжиною і виводить бажану частину. (аналогія: пагінація на сторінці, на кожну сторінку показується певна кількість товарів, натискаючи на певну сторінку користувачеві показується обрана група товарів ).
// Вхідні дані: const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; const per_page = 2; const page = 1; Очікуваний резульат: [1, 2]

// Вхідні дані: const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; const per_page = 6; const page = 2; Очікуваний резульат: [7, 8, 9, 10]

// Вхідні дані: const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; const per_page = 4; const page = 3; Очікуваний резульат: [9, 10]

// function createGroups(data, per_page, page) {
//   //   const group = data.splice((page - 1) * per_page, per_page);
//   return [...data].splice((page - 1) * per_page, per_page);
//   console.log(group);
// }

// // Виклич функції для перевірки працездатності твоєї реалізації.
// console.log(createGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 1));
// console.log(createGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6, 2));
// console.log(createGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 3));
