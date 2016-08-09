$(document).ready( function(){
	$('section#pantallas a').on('click', function(){
		console.log($(this));
		$('#modal img').attr('src',$(this).attr('data-image-url'));
	});
});