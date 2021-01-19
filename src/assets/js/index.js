const hambourgerAnimation = () => {
	const hambourger = document.querySelector('.hambourger');
	const hambourgerItem = document.querySelectorAll('.hambourger-item');
	const crossLineOne = document.querySelector('#crossline-one');
	const crossLineTwo = document.querySelector('#crossline-two');
	const collapseNavbar = document.querySelector('.collapse-navbar-item');
	collapseNavbar.style.display = 'none';

	hambourger.addEventListener('mouseover', (e) => {
		Array.from(hambourgerItem).forEach((e) => {
			e.style.display = 'none';
		});
		crossLineTwo.style.display = 'block';
		crossLineOne.style.display = 'block';
		crossLineOne.classList.add('before');
		crossLineTwo.classList.add('after');
		collapseNavbar.style.display = 'block';
	});
	hambourger.addEventListener('mouseout', (e) => {
		crossLineOne.classList.remove('before');
		crossLineTwo.classList.remove('after');
		collapseNavbar.classList.remove('collapse-navbar-display-block');
		collapseNavbar.style.display = 'none';
		Array.from(hambourgerItem).forEach((e) => {
			e.style.display = 'block';
		});
	});
};

window.addEventListener('resize', function () {
	if (window.matchMedia('(max-width: 768px)').matches) {
		hambourgerAnimation();
	}
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	const slides = document.getElementsByClassName('image-slider');
	const spanText = document.getElementsByClassName('text-span');
	const spanDate = document.getElementsByClassName('date-span');
	const titleBlackDiv = document.getElementsByClassName('title-black-div');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
		spanDate[i].style.display = 'none';
		spanText[i].style.display = 'none';
		titleBlackDiv[i].style.display = 'none';
	}

	slides[slideIndex - 1].style.display = 'block';
	spanText[slideIndex - 1].style.display = 'block';
	spanDate[slideIndex - 1].style.display = 'block';
	titleBlackDiv[slideIndex - 1].style.display = 'block';
}
