var users = [{
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
    },
    {
        name: 'name14',
        surname: 'surname14',
        age: 30
    },
    {
        name: 'name15',
        surname: 'surname15',
        age: 30
    },
    {
        name: 'name16',
        surname: 'surname16',
        age: 30
    },
    {
        name: 'name17',
        surname: 'surname17',
        age: 30
    },
    {
        name: 'name18',
        surname: 'surname18',
        age: 30
    },
    {
        name: 'name19',
        surname: 'surname19',
        age: 30
    },
    {
        name: 'name20',
        surname: 'surname20',
        age: 30
    },
    {
        name: 'name21',
        surname: 'surname21',
        age: 30
    },
    {
        name: 'name22',
        surname: 'surname22',
        age: 30
    },
    {
        name: 'name23',
        surname: 'surname23',
        age: 30
    },
    {
        name: 'name24',
        surname: 'surname24',
        age: 30
    },
    {
        name: 'name25',
        surname: 'surname25',
        age: 30
    },
    {
        name: 'name26',
        surname: 'surname26',
        age: 30
    },
    {
        name: 'name27',
        surname: 'surname27',
        age: 30
    },
];

var table = document.querySelector('#table');

// Кол-во выводимых блоков на странице *
var notesOnPage = 2;

// Получаем кол-во элементов для пагинации *
var countOfItems = Math.ceil(users.length / notesOnPage);
// countOfItems = 20;

var paginationWrap = document.querySelector('#pagination');
var items = [];

function createNav(
    countMax
) {
    items = [];
    // console.log('Элементы пагинации ', items);
    var count = countMax;
    paginationWrap.innerHTML = '';
    if (countOfItems <= 10) {
        for (var i = 1; i <= countOfItems; i++) {
            addLiEl(i, '#pagination', true);
        }
    } else {
        for (var i = 1; i <= countOfItems; i++) {
            if (i <= count) {
                addLiEl(i, '#pagination', true);
            }
            if (i == countOfItems - 2) {
                addLiEl('...', '#pagination', false);
            }
            if (i == countOfItems) {
                addLiEl(i, '#pagination', true);
            }
        }
    }
}

// Вывод первичной пагинации *
createNav(5);

// Вывод по первому элементу пагинации *
console.log('items[0]', items[0]);
showPage(items[0]);

paginationWrap.onclick = function(event) {
    var target = event.target;

    if (target.tagName != 'LI' || target.innerHTML == '...') return;
    var num = Number(target.innerHTML) - 1;

    console.log('num ', target);

    items = [];
    paginationWrap.innerHTML = '';

    if (countOfItems <= 10) {
        for (var i = 1; i <= countOfItems; i++) {
            addLiEl(i, '#pagination', true);
        }
    } else {
        // Начало *
        if (num < 3) {
            for (var i = 1; i <= countOfItems; i++) {
                if (i <= 5) {
                    addLiEl(i, '#pagination', true);

                }
                if (i == countOfItems - 2) {
                    addLiEl('...', '#pagination', false);

                }
                if (i == countOfItems) {
                    addLiEl(i, '#pagination', true);

                }
            }
        }
        // Середина *
        if (num >= 3 && num <= 6) {
            for (var i = 1; i <= countOfItems; i++) {
                if (i <= num + 3) {
                    addLiEl(i, '#pagination', true);
                }
                if (i == countOfItems - 2) {
                    addLiEl('...', '#pagination', false);
                }
                if (i == countOfItems) {
                    addLiEl(i, '#pagination', true);
                }
            }
        }

        if (num > 6 && num < countOfItems - 4) {

            for (var i = 1; i <= countOfItems; i++) {
                var li = document.createElement('li');
                li.innerHTML = i;
                items.push(li);
            }

            for (var i = 1; i <= countOfItems; i++) {
                if (i == 1) {
                    paginationWrap.appendChild(items[0]);
                }
                if (i == 2) {
                    var li = document.createElement('li');
                    li.innerHTML = '...';
                    paginationWrap.appendChild(li);
                    li.style.cursor = 'text';
                    li.style.border = '1px solid black';
                    li.style.color = 'black';
                }
                if (i == (num - 2) || i == (num - 1) || i == num || i == (num + 2) || i == (num + 1)) {
                    var index = items[i];
                    console.log('index ', i);
                    paginationWrap.appendChild(index);
                }
                if (i == countOfItems - 1) {
                    var li = document.createElement('li');
                    li.innerHTML = '...';
                    paginationWrap.appendChild(li);
                    li.style.cursor = 'text';
                    li.style.border = '1px solid black';
                    li.style.color = 'black';
                }
                if (i == countOfItems) {
                    var currentIndex = i - 1;
                    var index = items[currentIndex]
                    paginationWrap.appendChild(index);
                }
            }
        }
        if (num >= countOfItems - 4) {
            for (var i = 1; i <= countOfItems; i++) {
                var li = document.createElement('li');
                li.innerHTML = i;
                items.push(li);
            }

            for (var i = 1; i <= countOfItems; i++) {
                if (i == 1) {
                    paginationWrap.appendChild(items[0]);
                }
                if (i == 2) {
                    var li = document.createElement('li');
                    li.innerHTML = '...';
                    paginationWrap.appendChild(li);
                    li.style.cursor = 'text';
                    li.style.border = '1px solid black';
                    li.style.color = 'black';
                }
                if (i == (num - 2) || i == (num - 1) || i == num || i > +num) {
                    var currentIndex = i - 1;
                    var index = items[currentIndex]
                    paginationWrap.appendChild(index);
                }
            }
        }
    }

    // console.log('num ', items[num]);
    showPage(items[num]);
}

var next = document.getElementById('next');
var prev = document.getElementById('prev');

next.addEventListener('click', function() {
    navPage('next');
});

prev.addEventListener('click', function() {
    navPage('prev');
});

function navPage(btn) {
    var active = document.querySelector('#pagination li.active');
    if (btn == 'next') {
        var next = active.nextElementSibling;
    } else {
        var next = active.previousElementSibling;
    }
    if (next) {
        next.click();
    }
}

// Создание ячеек *
function createCell(text, tr) {
    var td = document.createElement('td');
    td.innerHTML = text;
    tr.appendChild(td);
}
// Формируем элементы li для пагинации *
function addLiEl(
    text,
    parent,
    isNum
) {
    var pagination = document.querySelector(parent);
    var li = document.createElement('li');
    li.innerHTML = text;
    pagination.appendChild(li);
    if (isNum) {
        items.push(li);
    } else {
        li.style.cursor = 'text';
        li.style.border = '1px solid black';
        li.style.color = 'black';
    }
}

// Вывод страниц *
function showPage(item) {
    var active = document.querySelector('#pagination li.active');
    if (active) {
        active.classList.remove('active');
    }
    active = item;
    item.classList.add('active');
    // Получаем цифру в пагинации *
    var pageNum = +item.innerHTML;

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
    var start = (pageNum - 1) * notesOnPage;
    var end = start + notesOnPage;

    // Достаем данные из массива *
    var notes = users.slice(start, end);
    console.log('notes', notes);

    table.innerHTML = '';
    // Формируем таблицу *
    for(var i = 0; i < notes.length; i++){
        var tr = document.createElement('tr');
        table.appendChild(tr);

        createCell(notes[i].name, tr);
        createCell(notes[i].surname, tr);
        createCell(notes[i].age, tr);
    }
    // for (var note of notes) {
    //     var tr = document.createElement('tr');
    //     table.appendChild(tr);
    //
    //     createCell(note.name, tr);
    //     createCell(note.surname, tr);
    //     createCell(note.age, tr);
    //
    // }
}

// (function (arr) {
//   arr.forEach(function (item) {
//     if (item.hasOwnProperty('append')) {
//       return;
//     }
//     Object.defineProperty(item, 'append', {
//       configurable: true,
//       enumerable: true,
//       writable: true,
//       value: function append() {
//         var argArr = Array.prototype.slice.call(arguments),
//           docFrag = document.createDocumentFragment();
//
//         argArr.forEach(function (argItem) {
//           var isNode = argItem instanceof Node;
//           docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
//         });
//
//         this.appendChild(docFrag);
//       }
//     });
//   });
// })([Element.prototype, Document.prototype, DocumentFragment.prototype]);
