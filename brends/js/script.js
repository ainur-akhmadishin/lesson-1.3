if (document.documentElement.clientWidth < 768) {
	const swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
		},
		slidesPerView: 1.25,
		spaceBetween: 16,
	});
}

let checkbox = document.querySelector('.checkbox');
let box = document.querySelector('.brend__wrapper')
let label = document.querySelector('.label')

checkbox.onchange = function () {
	if (checkbox.checked) {
		box.style.height = 'auto';
		label.innerHTML = "Скрыть";
	} else {
		box.style.height = '170px';
		label.innerHTML = "Показать все";
	}
	//	label.text = 'h';
}
