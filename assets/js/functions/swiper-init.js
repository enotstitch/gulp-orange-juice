const swiper = new Swiper('.swiper', {
	speed: 400,
	loop: true,

	navigation: {
		nextEl: '.swiper-btn--next',
		prevEl: '.swiper-btn--prev',
	},

	effect: 'coverflow',
});
