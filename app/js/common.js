// home slider
$('.home-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <g transform="translate(-3789.771 -2184.9)">\n' +
        '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
        '  </g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
        '</svg>\n</button>'
});

let homeSlider = $('.home-slider');

$('.counter-slide__default').text("/ " + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function(event, slick, currentSlide){
    $(".counter-slide__cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
});

// slider gallery
$('.gallery-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
   centerMode: true,
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <g transform="translate(-3789.771 -2184.9)">\n' +
        '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
        '  </g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
        '</svg>\n</button>',
    appendArrows: '.gallery-slider__nav'
});

// popular section
$('.popular-slider').slick({
    slidesToShow: 4,
    dots: true,
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <g transform="translate(-3789.771 -2184.9)">\n' +
        '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
        '  </g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
        '</svg>\n</button>',
});

$('.news-slider').slick({
    slidesToShow: 5,
    centerMode: true,
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <g transform="translate(-3789.771 -2184.9)">\n' +
        '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
        '  </g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
        '</svg>\n</button>',
});

//Добавляем всем элементам прозрачность
$('.news-slider .slick-slide').addClass('slick-slider-opacity');
//Убираем прозрачность у центральных элементов
$('.news-slider .slick-slide.slick-active').eq(1).removeClass('slick-slider-opacity');
$('.news-slider .slick-slide.slick-active').eq(2).removeClass('slick-slider-opacity');
$('.news-slider .slick-slide.slick-active').eq(3).removeClass('slick-slider-opacity');
//Вешаем обработчик на событие слайдера
$(".news-slider").on("afterChange", function() {
    //Добавляем прозрачность всем элементам, обнуляя её у нужных
    $('.news-slider .slick-slide').addClass('slick-slider-opacity');
    $('.news-slider .slick-slide.slick-active').eq(1).removeClass('slick-slider-opacity');
    $('.news-slider .slick-slide.slick-active').eq(2).removeClass('slick-slider-opacity');
    $('.news-slider .slick-slide.slick-active').eq(3).removeClass('slick-slider-opacity');
});