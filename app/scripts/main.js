'use strict'

var display, frames, speedFrame, 
	animation, lvFrame, dir, 
	guys 	= [], 
	winner 	= false
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame

var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function update () {
	frames++

	guys.some(function (element, index, arr) {
		element.y += element.speed
	})
}

function render () {
	//display.clear()
	//display.background()

	//	Dibujando las divisiones
	display.drawDivisions()

	//	Dibujando a los personajes
	display.drawGuys()
}

function run () {
	let loop = function () {
		update()
		render()

		animation = window.requestAnimationFrame(loop, display.canvas)
	}
	animation = window.requestAnimationFrame(loop, display.canvas)
}

var initFunctions = function () {
	//	Start settings
	frames 		= 0
	speedFrame 	= 0
	lvFrame 	= 20

	dir = 1

	//	Start the loop game
	run()
}

var infinityLoop = function () {}

var init = function () {
	initFunctions()
	infinityLoop()
}

//	http://stackoverflow.com/questions/6843201/how-to-clearinterval-with-unknown-id
function clearAllIntervals() {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
}

var main = function () {

	display = new Screen()

	//	Arreglo de personajes
	var g = new Guys()
	g.randomGuys(5)

	display.drawGuys(5)

	//	Movimiento de cada uno de ellos
	console.log('Movimiento aleatorio')
	g.randomMovement()
	console.log('Movimiento aleatorio')

	// for (i; i < children.length; i++) {
	// 	console.log(children[i])
	// }
	// const WIDTH 	= (document.body.offsetWidth / (5/4))
	// const HEIGHT 	= (window.innerHeight - 200)
	// display 		= new Screen(WIDTH, HEIGHT)

	// //	Dibujando el fondo del canvas
	// display.background()

	// //	Dibujando las divisiones
	// display.drawDivisions()

	

	// //	Dibujando a los personajes
	

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
	//displayTimer()
})
