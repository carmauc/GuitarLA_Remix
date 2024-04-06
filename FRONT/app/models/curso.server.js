export async function getCurso() {
	const respuesta = await fetch(
		'http://127.0.0.1:1337/api/curso?populate=imagen',
	)
	return await respuesta.json()
}
