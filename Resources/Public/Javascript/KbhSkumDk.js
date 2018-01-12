$(document).ready(function() {
    $(".digidennis-mageme-option-toggle").each(function(){
        if( !$(this).parent().parent().hasClass('option-open') ){
            $(this).parent().parent().children('dd:not([class="digidennis-mageme-option-price"])').slideToggle(200,'swing');
        };
    }).on('click', function () {
        $(this).parent().toggleClass('toggle-open');
        $(this).parent().parent().toggleClass('option-open');
        $(this).parent().parent().children('dd:not([class="digidennis-mageme-option-price"])').slideToggle(200,'swing');
    });
});