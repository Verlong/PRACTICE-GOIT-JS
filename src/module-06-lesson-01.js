// // 1. Базові операції з DOM

// // //отримай body елемент і виведи його в консоль;
// // const body = document.head;
// // console.dir(body);

// // // отримай елемент id="title" і виведи його в консоль;
// // const title = document.getElementById('title');
// // console.log(title);

// // // отримай елемент class="list" і виведи його в консоль;
// // const list = document.querySelector('.list');
// // console.log(list);

// // // отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// // const dataTopic = document.querySelector("[data-topic]");
// // console.log(dataTopic);

// // // отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль та останній;
// // const dataTopicFirst = document.querySelector("[data-topic]");
// // console.log(dataTopicFirst);

// // const dataTopicLast = document.querySelector(".list").lastChild;
// // console.log(dataTopicLast);

// // // який елемент є сусідом для h1? Знайти і виведи його в консоль;
// // const title = document.querySelector('#title');
// // const list = title.nextElementSibling;
// // console.log(list);

// // // по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const allTitles = list.querySelectorAll('h3');
// console.log(list.querySelectorAll('h3'));

// // для кожного елмента h3 додай class="active", який змінить коліp заголовка на червоний колір
// allTitles.forEach(allTitle => {
//   console.log(allTitle.textContent);
//   allTitle.style.color = 'red';
// });

// // знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const navigationItem = list.querySelector("[data-topic = 'navigation']");

// // додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// navigationItem.style.backgroundColor = 'yellow';

// // у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const paragraph = navigationItem.querySelector('p');
// paragraph.textContent = 'Я змінив тут текст!';

// // створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';
// const element = document.querySelector(`[data-topic = ${currentTopic}]`);
// console.log(element);

// // додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// element.style.backgroundColor = 'blue';

// // знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// // видали елемент li в якому знаходиться заголовок, який має class="completed"
// classEl.parentNode.remove();

// // після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const titleHeading = document.querySelector('#title');
// const text = document.createElement('p');
// text.textContent = "Об'єктна модель документа (Document Object Model)";
// titleHeading.after(text);

// // додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const ulEl = document.querySelector('.list');
// const liElement = document.createElement('li');
// const titleEl = document.createElement('h3');
// const textEl = document.createElement('p');
// titleEl.textContent = 'Властивість innerHTML';
// textEl.textContent =
//   'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// liElement.append(titleEl);
// liElement.append(textEl);
// ulEl.append(liElement);
// // зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const markup = `<li data-topic="prop">
// <h3>Властивість innerHTML</h3>
// <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
// </li>`;
// ulEl.insertAdjacentHTML('beforeend', markup);
// // очисти список
