$(function () {
	$('.lang').click(function () {
		$(this).toggleClass('on');
	});

	$('.header .menu-item > a').click(function (e) {
		e.preventDefault();
	});

	$('.header .menu-item > a').keyup(function (key) {
		if (key.keyCode == 13) {
			$(this).siblings('.sub-menu').css('display', 'flex');
		}
	});

	$('.header .menu-item .more').click(function (e) {
		e.preventDefault();
	});

	$('.header .menu-item .more').keyup(function (key) {
		if (key.keyCode == 13) {
			$(this).children('ul').css({ display: 'block' });
		}
	});

	// 메인 스와이퍼
	var mainSwiper = new Swiper('.sc-main-slide', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	$('.swiper-btns > a').click(function (e) {
		e.preventDefault();
	});

	$('.swiper-controls > a').click(function (e) {
		e.preventDefault();
	});

	$('.sc-main-slide .play-control').click(function (e) {
		if ($(this).hasClass('stop')) {
			mainSwiper.autoplay.stop();
			$(this).removeClass('stop').addClass('play');
		} else if ($(this).hasClass('play')) {
			mainSwiper.autoplay.start();
			$(this).removeClass('play').addClass('stop');
		}
	});

	$('.sc-main-slide .swiper-controls .prev').click(() => {
		mainSwiper.slidePrev();
	});

	$('.sc-main-slide .swiper-controls .next').click(() => {
		mainSwiper.slideNext();
	});
	// side news swiper

	var swiper = new Swiper('.sidenews-slide', {
		direction: 'vertical',
		slidesPerView: 1,
		mousewheel: false,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},
	});

	// side news swiper

	var swiper = new Swiper('.popupnews-slide', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},
	});

	// keyword swiper

	var swiper = new Swiper('.keyword-slide', {
		slidesPerView: 3,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.keyword-next',
			prevEl: '.keyword-prev',
		},
		autoplay: {
			delay: 5000,
		},
	});

	/// notice toggle class

	$('.notice-item').click(function () {
		$('.notice-item').removeClass('on');
		$('.notice-item').children('.title').removeAttr('aria-selected');
		$(this).addClass('on');
		$(this).children('.title').attr('aria-selected', true);
	});

	$('.notice-item h3').keyup(function (key) {
		if (key.keyCode == 13) {
			$('.notice-item').removeClass('on');
			$('.notice-item').children('.title').removeAttr('aria-selected');
			$(this).parent('.notice-item').addClass('on');
			$(this).attr('aria-selected', true);
		}
	});

	////  news toggle class

	$('.news-item').click(function () {
		$('.news-item').removeClass('on');
		$(this).addClass('on');
	});

	$('.news-item h3').keyup(function (key) {
		if (key.keyCode == 13) {
			$('.news-item').removeClass('on');
			$('.news-item').children('.title').removeAttr('aria-selected');
			$(this).parent('.news-item').addClass('on');
			$(this).attr('aria-selected', true);
		}
	});

	// sns toggle class
	$('.sns-item').click(function () {
		$('.sns-item').removeClass('on');
		$(this).addClass('on');
	});

	$('.sns-item h3').keyup(function (key) {
		if (key.keyCode == 13) {
			$('.sns-item').removeClass('on');
			$('.sns-item').children('.title').removeAttr('aria-selected');
			$(this).parent('.sns-item').addClass('on');
			$(this).attr('aria-selected', true);
		}
	});

	// footer focus event

	$('.footer .btn-site').click(function (event) {
		event.preventDefault();
		$('.footer .group-top dd').removeClass('on');
		$(this).parent('dd').addClass('on');
	});

	$('.footer .f-util-item a').focus(function (e) {
		$('.footer .group-top dd').removeClass('on');
	});
});
