'use strict';

$(function () {

	// Слайдер услуг на главной
	
	$('.service-slider .slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: true,
		prevArrow: '<div class="slide-prev"><i class="icon-arrow-left-small"></i></div>',
		nextArrow: '<div class="slide-next"><i class="icon-arrow-right-small"></i></div>'
	});


	// Слайдер Наши клиенты
	
	$('.clients-slider .slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		prevArrow: '<div class="slide-prev"><i class="icon-arrow-left-small"></i></div>',
		nextArrow: '<div class="slide-next"><i class="icon-arrow-right-small"></i></div>'
	});

	// Слайдер нас рекомендуют
	
	$('.recommend-slider .slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1500,
		//centerMode: true,
		//centerPadding: '90px',
		prevArrow: '<div class="slide-prev"><i class="icon-arrow-left-small"></i></div>',
		nextArrow: '<div class="slide-next"><i class="icon-arrow-right-small"></i></div>'
	})

});
