var sliderImages = document.querySelectorAll('.slide'),
	btnRight = document.querySelector('#btnRight'),
	btnLeft = document.querySelector('#btnLeft'),
	current = 0,
	i;


	function reset() {
		for(i = 0;i< sliderImages.length;i++){
			sliderImages[i].style.display = "none";
		}
	}
	function startSlide () {
		reset();
		sliderImages[0].style.display = 'block';
	}
	startSlide();
	function slideLeft () {
		reset();
		sliderImages[current - 1].style.display = 'block';
		current--;
	}
	btnLeft.addEventListener('click', function(){
		if (current === 0 ) {
			current = sliderImages.length
		}
		slideLeft();
	});
	function slideRight () {
		reset();
		sliderImages[current + 1].style.display = 'block';
		current++
	}
	btnRight.addEventListener('click', function(){
		if (current === sliderImages.length -1 ) {
			current = -1
		}
		slideRight();
	});