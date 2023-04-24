// Розроби функціонал для вивчення нових англійський слів.
//  У тебе є масив об'єктів translations,
//  де кожен об'єкт це слово(оригінал та переклад).
//  При наведенні на картку зі словом, користувач повинен побачити переклад слова.
//  Для цього використовуй функцію getTranslation(word), яка прийматиме оригінал слова,
//  яке потрібно перевести, функція повинна повертати переклад даного слова.
//  При наведенні додавай на елемент з класом word ще один клас active, інакше видаляй цей клас.

const translations = [
  {
    original: 'hello',
    translation: 'привіт',
  },
  {
    original: 'flower',
    translation: 'квітка',
  },
  {
    original: 'apple',
    translation: 'яблуко',
  },
];

const allCard = document.querySelectorAll('li');
console.log(allCard);
allCard.forEach(card => card.addEventListener('mouseover', getTranslation));
allCard.forEach(card => card.addEventListener('mouseleave', getOriginal));

function getTranslation(e) {
  const selectedWord = e.target;
  const translationSelectedWord = translations.find(
    translation => translation.original === selectedWord.textContent,
  ).translation;

  selectedWord.textContent = translationSelectedWord;
  selectedWord.classList.add('active');
}

function getOriginal(e) {
  const selectedWord = e.target;
  const translationSelectedWord = translations.find(
    translation => translation.translation === selectedWord.textContent,
  ).original;

  selectedWord.textContent = translationSelectedWord;
  selectedWord.classList.remove('active');
}
