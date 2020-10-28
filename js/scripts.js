window.addEventListener('scroll', () => {
	let header = document.querySelector('#Home')
	let coords = parseInt(header.getBoundingClientRect().bottom)
	let widthScreen = window.innerHeight / 3;
	if (coords < widthScreen) {
		const features = document.querySelector('#Features').children;
		const about = document.querySelector('#About-Us').children;
		const more = document.querySelector('#More').children;
		let arr = [...features, ...about, ...more];
		console.log(arr);
		let animations = [
			'animate__bounceInLeft', 
			'animate__bounceInLeft',
			'animate__bounceInRight', 
			'animate__bounceInLeft',
			'animate__bounceInLeft',
			'animate__bounceInLeft',
			'animate__bounceInLeft',
			'animate__bounceInDown',
			'animate__bounceInLeft',
			'animate__bounceInLeft',
		];
		arr.forEach((elm, idx) => {
			// console.log(elm);
			if (parseInt(elm.getBoundingClientRect().top) < widthScreen) {
				elm.style.opacity = 1;
				elm.classList.add('animate__animated', animations[idx]); 
			}
		});
		// features.classList.add('animate__animated', 'animate__bounceInLeft');
	}
});

//Menu

document.addEventListener('DOMContentLoaded', ()=> {
	let btnMenu = document.querySelector('#btn-menu');
	let navRsp = document.querySelector('#nav-responsive')
	btnMenu.addEventListener('click', () => {
		navRsp.classList.toggle('active')
	});
});