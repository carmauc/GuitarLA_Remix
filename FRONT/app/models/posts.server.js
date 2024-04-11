// Devuelve todas las guitarras y esta función se manda llamar desde tienda.jsx
export async function getPosts() {
	const respuesta = await fetch(
		'https://strapi-production-498e.up.railway.app/api/posts?populate=imagen',
	)
	return await respuesta.json()
}

export async function getPost(url) {
	const respuesta = await fetch(
		`https://strapi-production-498e.up.railway.app/api/posts?filters[Url]=${url}&populate=imagen`,
	)
	return await respuesta.json()
}
