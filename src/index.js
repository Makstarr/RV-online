import "./index.scss"
import "magnific-popup";
import "./js/colorThemeChanger.js";
import $ from 'jquery';
window.$ = window.jQuery = $;
import "./js/slick.min.js"
import "./js/slick-settings.js"


/* COPY YEAR */
$('.this-year').text(new Date().getFullYear())

/*INFORMATION SHOW BUTTON*/
$('.menu-btn-open').each(function () {
    $(this).on("click", function (e) {
        e.preventDefault();
        $(".mobile-menu").toggleClass("slide-from")
        
        window.setTimeout(function () {
            $(".mobile-menu").toggleClass("mobile-menu-hidden")
            

        }, 0);
        window.setTimeout(function () {
            $("body").toggleClass("hidden-body")
            $(".mobile-menu").toggleClass("slide-from")
        }, 400)
        e.isDefaultPrevented()
    })
});

/*INFORMATION HIDE BUTTON*/
$('.menu-btn-close').each(function () {
    $(this).on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("hidden-body")
        $(".mobile-menu").toggleClass("slide-away")
        window.setTimeout(function () {
            $(".mobile-menu").toggleClass("mobile-menu-hidden")
            $(".mobile-menu").toggleClass("slide-away")
        }, 500);
    })
});





/* MAGNIFIC POPUP GALLERY FUNCTION*/
$('.popup-gallery').each(function () { 
    // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', 
        // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});



$('.help-button-container-top').each(function () { 
    $(this).on("click", function (e) {
        e.preventDefault();
        console.log(e)
        window.setTimeout(function () {
        window.location.href = 'http://localhost/help/';
        }, 500)
    })
})
