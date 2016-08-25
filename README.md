# Poke procesos

**[Enlace demo](http://poke-carrera.khrizenriquez.com/)**

![Chris Enríquez - poke procesos, carrera pokémon](https://raw.githubusercontent.com/khrizenriquez/poke-procesos/master/app/images/screenShoots/start.png)

Carrera con pokémons, cada participante avanza de manera independiente. 

Lo primero que debes hacer es seleccionar un personaje de la modal, donde se listan cuales se pueden usar.

![Chris Enríquez - poke procesos, carrera pokémon](https://raw.githubusercontent.com/khrizenriquez/poke-procesos/master/app/images/screenShoots/choose.png)

Para jugar hay que presionar la tecla con la flecha para abajo (down key), **pero no hay que dejarlo presionado**, cada vez que se presione avanza, mientras mas se presione avanzará mucho mas el personaje.

![Chris Enríquez - poke procesos, carrera pokémon](https://raw.githubusercontent.com/khrizenriquez/poke-procesos/master/app/images/screenShoots/finish.png)

El primero que llegue a la meta, que se encuentra hasta abajo es el ganador.

![Chris Enríquez - poke procesos, carrera pokémon](https://raw.githubusercontent.com/khrizenriquez/poke-procesos/master/app/images/screenShoots/game_over.png)

Esto funciona a base de intervalos, `setInterval` de JavaScript para que dentro de determinado tiempo los personajes rivales avancen. 

**Instalación**

Para poder instalar esto, es necesario tener instalado [NodeJS](https://nodejs.org/en/) en su ordenador y [bower](https://bower.io/)

* Clonar el proyecto
* Dirigirse dentro de la carpeta que contiene el proyecto
* Ejecutar desde la línea de comandos o termial: npm install && bower install
* Ejecutar desde la línea de comandos o termial: gulp serve (esto es para levantar el servidor localmente con gulp)


**Legal**

Pokémon images, names and information (c) 1995-2014 Nintendo/Game freak. Images and content were taken from the following resources:

* http://veekun.com/dex/downloads
