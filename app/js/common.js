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

// menu catalog
$('.links-catalog').on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass('click');
    $('header').toggleClass('active');
    $('.catalog-menu').fadeToggle();
});

// mask phone
$('[name="phone"]').mask('+7(999) 999-99-99');

// модальные окна (несколько)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click',function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end
// клик вне модального окна
$(document).on('click', function (e) {
    let div = $(".modal__body");
    let btn = $('.open_modal');
    if (!div.is(e.target) && !btn.is(e.target) && btn.has(e.target).length === 0 && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.modal__div').animate({
                opacity: 0,
                top: '45%'
            }, 200,
            function () {
                $(this).css('display', 'none');
                $('.overlay').fadeOut(400);
            }
        );
    }
});

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.radio-order').on('click', function () {
   $('.radio-order').removeClass('check');
   $(this).addClass('check');
});


// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    let myMap = new ymaps.Map('map', {
        center: [51.669470, 39.205407],
        zoom: 16
    });

    // Создание своей метки
    let myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [51.669470, 39.205407] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/location.svg',  // картинка иконки
            iconImageSize: [63, 91],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}