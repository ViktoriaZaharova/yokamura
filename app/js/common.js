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
        '</svg>\n</button>',

});

let homeSlider = $('.home-slider');

$('.counter-slide__default').text("/ " + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
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
    appendArrows: '.gallery-slider__nav',

});

// popular section
$('.popular-slider').slick({
    slidesToShow: 4,
    cssEase: 'linear',
    speed: 700,
    dots: true,
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <g transform="translate(-3789.771 -2184.9)">\n' +
        '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
        '  </g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                variableWidth: true,
                centerMode: true,
            }
        }
    ]

});

$('.address-slider').slick({
    slidesToShow: 1,
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <g transform="translate(-3789.771 -2184.9)">\n' +
        '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
        '  </g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
        '</svg>\n</button>',
});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 768) {
        $('.about-slider:not(.slick-initialized)').slick({
            dots: true,
            nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
                '  <g transform="translate(-3789.771 -2184.9)">\n' +
                '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
                '  </g>\n' +
                '</svg>\n</button>',
            prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
                '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
                '</svg>\n</button>',
            speed: 100,
            slidesToShow: 1,
        });
    } else {
        $(".about-slider.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 576) {
        $('.characteristics-tab:not(.slick-initialized)').slick({
            dots: false,
            nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
                '  <g transform="translate(-3789.771 -2184.9)">\n' +
                '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
                '  </g>\n' +
                '</svg>\n</button>',
            prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
                '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
                '</svg>\n</button>',
            speed: 100,
            slidesToShow: 1,
            centerMode: true,
            asNavFor: '.characteristics-tab-content',
            fade: true
        });

        $('.characteristics-tab-content:not(.slick-initialized)').slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            asNavFor: '.characteristics-tab',
            fade: true,
            adaptiveHeight: true,
        });
    }

    // if ($(window).width() > 992) {
    //     $(function () {
    //         let topPos = $('.btn-test-drive').offset().top;
    //         $(window).scroll(function () {
    //             let top = $(document).scrollTop(),
    //                 pip = $('.tab-content').offset().top,
    //                 height = $('.btn-test-drive').outerHeight();
    //             if (top > topPos && top < pip - height) {
    //                 $('.btn-test-drive').addClass('fixed').removeAttr("style");
    //             } else if (top > pip - height) {
    //                 $('.btn-test-drive').removeClass('fixed');
    //             } else {
    //                 $('.btn-test-drive').removeClass('fixed');
    //             }
    //         });
    //     });
    // }
});

let rev = $(".news-slider");
rev
    .on("init", function (event, slick, currentSlide) {
        let cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            next2 = cur.next().next(),
            prev = cur.prev(),
            prev2 = cur.prev().prev();
        prev.addClass("slick-sprev");
        next.addClass("slick-snext");
        prev2.addClass("slick-sprev2");
        next2.addClass("slick-snext2");
        cur
            .removeClass("slick-snext")
            .removeClass("slick-sprev")
            .removeClass("slick-snext2")
            .removeClass("slick-sprev2");
        slick.$prev = prev;
        slick.$next = next;
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        console.log("beforeChange");
        let cur = $(slick.$slides[nextSlide]);
        console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass("slick-sprev");
        slick.$next.removeClass("slick-snext");
        slick.$prev.prev().removeClass("slick-sprev2");
        slick.$next.next().removeClass("slick-snext2");
        (next = cur.next()), (prev = cur.prev());
        //prev2.prev().prev();
        //next2.next().next();
        prev.addClass("slick-sprev");
        next.addClass("slick-snext");
        prev.prev().addClass("slick-sprev2");
        next.next().addClass("slick-snext2");
        slick.$prev = prev;
        slick.$next = next;
        cur
            .removeClass("slick-next")
            .removeClass("slick-sprev")
            .removeClass("slick-next2")
            .removeClass("slick-sprev2");
    });

rev.slick({
    speed: 1000,
    arrows: true,
    dots: false,
    // focusOnSelect: true,
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <g transform="translate(-3789.771 -2184.9)">\n' +
        '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
        '  </g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
        '</svg>\n</button>',
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    swipe: true,
    customPaging: function (slider, i) {
        return "";
    }
    /*infinite: false,*/
});


// product slider
$('.features-slider').slick({
    slidesToShow: 1,
    fade: true,
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

$('.characteristics-product__slider').slick({
    slidesToShow: 1,
    fade: true,
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <g transform="translate(-3789.771 -2184.9)">\n' +
        '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
        '  </g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
        '</svg>\n</button>',
});

$('.video-slider').slick({
    slidesToShow: 3,
    cssEase: 'linear',
    speed: 700,
    centerMode: true,
    dots: true,
    variableWidth: true,
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <g transform="translate(-3789.771 -2184.9)">\n' +
        '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
        '  </g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
        '</svg>\n</button>',
});


let rev2 = $(".product-gallery");
rev2
    .on("init", function (event, slick, currentSlide) {
        let cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            next2 = cur.next().next(),
            prev = cur.prev(),
            prev2 = cur.prev().prev();
        prev.addClass("slick-sprev");
        next.addClass("slick-snext");
        prev2.addClass("slick-sprev2");
        next2.addClass("slick-snext2");
        cur
            .removeClass("slick-snext")
            .removeClass("slick-sprev")
            .removeClass("slick-snext2")
            .removeClass("slick-sprev2");
        slick.$prev = prev;
        slick.$next = next;
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        console.log("beforeChange");
        let cur = $(slick.$slides[nextSlide]);
        console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass("slick-sprev");
        slick.$next.removeClass("slick-snext");
        slick.$prev.prev().removeClass("slick-sprev2");
        slick.$next.next().removeClass("slick-snext2");
        (next = cur.next()), (prev = cur.prev());
        //prev2.prev().prev();
        //next2.next().next();
        prev.addClass("slick-sprev");
        next.addClass("slick-snext");
        prev.prev().addClass("slick-sprev2");
        next.next().addClass("slick-snext2");
        slick.$prev = prev;
        slick.$next = next;
        cur
            .removeClass("slick-next")
            .removeClass("slick-sprev")
            .removeClass("slick-next2")
            .removeClass("slick-sprev2");
    });

rev2.slick({
    speed: 700,
    arrows: true,
    dots: true,
    // focusOnSelect: true,
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <g transform="translate(-3789.771 -2184.9)">\n' +
        '    <path d="M3792.272,2184.9a2.489,2.489,0,0,1,1.767.733l10,10a2.5,2.5,0,0,1,0,3.535l-10,10a2.5,2.5,0,0,1-3.535-3.535l8.232-8.233-8.232-8.232a2.5,2.5,0,0,1,1.768-4.268Z"/>\n' +
        '  </g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.001" height="25" viewBox="0 0 15.001 25">\n' +
        '  <path d="M3774.272,2209.9a2.493,2.493,0,0,1-1.768-.732l-10-10a2.5,2.5,0,0,1,0-3.535l10-10a2.5,2.5,0,0,1,3.535,3.535l-8.232,8.232,8.232,8.233a2.5,2.5,0,0,1-1.767,4.267Z" transform="translate(-3761.771 -2184.9)"/>\n' +
        '</svg>\n</button>',
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    swipe: true,
    customPaging: function (slider, i) {
        return "";
    }
});


// menu catalog
$('.links-catalog, .btn-burger').on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass('click');
    $('header').toggleClass('active');
    $('.catalog-menu').fadeToggle();
});


// menu footer
$('.dropdown-item').on('click', function () {
    // $('.dropdown-item').removeClass('click');
    $(this).toggleClass('click').siblings('.block-hidden').slideToggle();

});

$('.social-share-mobile__btn').on('click', function () {
    $(this).parents('.social-share-mobile').toggleClass('active');
});

// select
$(".drop .option").click(function () {
    let val = $(this).attr("data-value"),
        $drop = $(".drop"),
        prevActive = $(".drop .option.active").attr("data-value"),
        options = $(".drop .option").length;
    $drop.find(".option.active").addClass("mini-hack");
    $drop.toggleClass("visible");
    $drop.removeClass("withBG");
    $(this).css("top");
    $drop.toggleClass("opacity");
    $(".mini-hack").removeClass("mini-hack");
    if ($drop.hasClass("visible")) {
        setTimeout(function () {
            $drop.addClass("withBG");
        }, 400 + options * 100);
    }
    triggerAnimation();
    if (val !== "placeholder" || prevActive === "placeholder") {
        $(".drop .option").removeClass("active");
        $(this).addClass("active");
    }
});

function triggerAnimation() {
    let finalWidth = $(".drop").hasClass("visible");
    $(".drop").css("width", "100%");
    setTimeout(function () {
        $(".drop").css("width", finalWidth + "em");
    }, 400);
}


// mask phone
$('[name="phone"]').mask('+7(999) 999-99-99');

// модальные окна (несколько)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click', function (event) {
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
                $('.address-slider').slick('setPosition');
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
    let div = $(".modal__wrapper");
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
$('.up').on("click", function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.radio-order').on('click', function () {
    $('.radio-order').removeClass('check');
    $(this).addClass('check');
});

$(".tab-header__item").on("click", function () {
    let id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.tab-header__item.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.tab-content__item.active').removeClass('active'); // 3
    content.addClass('active'); // 4

    $(".features-slider").slick('setPosition');
    $(".characteristics-product__slider").slick('setPosition');
});

$(".characteristics-tab__item").on("click", function () {
    let id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.characteristics-tab__item.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.characteristics-tab-content__item.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

$(".views-tab__item").on("click", function () {
    let id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.views-tab__item.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.views-tab-content__item.active').removeClass('active'); // 3
    content.addClass('active'); // 4

    $(".views-tab-content__item.active .video-slider").slick('setPosition');
    $(".views-tab-content__item.active .product-gallery").slick('setPosition');
});

$('[data-fancybox]').fancybox({
    buttons: [
        "close"
    ],
});




// Инициализация карты
ymaps.ready(init);

function init() {

    //Центрирование и выбор масштаба карты
    let myMap = new ymaps.Map('map', {
        center: [51.669470, 39.205407],
        zoom: 16
    });

    // Создание своей метки
    let myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [51.669470, 39.205407], {
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
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}


window.CI360.init();