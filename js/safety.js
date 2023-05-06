$(function () {
    // --初始让第一个显示--
    var text = $(".text-segment")
    text.hide()
    text.eq(0).show()
    // for (var i = 0; i < 3; i++) {
    //     $("#buttons-item1-selector"+ (i + 1)).click(function() {
    //         // --其他全隐藏--
    //         console.log(i);
    //         text.hide()
    //         // --显示自己的--
    //         text.eq(i).show()
    //     })
    // }
    $("#buttons-item1-selector"+ 1).click(function() {
        // --其他全隐藏--
        text.hide()
        // --显示自己的--
        text.eq(0).show()
    })
    $("#buttons-item1-selector"+ 2).click(function() {
        // --其他全隐藏--
        text.hide()
        // --显示自己的--
        text.eq(1).show()
    })
    $("#buttons-item1-selector"+ 3).click(function() {
        // --其他全隐藏--
        text.hide()
        // --显示自己的--
        text.eq(2).show()
    })

    // --wow.js--
    new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true
    }).init()
}) 
