//@prepros-append test.js

$(document).ready(function () {
	$('.sliderblock__inner').slick({
		"arrows":false,
		"dots":true
	});
});


$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})