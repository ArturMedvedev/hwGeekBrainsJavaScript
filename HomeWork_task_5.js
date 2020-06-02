/*
Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему 
желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/

'use strict';

//Шаблон не использовал.

// функция создания поля 9 х 9.
function boardGen() {
	let board = "";
	let startColor;
	for (let i = 0; i < 9; i++) {
		// условие смены цвета клетки в начале каждой строки.
		if (i % 2 == 0) {
			startColor = "black";
		} else {
			startColor = "white";
		}
		board += "<tr>";
		// создаем клетки и классы для покраски.
		for (let j = 0; j < 9; j++) {
			if (startColor == "white") {
				board += `<td class = ${startColor} data-i="${i}" data-j="${j}"></td>`;
				startColor = "black";	
			} else {
				board += `<td class = ${startColor} data-i="${i}" data-j="${j}"></td>`;
				startColor = "white";
			}
			
		}
		board += "</tr>";
	}
	return `<table><tbody>${board}</tbody></table>`

}

let a = boardGen();

// вставляем поле в HTML документ.
document.body.insertAdjacentHTML('afterbegin', boardGen());

// определяем последний ряд, который не должен краситься, но должен нумероваться "A" - "H".
let wrongRow = document.querySelectorAll('td[data-i="8"');
console.log(wrongRow); // это для себя, чтобы понимать выборку

// определяем первый столбец, который не должен краситься, но должен нумероваться "8" - "1".
let wrongColumn = document.querySelectorAll('td[data-j="0"');
console.log(wrongColumn); // это для себя, чтобы понимать выборку

// перебираем NodeList и удаляем классы для покраски клеток.
wrongRow.forEach(function(el){
	el.classList.remove("black");
	el.classList.remove("white");
});

wrongColumn.forEach(function(el){
	el.classList.remove("black");
	el.classList.remove("white");
});

// создаем массивы для нумерования строк и столбцов
let rowIdx = ["A", "B", "C", "D", "E", "F", "G", "H"];
let columnIdx = [8, 7, 6, 5, 4, 3, 2, 1];

// перебираем NodeList по элементам и записываем нумерацию.
for (let y = 0; y < 8; y++) {
	wrongColumn[y].innerHTML = columnIdx[y];
};

for (let x = 0; x < 8; x++) {
	wrongRow[x+1].innerHTML = rowIdx[x];
};

