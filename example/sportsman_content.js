function createRequestObject() {
    if (typeof XMLHttpRequest === 'undefined') {
        XMLHttpRequest = function() {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}

            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}

            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}

            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}

            throw new Error("This browser does not support XMLHttpRequest.");
        };
    }

    return new XMLHttpRequest();
}

function getFilter() {
    var request = new XMLHttpRequest();
    request.open('GET', 'api/belts/', true);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var beltsArr = JSON.parse(request.responseText);
            for (var i = 0; i < beltsArr.length; i++) {
                var elements = '<li class="filter-btn ' + beltsArr[i].classColor + '" beltId="' + beltsArr[i].id + '">' + beltsArr[i].name + '</li>';
                $('.belt-filter').append(elements);
            }
            // console.log(beltsArr);
        }
    }
    request.send();
}

getFilter();

$('#filter_search').submit(function(e) {
    e.preventDefault();
    var searchVal = $(this).find('input[name="search"]').val();
    // console.log(searchVal);
    getUsers(searchVal, false, true);
});

// $('#search-field').change(function() {
//     // alert(1);
//     var inpVal = $(this).val();
//     console.log(inpVal);
// });

var searchInput = document.getElementById('search-field');
searchInput.oninput = function() {
    var inpValue = searchInput.value;
    getUsers(inpValue, false, true);
    // result.innerHTML = input.value;
};

var globalBeltId = '0';

function getUserByFilter() {
    $('.belt-filter').on('click', 'li', function() {
        var getBeltId = $(this).attr('beltid');
        globalBeltId = getBeltId;
        getUsers(getBeltId, true, false);
        // console.log(globalBeltId);
    });
}

getUserByFilter();

function getUsers(filterData, isFilter, isSearch) {
    $('.search-res').html('');
    var result = [];

    if (filterData != undefined) {
        var outputFilter = filterData.toLowerCase().trim();
    }

    var request = new XMLHttpRequest();
    request.open('GET', 'api/athletes/', true);

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {

            var userArr = JSON.parse(request.responseText);
            var block = $('.tab_wrapper');
            var sportman;

            for (var i = 0; i < userArr.length; i++) {

                var userName = userArr[i].name,
                    userSurname = userArr[i].surname,
                    userFoto = userArr[i].foto,
                    userCity = userArr[i].city,
                    userBeltName = userArr[i].belt.name,
                    userBeltColor = userArr[i].belt.color,
                    userAcademy = userArr[i].academy;

                var infoArr = [];
                infoArr.push(userName.toLowerCase());
                infoArr.push(userSurname.toLowerCase());
                infoArr.push(userAcademy.toLowerCase());

                var textColor;

                if (userBeltName == 'Белый') {
                    textColor = 'black';
                } else {
                    textColor = 'white';
                }

                sportman = '<div class="sportsman">\
                    <div class="img">\
                        <a href="#">' +
                    '<img src="web/img/' + userFoto + '" alt="">' +
                    '</a>\
                    </div>\
                    <div class="text">\
                        <h3><a href="#">' + userName + ' ' + userSurname + '</a></h3>\
                        <div class="location">\
                            <div class="img">\
                                <img src="img/rus_16.png" alt="Россия">\
                            </div>\
                            <p>' + userCity + '</p>\
                            <div style="background:' + userBeltColor + '; color:' + textColor + '; ">' + userBeltName + '</div>\
                        </div>\
                    </div>\
                </div>';

                if (isFilter) {
                    if (outputFilter != undefined && outputFilter != 0) {
                        if (outputFilter == userArr[i].beltId) {
                            result.push(sportman);
                        }
                    } else {
                        result.push(sportman);
                    }
                } else if (isSearch && outputFilter != '') {

                    for (var j = 0; j < infoArr.length; j++) {
                        var str = infoArr[j];
                        var checkStr = str.indexOf(outputFilter);
                        // console.log('Подстрока ' + checkStr);
                        if (checkStr != -1) {
                            if (globalBeltId != 0) {
                                if (globalBeltId == userArr[i].beltId) {
                                    result.push(sportman);
                                }
                            } else {
                                result.push(sportman);
                            }
                        }
                    }

                    if (result.length == 0) {
                        var searchEmpty = '<p class="search-res" style="color:white; font-size:22px; padding: 20px 0px;">Совпадений не найдено</p>';
                        $('.search-res').html(searchEmpty);
                    } else {
                        $('.search-res').html('');
                    }
                } else {
                    result.push(sportman);
                }
            }
            mainPagination(result);
        }
    }
    request.send();
}

function mainPagination(elementsArr) {
    $(function() {
        (function(name) {
            var container = $('#pagination-' + name);

            var options = {
                dataSource: elementsArr,
                pageSize: 20,
                showPageNumbers: true,
                callback: function(response, pagination) {
                    // window.console && console.log(response, pagination);

                    var dataHtml = '<div class="tab_wrapper active">';
                    $.each(response, function(index, item) {
                        dataHtml += item;
                    });
                    dataHtml += '</div>';
                    container.prev().html(dataHtml);
                }
            };

            //$.pagination(container, options);

            // container.addHook('beforeInit', function() {
            //     window.console && console.log('beforeInit...');
            // });
            container.pagination(options);

            // container.addHook('beforePageOnClick', function() {
            //     window.console && console.log('beforePageOnClick...');
            //     //return false
            // });
        })('demo1');
    });
}

getUsers();
