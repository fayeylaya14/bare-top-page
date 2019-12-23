
$(document).ready(function(){
    $("#main-feature").slick({
        autoplay: true,
        infinite: true,
        speed: 1000,
        dots: true,
        fade: true,
        arrows: false,
        centerMode: true
    });

    $(".btn-menu").click(function(){
        $(".main-menu-mobile").slideToggle();
    });
});