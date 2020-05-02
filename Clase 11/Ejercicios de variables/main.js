


const miComidaPreferida = {
	nombre : 'Milanesa con Papas',
	cantidadDeVecesQueComi : 66,
	cantidadDeVecesQueMeCocinaron: 42,
	ingredientes: ['Carne','Pan Rayado','Huevo','Mayonesa','Oregano','Queso'],
	
}


miComidaPreferida.llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes.length>5
miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron

console.log(miComidaPreferida)
