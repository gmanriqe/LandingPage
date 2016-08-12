$(document).ready( function(){
	var nav = $('.navbar-fixed-top');

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		// en los 300px estuvo bien realizar el efecto
		if(scroll >= 300) {
			nav.removeClass('normal').addClass('efecto');
		} else {
			nav.removeClass('efecto').addClass('normal');
		}
	})


	$('section#pantallas a').on('click', function(){
		// console.log($(this));
		$('#modal img').attr('src',$(this).attr('data-image-url'));
	});


});