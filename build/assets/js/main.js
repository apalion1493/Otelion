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

    jQuery('.search-scheme__choice').click(function () {
        jQuery('.search-scheme__dropdown').toggleClass('active');
    });
});

jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        let div1 = $(".search-scheme__choice");
        let div2 = $(".search-scheme__dropdown");// тут указываем ID элемента
        if (!div1.is(e.target) // если клик был не по нашему блоку
            && div1.has(e.target).length === 0
            && !div2.is(e.target)
            && div2.has(e.target).length === 0) { // и не по его дочерним элементам

            $('.search-scheme__dropdown').removeClass('active');
        }
    });
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
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