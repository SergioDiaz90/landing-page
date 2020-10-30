/**Landing-page animation Scroll 
 * Function that listen event in the browser and add class
 * of animation
*/
window.addEventListener('scroll', () => {
	/**variables */
	let header = document.querySelector('#Home')
	let coords = parseInt(header.getBoundingClientRect().bottom)
	let widthScreen = window.innerHeight / 1.5;
	const features = document.querySelector('#Features').children;
	const about = document.querySelector('.About-Us').children;
	const more = document.querySelector('#More').children;
	let arr = [...features, ...about, ...more];
	let animations = [
		'animate__fadeInLeft', 
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
	/**variables */

	/**Animation scroll */
	if (coords < widthScreen) {
		arr.forEach((elm, idx) => {
			// console.log(elm);
			if (parseInt(elm.getBoundingClientRect().top) < widthScreen) {
				elm.style.property = 'all 0.3s ease-out';
				elm.style.opacity = 1;
				elm.classList.add('animate__animated', animations[idx]); 
			}
		});
	}
	/**Animation scroll */
});
/**Landing-page animation Scroll */


/** Event listener of menu and buttons*/
document.addEventListener('DOMContentLoaded', ()=> {
	/**Variables */
	const btnMenu = document.querySelector('#btn-menu');
	const navRsp = document.querySelector('#nav-responsive');
	const btnDownload = document.querySelector('#btn-dwl');
	const btnGit = document.querySelector('#btn-git');
	const items = document.querySelector('#Home-menu');
	const items2 = document.querySelector('#Features-menu');
	const items3 = document.querySelector('#About-Us-menu');
	const items4 = document.querySelector('#More-menu');
	/**Variables */
	/**Animation menu btn */
	btnMenu.addEventListener('click', () => {
		navRsp.classList.toggle('active')
	});
	/**Animation menu btn */
	/**Animation btn */
	btnDownload.addEventListener('click' , (e) => {
		e.preventDefault();
		btnDownload.classList.add('animate__animated', 'animate__pulse');
	});
	btnGit.addEventListener('click' , (e) => {
		btnGit.classList.add('animate__animated', 'animate__pulse');
	});
	/**Animation btn */
	/**Hidden menu after click bottom */
	items.addEventListener('click', lessActive);
	items2.addEventListener('click', lessActive);
	items3.addEventListener('click', lessActive);
	items4.addEventListener('click', lessActive);
	/** Function for remove active class in menu rsp*/
	function lessActive () {
		navRsp.classList.remove('active');
	}
	/**Hidden menu after click bottom */
});
/** Event listener of menu and buttons*/