'use strict'

var display, 
	guys 	= [], 
	winner = false, 
	user 	= {}

var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var gameOver = function () {
	let i 			= 0, 
		elements 	= document.querySelector('.canvasContainer').children

	for (i; i < elements.length; i++) {
		let topValue = elements[i].children[0].style.top

		if (parseFloat(topValue.split('%')[0]) >= 95) {
			winner = true
			user.winnerGame = guys[i]
			clearAllIntervals()

			showWinner()
		}
	}
}

var userChoose = function (id) {
	user.id = id || 0
}

var showWinner = function () {
	//	Mostrando la modal
	$('#winnerModal').modal('show')

	$('#winnerModal .modal-body').html(`
		<img class="pokemon-winner" src="/images/${user.winnerGame.id}.png" alt="Pokémon número ${user.winnerGame.id}" /> 
		<h4>Felicidades, ganaste en ${$('.container .header .timer').text()} segundos</h4>`)
}

var showModal = function () {
	//	Mostrando la modal
	$('#chooseModal').modal('show')
	//	Colocando el título de la modal
	$('#chooseModal .modal-title').text(`¿Cuál de estos ${guys.length} pokémons deseas elegir?`)

	let pokeData = '<div class="text-center col-xs-1 col-sm-1 col-md-1"> </div>'
	guys.some(function (element, index, arr) {
		pokeData += `<div id="pokemon-${element.id}" class="image-choose-pokemon text-center col-xs-2 col-sm-2 col-md-2"><img class="" src="/images/${element.id}.png" alt="Pokémon número ${element.id}" /></div>`
	})

	$('#chooseModal .modal-body').append(`${pokeData}`)

	$('#chooseModal .modal-body [id^=pokemon-]').on('click', function (e) {
		userChoose($(this).attr('id').split('pokemon-')[1])
		$('#chooseModal').modal('hide')

		//	Movimiento de cada uno de ellos
		let g = new Guys()
		g.randomMovement()

		displayTimer()

		//	Escuchando que teclas presiona el usuario
		display.pressKey()
	})
}

//	http://stackoverflow.com/questions/6843201/how-to-clearinterval-with-unknown-id
function clearAllIntervals() {
    for (var i = 1; i < 99999; i++) window.clearInterval(i)
}

var main = function () {
	display = new Screen()

	//	Arreglo de personajes
	var g = new Guys()
	g.randomGuys(5)

	display.drawGuys(5)

	showModal()

	//	Movimiento de cada uno de ellos
	//g.randomMovement()

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

	setInterval(function () {
		gameOver()
	}, 100)
})
