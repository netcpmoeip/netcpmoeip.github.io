jQuery(document).ready(function($){
    var clicks = 0;
    $('.navigation a').on( 'click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if(clicks == 0){
            $( '.card' ).not( '.' + $(this).attr('id') ).hide('fast');
            $( '.card.' + $(this).attr('id') ).slideDown('fast');
            var color = $( '.card.' + $(this).attr('id') ).css('border-color');
            $('.navigation a').css('border', 'none');
            $(this).css('border-bottom', '.25em solid ' + color);
            clicks++;
        }
        else{
            $('.navigation a').css('border-bottom', 'none');
            $( '.card' ).slideDown('fast'); 
            clicks--;
        }
	});

    $('h1#index').on('click', function() {
        $('.navigation a').css('border-bottom', 'none');
        $( '.card' ).slideDown('fast');
    });

    $('#solve').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 500);
    })

});