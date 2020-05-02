let notaExamen= 2

function calcularResultadoDeExamen(notaExamen) {
	if (notaExamen>=1 && notaExamen<=10){
		if(notaExamen<4) {

			resultado = 'Aplazado'

		} else if (notaExamen>=4 && notaExamen<=6) {

			resultado = 'A recuperar'

			} else if (notaExamen > 6 && notaExamen<10) {
				resultado = 'Aprobado'


			}else if (notaExamen===10){
				resultado = 'Sobresaliente'
			 }
	}

	return resultado 

}

const resultadoExamen = calcularResultadoDeExamen(notaExamen)


console.log (resultadoExamen)
	
	
