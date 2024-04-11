export async function getCurso() {
	const respuesta = await fetch(
		'https://strapi-production-498e.up.railway.app/api/curso?populate=imagen',
	)
	return await respuesta.json()
}
