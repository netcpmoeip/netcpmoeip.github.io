jQuery(document).ready(function($){
    $('.navigation a').on( 'click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
		$( '.card' ).not( '.' + $(this).attr('id') ).hide('fast');
		$( '.card.' + $(this).attr('id') ).slideDown('fast');
        var color = $( '.card.' + $(this).attr('id') ).css('border-color');
        $('.navigation a').css('border', 'none');
        $(this).css('border-bottom', '.25em solid ' + color);
	});

    $('h1#index').on('click', function() {
        $('.navigation').css('border', 'none');
        $( '.card' ).slideDown('fast');
    });

    $('#solve').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 500);
    })

});