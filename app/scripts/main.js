'use strict'

var display, 
	guys = []
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame

var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var main = function () {
	const WIDTH 	= (document.body.offsetWidth / (5/4))
	const HEIGHT 	= (window.innerHeight - 200)
	display 		= new Screen(WIDTH, HEIGHT)

	//	Dibujando el fondo del canvas
	display.background()

	//	Dibujando las divisiones
	display.drawDivisions()

	//	Dibujando a los personajes
	//	Arreglo de personajes
	display.drawGuys()
	var g = new Guys()
	g.randomGuys(5)
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
