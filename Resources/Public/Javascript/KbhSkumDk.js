$(document).ready(function() {
    /*$( 'input[type="file"]' ).each( function() {

        var $input	 = $( this ),
            $label	 = $input.parent().parent().prev( 'label' ),
            labelVal = $label.html();

        $input.on( 'change', function( e ) {
            var fileName = '';

            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else if( e.target.value )
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                $label.html( fileName );
            else
                $label.html( labelVal );
        });
        // Firefox bug fix
        $input
            .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
            .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });*/
    /*
    $(".digidennis-mageme-option-toggle").each(function(){
        if( !$(this).parent().parent().hasClass('option-open') ){
            $(this).parent().parent().children('dd:not([class="digidennis-mageme-option-price"])').slideToggle(200,'swing');
        };
    }).on('click', function () {
        $(this).parent().toggleClass('toggle-open');
        $(this).parent().parent().toggleClass('option-open');
        $(this).parent().parent().children('dd:not([class="digidennis-mageme-option-price"])').slideToggle(200,'swing');
    });*/
});


