let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};
const sr = ScrollReveal({ 


	distance : '65px' , 
	duration : 2600 , 
	delay : 450 , 
	reset: true   , 
	origin : 'top'   ,

}) ; 
sr.reveal('.hero-text'  , {deplay:200 , origin:'top'})
sr.reveal('.hero-img')