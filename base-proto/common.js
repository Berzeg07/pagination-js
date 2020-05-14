let pageNum = 100,
    pagList = document.querySelector('.pagination');


startPug(pageNum);

//Начальная генерация страниц
function startPug(pageNum) {
    if (pageNum > 10) {
        startPugMore(pageNum);
    } else {
        startPugLess(pageNum);
    }
}

//Генерация начальной пагинации при меньше 10 страниц
function startPugLess(num) {
    for (let i = 1; i <= num; i++) {

        let myLi = document.createElement('li'),
            myLink = document.createElement('a');

        myLink.innerHTML = i;
        myLink.addEventListener('click', (event) => {
            event.preventDefault();
            changePagLess(i);
        });

        myLi.setAttribute('class', 'pagination__item');

        if (i == 1) {
            myLi.classList.add('current');
        } else {
            myLink.setAttribute('href', i);
        }

        myLi.appendChild(myLink);
        pagList.appendChild(myLi);

    }
}

//Изменение пагинации для меньше чем 10 страниц
function changePagLess(num) {
    let links = document.querySelectorAll('.pagination__item');


    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('current');
    }

    pagList.innerHTML = '';

    for (let i = 1; i <= pageNum; i++) {

        let myLi = document.createElement('li'),
            myLink = document.createElement('a');
        myLi.classList.add('pagination__item');
        myLink.innerHTML = i;
        myLink.setAttribute("href", i);
        myLink.addEventListener('click', (event) => {
            event.preventDefault();
            changePagLess(i);
        });
        myLi.appendChild(myLink);
        pagList.appendChild(myLi);

    }

    let elem = document.querySelector('[href="' + num + '"]');
    elem.parentElement.classList.add('current');
    elem.removeAttribute('href');
}

//Генерация начальной пагинации при больше 10 страниц
function startPugMore(num) {

    for (let i = 1; i <= num; i++) {

        let myLi = document.createElement('li'),
            myLink = document.createElement('a');

        if (i <= 7) {

            myLink.innerHTML = i;
            myLi.setAttribute('class', 'pagination__item');

            if (i == 1) {
                myLi.classList.add('current');
            } else {
                myLink.setAttribute('href', i);
                myLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    changePag(i, event);
                });
            }

            myLi.appendChild(myLink);
            pagList.appendChild(myLi);

        } else if (i == pageNum - 2) {

            myLi.setAttribute('class', 'pagination__item');
            myLink.innerHTML = '...';
            myLi.appendChild(myLink);
            pagList.appendChild(myLi);

        } else if ((i == pageNum - 1) || (i == pageNum)) {

            myLink.innerHTML = i;
            myLink.addEventListener('click', (event) => {
                event.preventDefault();
                changePag(i, event);
            });
            myLi.setAttribute('class', 'pagination__item');
            myLink.setAttribute('href', i);
            myLi.appendChild(myLink);
            pagList.appendChild(myLi);
        }
    }
}


//Изменение пагинации для больше чем 10 страниц
function changePag(num) {

    let links = document.querySelectorAll('.pagination__item');


    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('current');
    }

    //Конец 3
    if (num >= pageNum - 1) {
        pagList.innerHTML = '';


        for (let i = 1; i <= pageNum; i++) {

            let myLi = document.createElement('li'),
                myLink = document.createElement('a');
            myLi.classList.add('pagination__item');

            if (i <= 2) {
                myLink.innerHTML = i;
                myLink.setAttribute("href", i);
                myLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    changePag(i, event);
                });
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            } else if (i == pageNum - 3) {
                myLink.innerHTML = '...';
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            } else if (i >= pageNum - 2) {
                myLink.innerHTML = i;
                myLink.setAttribute("href", i);
                myLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    changePag(i, event);
                });
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            }

        }

        let elem = document.querySelector('[href="' + num + '"]');
        elem.parentElement.classList.add('current');
        elem.removeAttribute('href');
        return;
    }

    //Начало
    if (num <= 6) {
        pagList.innerHTML = '';

        for (let i = 1; i <= pageNum; i++) {

            let myLi = document.createElement('li'),
                myLink = document.createElement('a');
            myLi.classList.add('pagination__item');

            if (i <= 7) {
                myLink.innerHTML = i;
                myLink.setAttribute("href", i);
                myLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    changePag(i);
                });
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            } else if (i == 8) {
                myLink.innerHTML = '...';
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            } else if (i >= pageNum - 1) {
                myLink.innerHTML = i;
                myLink.setAttribute("href", i);
                myLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    changePag(i);
                });
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            }
        }

        let elem = document.querySelector('[href="' + num + '"]');
        elem.parentElement.classList.add('current');
        elem.removeAttribute('href');
        return;
    }

    //Конец 6
    if ((num >= (pageNum - 5)) && (num < (pageNum - 1))) {
        pagList.innerHTML = '';

        for (let i = 1; i <= pageNum; i++) {


            let myLi = document.createElement('li'),
                myLink = document.createElement('a');
            myLi.classList.add('pagination__item');

            if (i <= 2) {
                myLink.innerHTML = i;
                myLink.setAttribute("href", i);
                myLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    changePag(i);
                });
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            } else if (i == (pageNum - 7)) {
                myLink.innerHTML = '...';
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            } else if (i >= pageNum - 6) {
                myLink.innerHTML = i;
                myLink.setAttribute("href", i);
                myLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    changePag(i, event);
                });
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            }

        }

        let elem = document.querySelector('[href="' + num + '"]');
        elem.parentElement.classList.add('current');
        elem.removeAttribute('href');
        return;
    }

    //Середина
    if ((num > 6) && ((pageNum - num) > 4)) {

        pagList.innerHTML = '';

        for (let i = 1; i <= pageNum; i++) {

            let myLi = document.createElement('li'),
                myLink = document.createElement('a');
            myLi.classList.add('pagination__item');

            if (i <= 2) {
                myLink.innerHTML = i;
                myLink.setAttribute("href", i);
                myLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    changePag(i, event);
                });
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            } else if (i == 3 || i == (pageNum - 2)) {
                myLink.innerHTML = '...';
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            } else if (i >= pageNum - 2) {
                myLink.innerHTML = i;
                myLink.setAttribute("href", i);
                myLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    changePag(i, event);
                });
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            } else if (i == (num - 1) || i == (num - 2) || i == num || i == num + 1) {
                myLink.innerHTML = i;
                myLink.setAttribute("href", i);
                myLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    changePag(i, event);
                });
                myLi.appendChild(myLink);
                pagList.appendChild(myLi);
            }

        }
        let elem = document.querySelector('[href="' + num + '"]');
        elem.parentElement.classList.add('current');
        elem.removeAttribute('href');
        return;
    }


    let elem = document.querySelector('[href="' + num + '"]');
    elem.parentElement.classList.add('current');
    elem.removeAttribute('href');
}
