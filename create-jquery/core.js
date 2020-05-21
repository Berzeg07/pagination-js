(function() {
    const $ = function(selector) {
        const elements = document.querySelectorAll(selector);
        const obj = {};

        obj.hiden = function() {
            for (const element of elements) {
                element.style.display = 'none';
            }
            return obj;
        }

        obj.show = function() {
            for (const element of elements) {
                element.style.display = 'block';
            }
            return obj;
        }

        obj.toggle = function() {
            for (const element of elements) {
                if (element.style.display === 'none') {
                    element.style.display = '';
                } else {
                    element.style.display = 'none';
                }
            }
            return obj;
        }

        obj.addClass = function(className) {
            for (const element of elements) {
                element.classList.add(className);
            }
            return obj;
        }

        obj.removeClass = function(className) {
            for (const element of elements) {
                element.classList.remove(className);
            }
            return obj;
        }

        obj.toggleClass = function(className) {
            for (const element of elements) {
                const classes = Array.from(element.classList);
                console.log(classes);

                if (classes.includes(className)) {
                    element.classList.remove(className);
                } else {
                    element.classList.add(className);
                }
            }
            return obj;
        }

        obj.on = function(eventName, handler) {
            for (const element of elements) {
                element.addEventListener(eventName, handler);
            }
            return obj;
        }

        obj.off = function(eventName, handler) {
            for (const element of elements) {
                element.removeEventListener(eventName, handler);
            }
            return obj;
        }

        obj.html = function(content) {
            for (const element of elements) {
                element.innerHTML = content;
            }
            return obj;
        }


        return obj;
    }
    window.$ = $;
}());
