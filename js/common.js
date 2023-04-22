$(function () {
    function setnav() {
        // 导航栏
        if (window.innerWidth < 981) {
            // $(".diySettings").hide()
            $(".diySettings").css({
                "float": "left",
                "width": "20px",
                "margin-top": "10px",
            })
            console.log($(".dropdown-toggle"))
            // $("nav.navbar.bootsnav ul.nav li a").css({
            //     "color": "#000!important"
            // })
        }
        else { 
            $(".diySettings").css({
                "float": "right",
                "width": "720px",
                "margin-right": "-15px",
                "margin-top": "0"
            })
            // $(".dropdown-toggle").css({
            //     "color": "#fff!important"
            // })
            // $(".diySettings").show()
        } 
        // logo
        if (window.innerWidth > 981) { 
            $(".logo").css({
                "float": "left",
                "margin-left": "50px"
            })
        } 
        if (window.innerWidth < 981) {
            $(".logo").css({
                "float": "none",
                "margin": "0 auto"
            })
        }
    }
    // 初始执行一次
    setnav()
    // 触发执行
    $(window).resize(function () {
        setnav()
    })
})



// jQuery(function() {
//     jQuery('#loading-one').empty().append('').parent().fadeOut('slow');
//     jQuery('#loading').click(function() {
//         jQuery('#loading').fadeOut('slow');
//     });
// });

$(window).on('load',function handlePreloader() {
    if ($('#loading').length) {
        $('#loading').delay(200).fadeOut(500);
    }
});