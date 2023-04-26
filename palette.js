// 1. Color Palete.Динамічно відрендери 100 блоків div з класом item задопомогою функції createPaletteItems()
// і помісти всі ці блоки в colorPalette.Використовуй getRandomColor для назначення рандомного кольору item.
// При кліку на палетку кольорів зафарбовуй body у вибраний колір.
// Викоритовуй шаблон акордеон меню з файлу palette.html

const colorPalette = document.querySelector('.color-palette');

function selectColor() {}

function createPaletteItems() {
  let markup = '';
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
