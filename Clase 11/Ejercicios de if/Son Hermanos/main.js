const familia1 = {
	padre1 : true,
	madre1 : true
}

const familia2 = {
	padre2 : true,
	madre2 : true
}

function sonHermanos (familia1,familia2) {
	let resultado = false
	if ((familia1.padre1 && familia2.padre2) === true) {
		if ((familia1.madre1 && familia2.madre2) === true) {
			resultado =true
		} else {
			resultado = false
		}
	} 
	return resultado
	}



	const hermanos = sonHermanos (familia1,familia2)

	console.log (hermanos)