let users = [{
        name: 'name1',
        surname: 'surname1',
        age: 30
    },
    {
        name: 'name2',
        surname: 'surname2',
        age: 30
    },
    {
        name: 'name3',
        surname: 'surname3',
        age: 30
    },
    {
        name: 'name4',
        surname: 'surname4',
        age: 30
    },
    {
        name: 'name5',
        surname: 'surname5',
        age: 30
    },
    {
        name: 'name6',
        surname: 'surname6',
        age: 30
    },
    {
        name: 'name7',
        surname: 'surname7',
        age: 30
    },
    {
        name: 'name8',
        surname: 'surname8',
        age: 30
    },
    {
        name: 'name9',
        surname: 'surname9',
        age: 30
    },
    {
        name: 'name10',
        surname: 'surname10',
        age: 30
    },
    {
        name: 'name11',
        surname: 'surname11',
        age: 30
    },
    {
        name: 'name12',
        surname: 'surname12',
        age: 30
    },
    {
        name: 'name13',
        surname: 'surname13',
        age: 30
    }
];



let table = document.querySelector('#table');
let pagination = document.querySelector('#pagination');
// let items = document.querySelectorAll('#pagination li');

// Кол-во выводимых блоков на странице *
let notesOnPage = 2;

// Получаем кол-во элементов для пагинации *
let countOfItems = Math.ceil(users.length / notesOnPage);

// Вывод пагинации *
let items = [];
for (var i = 1; i <= countOfItems; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    pagination.appendChild(li);
    items.push(li);
}

// Вывод по первому элементу пагинации *
showPage(items[0]);

// Обработка клика по элементам пагинации *

for (let item of items) {
    item.addEventListener('click', function() {
        showPage(this);
    });
}

var next = document.getElementById('next');
var prev = document.getElementById('prev');

next.addEventListener('click', function() {
    navPage({
        btn: 'next'
    })
});

prev.addEventListener('click', function() {
    navPage({
        btn: 'prev'
    })
});

function navPage({
    btn
}) {
    let active = document.querySelector('#pagination li.active');
    if (btn == 'next') {
        var next = active.nextElementSibling;
    }else{
        var next = active.previousElementSibling;
    }
    if (next) {
        next.click();
    }
}

// Создание ячеек *
function createCell(text, tr) {
    let td = document.createElement('td');
    td.innerHTML = text;
    tr.appendChild(td);
}

// Вывод страниц *
function showPage(item) {
    let active = document.querySelector('#pagination li.active');
    if (active) {
        active.classList.remove('active');
    }

    if (active) {
        active.classList.remove('active');
    }
    active = item;
    item.classList.add('active');
    // Получаем цифру в пагинации *
    let pageNum = +item.innerHTML;

    /**
     * Структура вывода *
     * 1 - 0 - 3
     * 2 - 3 - 6
     * 3 - 6 - 9
     * 4 - 9 - 12
     * 5 - 12 ...
     * 6 - 15 ...
     * 7 - 18 ...
     */

    // Формула расчета для структуры вывода *
    let start = (pageNum - 1) * notesOnPage;
    let end = start + notesOnPage;

    // Достаем данные из массива *
    let notes = users.slice(start, end);
    console.log(notes);

    table.innerHTML = '';
    // Формируем таблицу *
    for (let note of notes) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        createCell(note.name, tr);
        createCell(note.surname, tr);
        createCell(note.age, tr);

    }
}
