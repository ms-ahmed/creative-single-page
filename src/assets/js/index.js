const hambourgerAnimation = () => {
	const hambourger = document.querySelector('.hambourger');
	const hambourgerItem = document.querySelectorAll('.hambourger-item');
	const crossLineOne = document.querySelector('#crossline-one');
	const crossLineTwo = document.querySelector('#crossline-two');
	hambourger.addEventListener('mouseover', (e) => {
		Array.from(hambourgerItem).forEach((e) => {
			e.style.display = 'none';
		});
		crossLineTwo.style.display = 'block';
		crossLineOne.style.display = 'block';
		crossLineOne.classList.add('before');
		crossLineTwo.classList.add('after');
	});
	hambourger.addEventListener('mouseout', (e) => {
		crossLineOne.classList.remove('before');
		crossLineTwo.classList.remove('after');
		Array.from(hambourgerItem).forEach((e) => {
			e.style.display = 'block';
		});
	});
};
hambourgerAnimation();
