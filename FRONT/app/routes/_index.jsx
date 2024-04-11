import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '../models/guitarras.server'
import { getPosts } from '../models/posts.server'
import ListadoGuitarras from '../components/listado-guitarras'
// import stylesGuitarras from '../styles/guitarras.css'
import '../styles/guitarras.css'

import ListadoPosts from '../components/listado-posts'
// import stylesPosts from '../styles/blog.css'
import '../styles/blog.css'

import { getCurso } from '../models/curso.server'
import Curso from '../components/curso'
import '../styles/curso.css'
// import stylesCurso from '../styles/curso.css'


export function meta() {
	return [
		{ title: `GuitarLA | Nuestro Blog` },
		{
			name: 'description',
			content: `GuitarLA, Blog de música y venta de guitarras`,
		},
	]
}
export function links() {
	return [
		{
			rel: 'stylesheet',
			href: '../styles/guitarras.css',
		},
		{
			rel: 'stylesheet',
			href: '../styles/blog.css',
		},
		{
			rel: 'stylesheet',
			href: '../styles/curso.css',
		},
	]
}

export async function loader() {
	const [guitarras, posts, curso] = await Promise.all([
		// con esta funcion retorna los 2 get al mismo tiempo para mejor performance
		getGuitarras(),
		getPosts(),
		getCurso(),
	])
	return {
		guitarras: guitarras.data,
		posts: posts.data,
		curso: curso.data,
	}
}

const Index = () => {
	const { guitarras, posts, curso } = useLoaderData()
	return (
		<>
			<main className='contenedor'>
				<ListadoGuitarras guitarras={guitarras} />
			</main>

			<Curso curso={curso.attributes} />

			<section className='contenedor'>
				<ListadoPosts posts={posts} />
			</section>
		</>
	)
}

export default Index
