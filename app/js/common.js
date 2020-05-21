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

$('.info--main-page .info__list').slick({
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

$('.fancybox').fancybox();

$('.category__tab-content').hide();
$('.category__tab-content:first').show();
$('.category__tabs li:first').addClass('active');
$('.category__tabs li').click(function(event) {
	$('.category__tabs li').removeClass('active');
	$(this).addClass('active');
	$('.category__tab-content').hide();

	var selectTab = $(this).find('a').attr("href");

	$(selectTab).fadeIn();
});

$('.dealers__areas-item-title').click(function() {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this).parents('.dealers__areas-item').find('.dealers__areas-item-content').slideUp(200);
	} else {
		$('.dealers__areas-item-content').slideUp(200);
		$('.dealers__areas-item-title.active').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.dealers__areas-item').find('.dealers__areas-item-content').slideDown(200);
	}
	
});

});
