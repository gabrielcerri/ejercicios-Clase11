let precioUnitario = 400
let cantidadDeUnidades = 5
let costoEnvio = 319.80

function calcularPrecioTotal (precioUnitario,cantidadDeUnidades,costoEnvio) {
	const resultado = (precioUnitario * cantidadDeUnidades) + costoEnvio 

	return resultado
}

const precioTotal = calcularPrecioTotal (precioUnitario,cantidadDeUnidades,costoEnvio)

console.log (precioTotal + ' $ ' + '(pesos)')