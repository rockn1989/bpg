'use strict';

$(function () {

	// Слайдер услуг на главной
	
	$('.service-slider .slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: true,
		prevArrow: '<div class="slide-prev"><i class="icon-arrow-left-small"></i></div>',
		nextArrow: '<div class="slide-next"><i class="icon-arrow-right-small"></i></div>',
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					adaptiveHeight: true
				}
			}
		]
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
		nextArrow: '<div class="slide-next"><i class="icon-arrow-right-small"></i></div>',
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					adaptiveHeight: true
				}
			}
		]
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
		nextArrow: '<div class="slide-next"><i class="icon-arrow-right-small"></i></div>',
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					adaptiveHeight: true
				}
			}
		]
	})

});
