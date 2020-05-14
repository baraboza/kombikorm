$(function() {

$('.animals__item-box').mouseenter(function() {
	if ($(this).hasClass('active')) return;

	$('.animals__item-box.active').removeClass('active');
	$(this).addClass('active');
	$('.animals__image').attr('src', $(this).data('image'));
});

$('.js-modal-open').click(function(e) {
	e.preventDefault();
	$('body').addClass('overflow-hidden');
	$( $(this).attr('href') ).fadeIn();
});

$('.modal__close').click(function() {
	$('body').removeClass('overflow-hidden');
	$(this).parents('.modal-wrapper').fadeOut();
});

$('.header__nav-toggle').click(function() {
	$('.header__nav-list').slideToggle(200);
});

$('.info__list').slick({
	dots: true,
	mobileFirst: true,
	arrows: false,
	dotsClass: 'info__slider-dots',
	responsive: [
		{
			breakpoint: 991.98,
			settings: 'unslick'
		}
	]
});

});
