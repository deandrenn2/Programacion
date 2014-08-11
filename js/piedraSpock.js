var opciones = ["Piedra", "Papel", "Tijera","Lagarto","Spock"];

function play (usuario) {
	elegidaUsuario = opciones[usuario];	
	alert("Tú elegiste " + elegidaUsuario);
//opciones de la maquina
			function aleatorio (minimo, maximo) {
				// body...
				var numero = Math.floor(Math.random()* (maximo - minimo + 1) + minimo);
				return  numero;
			}

			var opcionMaquina = aleatorio(0,4);
			opcionMaquina = opciones[opcionMaquina];
	alert("Javascript eligio " + opcionMaquina);

//Condicional del juego
//Si eliges piedra
	if (elegidaUsuario == opciones[0]){

		if (opcionMaquina == opciones[0]){
			alert("Empataste");
		}
		else if (opcionMaquina == opciones[2]){
			alert("Perdiste");
		}
		else if (opcionMaquina == opciones[1]){
			 alert("Ganaste");
		}
		else if (opcionMaquina == opciones[3]){
			 alert("Ganaste");
		}
		else if (opcionMaquina == opciones[4]){
			 alert("Perdiste");
		}
	} 
			//Si eliges Papel
	else if (elegidaUsuario == opciones[1]){
			if (opcionMaquina == opciones[0]){
				alert("Ganaste");
			}
			else if (opcionMaquina == opciones[1]){
				alert("Empataste");
			}
			else if (opcionMaquina == opciones[2]){
				 alert("Perdiste");
			}
			else if (opcionMaquina == opciones[3]){
				 alert("Perdiste");
			}
			else if (opcionMaquina == opciones[4]){
				 alert("Ganaste");
			}
		} 
		//Si eliges tijera
		else if (elegidaUsuario == opciones[2]){
			if (opcionMaquina == opciones[0]){
				alert("Perdiste");
			}
			else if (opcionMaquina == opciones[1]){
				alert("Ganaste");
			}
			else if (opcionMaquina == opciones[2]){
				 alert("Empataste");
			}
			else if (opcionMaquina == opciones[3]){
				 alert("Ganaste");
			}
			else if (opcionMaquina == opciones[4]){
				 alert("Perdiste");
			}
		}

		//Si eliges Lagarto
		else if (elegidaUsuario == opciones[3]){
			if (opcionMaquina == opciones[0]){
				alert("Perdiste");
			}
			else if (opcionMaquina == opciones[1]){
				alert("Ganaste");
			}
			else if (opcionMaquina == opciones[2]){
				 alert("Perdiste");
			}
			else if (opcionMaquina == opciones[3]){
				 alert("Empataste");
			}
			else if (opcionMaquina == opciones[4]){
				 alert("Ganaste");
			}
		}

			//Si eliges Spock
		else if (elegidaUsuario == opciones[4]){
			if (opcionMaquina == opciones[0]){
				alert("Ganaste");
			}
			else if (opcionMaquina == opciones[1]){
				alert("Perdiste");
			}
			else if (opcionMaquina == opciones[2]){
				 alert("Ganaste");
			}
			else if (opcionMaquina == opciones[3]){
				 alert("Perdiste");
			}
			else if (opcionMaquina == opciones[4]){
				 alert("Empataste");
			}
		}

		else{
			alert("No elegiste una opción valida");
		}
}

