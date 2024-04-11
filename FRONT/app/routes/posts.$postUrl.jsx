// en remix se debe usar el nombre posts.$postUrl para crear la ruta posts/rutadinamica por el signo de dolar
import { useLoaderData } from '@remix-run/react'
import { getPost } from '../models/posts.server'
import { formatearFecha } from '../utils/helpers'
// import styles from '../styles/blog.css'
import '../styles/blog.css'; 

export function meta({ data }) {
	return [
		{ title: `GuitarLA | ${data.data[0].attributes.Titulo}` },
		{
			name: 'description',
			content: `Guitarras - Venta de Guitarras, entrada ${data.data[0].attributes.Titulo}`,
		},
	]
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: '../styles/blog.css',
		},
	]
}

export async function loader({ params }) {
	const { postUrl } = params
	console.log(params)
	const post = await getPost(postUrl)
	if (post.data.length === 0) {
		throw new Response('', {
			status: 404,
			statusText: 'Entrada no encontrada',
		})
	}
	return post
}
// params se trae la ruta desde la api

export default function Post() {
	const post = useLoaderData()
	const { Titulo, imagen, Contenido, publishedAt } = post?.data[0]?.attributes // Destruction al JSON de la api
	return (
		<article className='contenedor post mt-3'>
			<img
				className='imagen'
				src={imagen.data.attributes.url}
				alt={`imagen blog ${Titulo}`}
			/>
			<div className='contenido'>
				<h3>{Titulo}</h3>
				<p className='fecha'>{formatearFecha(publishedAt)}</p>
				<p className='texto'>{Contenido}</p>
			</div>
		</article>
	)
}
