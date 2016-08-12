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

// Utilizando smoth scroll
smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
	selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 700, // 1s = 1000 // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutQuart', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: false, // Boolean. If true, update the URL hash on scroll
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});