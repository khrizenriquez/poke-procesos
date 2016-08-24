'use strict'

//	Constructor de para los valores de la pantalla
var Screen = function () {
	this.arrowDown = 40
}

Screen.prototype.pressKey = function () {
	var arrowDown = this.arrowDown

	//	Acciones cuando le dan clic o tap (si es pantalla táctil)
	document.addEventListener('click', function (e) {
		if (winner) return false

		guys.some(function (element, index, arr) {
			if (parseInt(user.id) !== element.id) return

			var top = document.querySelector('.canvasContainer').children[index].children[0].style.top
			if (top == '') {
				document.querySelector('.canvasContainer').children[index].children[0].style.top = '-10%'
			} else {
				document.querySelector('.canvasContainer').children[index].children[0].style.top = (1 + 
								element.speed + parseFloat(top.split('%')[0])) + '%'
			}
		})
	})

	//	Acciones con la flecha hacia abajo del teclado
	document.addEventListener('keyup', function (e) {
		if (winner) return false

		var key = e.keyCode || e.which

		if (key !== arrowDown) return false

		guys.some(function (element, index, arr) {
			if (parseInt(user.id) !== element.id) return

			var top = document.querySelector('.canvasContainer').children[index].children[0].style.top
			if (top == '') {
				document.querySelector('.canvasContainer').children[index].children[0].style.top = '-10%'
			} else {
				document.querySelector('.canvasContainer').children[index].children[0].style.top = (1 + 
								element.speed + parseFloat(top.split('%')[0])) + '%'
			}
		})
	})
}

/*
	Función para dibujar a los pokémons en el div contenedor
*/
Screen.prototype.drawGuys = function(size) {
	var container 	= document.querySelector('.canvasContainer'), 
		c 			= container.children, 
		i 			= 0,
		divisions 	= size || 5, 
		img

	//	Itero en los elementos que tiene el div contenedor, dibujo los bordes de las divisiones y dibujo a los personajes en pantalla
	for (i; i < c.length; i++) {
		let content = c[i]
		img 		= new Image()
		img.src 	= guys[i].img
		img.onload = function () {
			content.children[0].appendChild(this)
		}
	}
}
