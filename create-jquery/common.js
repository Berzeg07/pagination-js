function main() {
    // $('.current').toggleClass('class1')
    //     .on('click', clickHandler)
    //     .off('click', clickHandler);
    //
    // function clickHandler() {
    //     alert(1);
    // }

    const collection = $('.current');

    collection.on('click', function(){
        collection.html('<b>test</b>');
        collection.off('click', arguments.callee);
    })
}

main();
