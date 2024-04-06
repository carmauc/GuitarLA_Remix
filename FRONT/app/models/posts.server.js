// Devuelve todas las guitarras y esta función se manda llamar desde tienda.jsx
export async function getPosts() {
	const respuesta = await fetch(
		'http://127.0.0.1:1337/api/posts?populate=imagen',
	)
	return await respuesta.json()
}

export async function getPost(url) {
	const respuesta = await fetch(
		`http://127.0.0.1:1337/api/posts?filters[Url]=${url}&populate=imagen`,
	)
	return await respuesta.json()
}
