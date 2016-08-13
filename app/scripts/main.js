'use strict'

var display, guys
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame

var main = function () {
	const WIDTH 	= (document.body.offsetWidth / (5/4))
	const HEIGHT 	= (document.body.offsetWidth / (3/2))
	display 		= new Screen(WIDTH, HEIGHT)

	//	Dibujando el fondo del canvas
	display.background()

	//	Dibujando las divisiones
	display.drawDivisions()

	//	Dibujando a los personajes
	//	Arreglo de personajes
	display.drawGuys()
	//display 	= new Screen(window.innerWidth, window.innerHeight)
	//input 		= new InputHandler()
	//heroData 	= new Hero()
	//display.drawBackground(heroData.getLevel())

	// hero = {
	// 	sprite: heroData, 
	// 	x: (display.width - heroData.w) / 2,
	// 	y: display.height - (30 + heroData.h)
	// }

	// init()
}

var displayTimer = function () {
	let timerElement 		= document.querySelector('.timer')
	let t 					= 0
	timerElement.innerHTML 	= 0

	let interal = setInterval(function () {
		t += 1
		timerElement.innerHTML = t
	}, 1000)
}

document.addEventListener('DOMContentLoaded', function () {
	main()
	displayTimer()
})
