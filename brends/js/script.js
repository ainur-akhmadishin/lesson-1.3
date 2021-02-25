let button = document.querySelector('.button-show');
let box = document.querySelector('.brend__wrapper');
let span = document.querySelector('.button-span');

if (document.documentElement.clientWidth < 768) {
	const swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
		},
		slidesPerView: 1.25,
		spaceBetween: 16,
	});
}

button.onclick = function () {
	box.classList.toggle('brend__wrapper--heigth');
	span.classList.toggle('button-span--rotate');
	if (button.textContent == 'Показать все') {
		button.textContent = 'Скрыть'
	} else {
		button.textContent = 'Показать все'
	}
}
