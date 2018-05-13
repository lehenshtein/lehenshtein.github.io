//preloader
$(window).on('load', function () {
var $preloader = $('#preloader');
    $preloader.delay(2000).fadeOut('slow');
});

//slider
$('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});

//menubtn
$('.menu--min__btn').click(function() {
    $('.row__top').toggleClass('active');
    $('.row__bot').toggleClass('active');
    $('.row__mid').toggleClass('active');
    $('.menu--min').toggle("middle");
});
//form
$('.header__callback').click(function() {
    $('.backform__wrapper').addClass('backform__wrapper--visible');
});
$('.backform__close').click(function() {
    $('.backform__wrapper').removeClass('backform__wrapper--visible');
});

$('#backform-send').click(function(){
    var important = $('.backform__important');
    $.each(important, function() {
           if(this.value == '') {
               $(this).addClass('backform__invalid');
               $(this).val('Поле обязательно для заполнения');
           }
           });
});
$('.backform__important').click(function(){
        $(this).removeClass('backform__invalid');
        $(this).val('');
});
//# sourceMappingURL=main.js.map
