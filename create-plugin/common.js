// Всего 4 параметра: Контейнер страниц, контейнер для пагинации, кол-во элементов на странице, массив элементов

// (function($) {
//     $.fn.pagenavjs = function(type) {
//
//
//
//     };
// })(jQuery);

var users = ['<div>1</div>', '<div>2</div>', '<div>3</div>', '<div>4</div>', '<div>5</div>', '<div>6</div>', '<div>7</div>', '<div>8</div>', '<div>9</div>', '<div>10</div>', '<div>11</div>', '<div>12</div>', '<div>13</div>', '<div>14</div>', '<div>15</div>', '<div>16</div>', '<div>17</div>', '<div>18</div>', '<div>19</div>', '<div>20</div>'];

pagenavjs({
    pageContainer: '#content',
    navContainer: '#pagination',
    countPageEl: 1,
    elementsArr: users
});

function pagenavjs(paramsObj) {
    // console.log(pageContainer);
    var _pageContainer = $(paramsObj.pageContainer);
    var _navContainerWrap = $(paramsObj.navContainer);
    var _usersArr = paramsObj.elementsArr;

    $(_navContainerWrap).addClass('pagenavjs-navigate-wrap');

    $(_navContainerWrap).html('<ul class="pagenavjs-navigate"></ul>');

    $(_navContainerWrap).prepend('<button class="pagenavjs-button pagenavjs-prev"></button>');
    $(_navContainerWrap).append('<button class="pagenavjs-button pagenavjs-next"></button>');

    var _navContainer = $('.pagenavjs-navigate');

    // Кол-во выводимых блоков на странице *
    var notesOnPage = paramsObj.countPageEl;

    // Получаем кол-во элементов для пагинации *
    var countOfItems = Math.ceil(_usersArr.length / notesOnPage);

    var items = [];

    function createNav(countMax) {
        items = [];
        var count = countMax;
        $(_navContainer).html('');
        if (countOfItems <= 10) {
            for (var i = 1; i <= countOfItems; i++) {
                addLiEl(i, _navContainer, true);
            }
        } else {
            for (var i = 1; i <= countOfItems; i++) {
                if (i <= count) {
                    addLiEl(i, _navContainer, true);
                }
                if (i == countOfItems - 2) {
                    addLiEl('...', _navContainer, false);
                }
                if (i == countOfItems) {
                    addLiEl(i, _navContainer, true);
                }
            }
        }
    }

    // Вывод первичной пагинации *
    createNav(5);

    function pageNavEllipse() {
        $(_navContainer).append('<li class="pagenavjs-ellipsis">...</li>')
    }

    $(_navContainer).on('click', 'li', function(event) {
        var target = event.target;

        if (target.tagName != 'LI' || target.innerHTML == '...') return;
        var num = Number(target.innerHTML) - 1;

        items = [];
        $(_navContainer).html('');

        if (countOfItems <= 10) {
            for (var i = 1; i <= countOfItems; i++) {
                addLiEl(i, _navContainer, true);
            }
        } else {
            if (num < 3) {
                for (var i = 1; i <= countOfItems; i++) {
                    if (i <= 5 || i == countOfItems) {
                        addLiEl(i, _navContainer, true);
                    }
                    if (i == countOfItems - 2) {
                        addLiEl('...', _navContainer, false);
                    }
                }
            }
            if (num >= 3 && num <= 6) {
                for (var i = 1; i <= countOfItems; i++) {
                    if (i <= num + 3 || i == countOfItems) {
                        addLiEl(i, _navContainer, true);
                    }
                    if (i == countOfItems - 2) {
                        addLiEl('...', _navContainer, false);
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
                        $(_navContainer).append(items[0]);
                    }
                    if (i == 2) {
                        pageNavEllipse();
                    }
                    if (i == (num - 2) || i == (num - 1) || i == num || i == (num + 2) || i == (num + 1)) {
                        var index = items[i];
                        $(_navContainer).append(index);
                    }
                    if (i == countOfItems - 1) {
                        pageNavEllipse();
                    }
                    if (i == countOfItems) {
                        var currentIndex = i - 1;
                        var index = items[currentIndex]
                        $(_navContainer).append(index);
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
                        $(_navContainer).append(items[0]);
                    }
                    if (i == 2) {
                        pageNavEllipse();
                    }
                    if (i == (num - 2) || i == (num - 1) || i == num || i > +num) {
                        var currentIndex = i - 1;
                        var index = items[currentIndex]
                        $(_navContainer).append(index);
                    }
                }
            }
        }

        showPage(items[num]);
    });

    $('.pagenavjs-button').click(function() {
        if ($(this).hasClass('pagenavjs-next')) {
            navPage('next');
        } else if ($(this).hasClass('pagenavjs-prev')) {
            navPage('prev');
        }
    });

    function navPage(btn) {
        var active = $('.pagenavjs-navigate li.active');
        if (btn == 'next') {
            var next = $(active).next();
        } else {
            var next = $(active).prev();
        }
        if (next) {
            next.click();
        }
    }

    // Формируем элементы li для пагинации *
    function addLiEl(text, parent, isNum) {
        var pagination = $(parent);
        var li = document.createElement('li');
        li.innerHTML = text;
        $(pagination).append(li);

        if (isNum) {
            $(pagination).append(li);
            li.classList.add('pagenavjs-page');
            items.push(li);
        } else {
            li.classList.add('pagenavjs-ellipsis');
        }
    }

    showPage(items[0]);

    // Вывод страниц *
    function showPage(item) {
        var active = document.querySelector('.pagenavjs-page.active');

        if (active) {
            active.classList.remove('active');
        }
        active = item;
        item.classList.add('active');
        // Получаем цифру в пагинации *
        var pageNum = +item.innerHTML;
        // Формула расчета для структуры вывода *
        var start = (pageNum - 1) * notesOnPage;
        var end = start + notesOnPage;
        // Достаем данные из массива *
        var notes = _usersArr.slice(start, end);
        $(_pageContainer).html('');
        var elements = notes.join('');
        $(_pageContainer).html(elements);
    }
}
