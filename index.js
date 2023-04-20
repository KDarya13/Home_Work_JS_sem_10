
/*
Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.


const url = "https://type.fit/api/quotes";

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }
  getData();*/

/*
Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию).
*/

import { dataColorInfo } from "./data.js";

const data = JSON.parse(dataColorInfo);
console.log(data);
const content = document.querySelector('.content');

data.forEach(({id, color, number, url}) => {
    
    const idColor = document.createElement('p');
    idColor.classList.add('color-id');
    idColor.textContent = `Цвет ${id}`;
    idColor.style.font = " italic 1.2em serif";

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = color;
    title.style.color = "coral";

    const subTitle = document.createElement('h4');
    subTitle.classList.add('color-number');
    subTitle.textContent = number;
    subTitle.style.color = "lightblue";

    const img = document.createElement('img');
    img.classList.add('color-img');
    img.src = url;

    content.appendChild(idColor);
    content.appendChild(title);
    content.appendChild(subTitle);
    content.appendChild(img);
});
