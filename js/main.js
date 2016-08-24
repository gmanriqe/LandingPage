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
	});


	$('section#pantallas a').on('click', function(){
		// console.log($(this));
		$('#modal img').attr('src',$(this).attr('data-image-url'));
	});


	// Utilizando waypointJS

	// Seccion app

	$('section#app .anima1').waypoint(function(){
		console.log('llego');
		// 'animated fadeInUp' clases de animate
		$('section#app .anima1').addClass('animated fadeInUp');
	},{
		// que tanto queremos que el elemento este visible en el viewport al momento de aparecer
		offset: '60%'
	});

	$('section#app .anima2').waypoint(function(){
		$('section#app .anima2').addClass('animated fadeInUp');
	},{
		// que tanto queremos que el elemento este visible en el viewport
		offset: '60%'
	});

	$('section#app .anima3').waypoint(function(){
		$('section#app .anima3').addClass('animated fadeInUp');
	},{
		offset: '60%'
	});

	// Seccion caracteristicas

	$('section#caracteristicas #app-central').waypoint(function(){
		$('section#caracteristicas #app-central').addClass('animated fadeInDownBig');
	},{
		offset: '60%'
	});

	$('section#caracteristicas .anima1').waypoint(function(){
		$('section#caracteristicas .anima1').addClass('animated fadeInLeft');
	},{
		offset: '60%'
	});
	

	$('section#caracteristicas .anima2').waypoint(function(){
		$('section#caracteristicas .anima2').addClass('animated fadeInLeft');
	},{
		offset: '60%'
	});

	// Seccion pantallas

	$('section#pantallas .anima1').waypoint(function(){
		$('section#pantallas .anima1').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});

	$('section#pantallas .anima2').waypoint(function(){
		$('section#pantallas .anima2').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});

	$('section#pantallas .anima3').waypoint(function(){
		$('section#pantallas .anima3').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});

	// Seccion descargar

	$('section#descargar .anima1').waypoint(function(){
		$('section#descargar .anima1').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});

	$('section#descargar .anima2').waypoint(function(){
		$('section#descargar .anima2').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});

	$('section#descargar .anima3').waypoint(function(){
		$('section#descargar .anima3').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});
});

// Utilizando smothscroll
smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
	selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 700, // 1s = 1000 // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutQuart', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: false, // Boolean. If true, update the URL hash on scroll
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});