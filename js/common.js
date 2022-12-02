jQuery(document).ready(function($){

	$('.navigation a').on( 'touchstart click', function() {
			$( '.card' ).not( '.' + $(this).attr('id') ).hide('fast');
			$( '.card.' + $(this).attr('id') ).slideDown('fast');
	});

});