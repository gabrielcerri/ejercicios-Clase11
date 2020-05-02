let edad = 20
function dejarPasar (edad) {
	let resultado= false
	if (edad >= 18) {
		resultado = true

	} else {
		resultado = false
	}

	return resultado
}

const esMayor = dejarPasar(edad)

console.log(esMayor)