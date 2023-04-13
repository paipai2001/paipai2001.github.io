$(function () {
    function setIndexSize() {
        $(".index-card").css({
            "height": "" + document.documentElement.clientHeight-1 + "px",
            // "width": "" + document.documentElement.clientWidth-1 + "px"
        })
    }
    setIndexSize()
    $(window).resize(function () {
        setIndexSize()
    })
})

