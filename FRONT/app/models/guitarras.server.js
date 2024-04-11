// Devuelve todas las guitarras y esta función se manda llamar desde tienda.jsx
export async function getGuitarras() {
	const respuesta = await fetch(
		'https://strapi-production-498e.up.railway.app/api/guitarras?populate=imagen',
	)
	return await respuesta.json()
}

// Devuelve una guitarra por su id, con la imagen relacionada
export async function getGuitarra(url) {
	const respuesta = await fetch(
		`https://strapi-production-498e.up.railway.app/api/guitarras?filters[url]=${url}&populate=imagen`,
	)
	return await respuesta.json()
}

// información de strapi para una sola guitarra usando filters y no id
// http://127.0.0.1:1337/api/guitarras?filters[url]=beck&populate=imagen
