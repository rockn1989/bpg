'use strict';

$(function() {

	var $preloadElements = $('.preload');

	$.each($preloadElements, function (i, el) {
		$(el).removeClass('preload');
	})

	// Декстопная форма в шапке

	var $searchBtn = $('a.search__link'),
		$searchForm = $('.search-form');

	$searchBtn.on('click', function (e) {
		e.preventDefault();
		var timer;
		if(!$searchForm.hasClass('show')) {
			$(this).parent('div.search').addClass('show');
			$searchForm
				.addClass('show')
				.find('input[type="text"]')
				.focus();

			timer = setTimeout(function () {
				$(document).on('click keyup', hiddenSearchForm);
			}, 100)
		} else {
			clearInterval(timer);
		}
	});

	function hiddenSearchForm (e) {
		var form = document.querySelector('.search-form'),
			input = document.querySelector('.search-form input'),
				btn = document.querySelector('js__search-form');

		if((e.which == 27) || (e.target != input && e.target != btn) && $(form).hasClass('show')) {
			console.log(123)
			$(input).val('');
			$(form).removeClass('show');
			$('div.search').removeClass('show');
			$(document).unbind('click keyup', hiddenSearchForm);
		};
	};


	// Показывать форму на мобильных устройствах

	var $mobileForm = $('.mobile-form');

	$('.js__show-form').on('click', function (e) {
		e.preventDefault();
		$mobileForm.slideToggle('350').find('input').focus();
	})


	// Главная навигация

	$('.main-nav').on('mouseover','.nav__item', function () {
		$.each($('.main-nav .nav__item'), function (i, el) {
			$(el).removeClass('hover')
		});
		$(this).addClass('hover')
	});

	$('.main-nav').on('mouseleave', function () {
		$.each($('.main-nav .nav__item'), function (i, el) {
			$(el).removeClass('hover')
		});
	});

	// Маска формы

	$('.js__input-phone').mask('+7 999 999-99-99', {clearIfNotMatch: true}).focus(function (e) {
		if (!$(this).val()) {
			$(this).val('+7 ');
		}
	});


	// Валидация формы

	if($('form').is('.default-form')) {

		$('.default-form').validate({
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				email: "Обязательноe поле",
				tel: "Обязательноe поле"
			},
		});
	};


	// Открытие мобильного подменю

	$('.js__menu-sublist-toggle').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('a'),
			siblingsList = blockParent.siblings('.menu-sublist');

		if(blockParent.hasClass('open')) {
			siblingsList.stop().slideUp('350', function () {
				blockParent.removeClass('open');
			});
		} else {
			siblingsList.stop().slideDown('350', function () {
				blockParent.addClass('open');
			});
		}

		self.toggleClass('open');
	});


	// Открытие мобильного подменю в футере

	$('[data-role="toggle-list"] i').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('[data-role="toggle-list"]'),
			siblingsList = blockParent.parent().find('.footer__list');

		self.toggleClass('open');
		siblingsList.stop().slideToggle('350');
	});

	// Отключение UIKIT анимации для мобильных устройств

	UIkit.on('beforeready.uk.dom', function () {
		if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
			UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
		};
	});

});
