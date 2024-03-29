// = jquery/jquery.min.js
// = bootstrap/bootstrap.min.js
// = wow/wow.min.js


jQuery(document).ready(function(){
    jQuery('.menu-burger').click(function () {
        jQuery(this).toggleClass('active');
    });

    $('#search-scheme__input').focus(function(){
        $(this).parent().addClass('active');
    });
    $('#search-scheme__input').focusout(function(){
        $(this).parent().removeClass('active');
    });

    jQuery('.search-scheme__choice').hover(function () {
        jQuery('.search-scheme__dropdown').toggleClass('active');
    });

    jQuery('.search-scheme__guests-budget-wrapper').click(function () {
        jQuery('.dropdown-container__check-setting').toggleClass('active');
    });

    jQuery('.header__currency').hover(function () {
        jQuery('.dropdown-container_currency').toggleClass('active');
    });
    jQuery('.header__viewed-link').click(function () {
        jQuery('.dropdown-container__viewed').toggleClass('active');
    });
    jQuery('.header__language').hover(function () {
        jQuery('.dropdown-container_language').toggleClass('active');
    });

    jQuery('.header__menu-link-hotel').click(function () {
        jQuery('.dropdown-container__header').toggleClass('active');
    });

    jQuery('.header__favorites-link').click(function () {
        jQuery('.dropdown-container__favorites').toggleClass('active');
    });


    // $('.search-scheme__dropdown .nav-link').hover(function() {
    //     $('.tab-pane-dropdown').removeClass('active show');
    // });

    // $('.search-scheme__dropdown .nav-link').on('mouseover', function (e) {
    //     //$('.tab-pane-dropdown').removeClass('active show');
    //     //e.preventDefault;
    //     $(this).tab('show');
    // });



    $(".section_trips a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});

jQuery(function($){
    $(document).mouseup(function (e){
        let div1 = $(".search-scheme__choice");
        let div2 = $(".search-scheme__dropdown");
        if (!div1.is(e.target)
            && div1.has(e.target).length === 0
            && !div2.is(e.target)
            && div2.has(e.target).length === 0) {

            $('.search-scheme__dropdown').removeClass('active');
        }
    });
});

function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCityTwo(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-two");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-two");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}