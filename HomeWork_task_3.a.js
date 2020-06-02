
/*
Сделайте модальное (появляющееся и исчезающее) окно
*/

// Использовал шаблон.

'use strict';

// 1. получить объект модального окна с классом .wrap
let modalWindow = document.querySelector(".wrap");
console.log(modalWindow);

// 2. получить тег span, используемый для закрытия окна
let textSpan = modalWindow.querySelector("span");
console.log(textSpan);

// 3. получить кнопку, используемую для показа модального окна
let btn = document.querySelector("button");
console.log(btn);

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
btn.addEventListener('click', function(event) {
	modalWindow.classList.remove("hidden");
	console.log(modalWindow);
});

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
textSpan.addEventListener('click', function(event) {
	modalWindow.classList.add("hidden");
	console.log(modalWindow);
});