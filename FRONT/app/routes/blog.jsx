import { useLoaderData } from '@remix-run/react'
import { getPosts } from '../models/posts.server'
// import styles from '../styles/blog.css'
import '../styles/blog.css'

import ListadoPosts from '../components/listado-posts'

export function meta() {
	return [
		{ title: `GuitarLA | Nuestro Blog` },
		{
			name: 'description',
			content: `GuitarLA, Blog de música y venta de guitarras`,
		},
	]
}
export const links = () => {
	return [
		{
			rel: 'stylesheet',
			href: '../styles/blog.css',
		},
	]
}

export async function loader() {
	const posts = await getPosts()
	return posts.data
}

function Blog() {
	const posts = useLoaderData()
	return (
		<main className='contenedor'>
			<ListadoPosts posts={posts} />
		</main>
	)
}

export default Blog
