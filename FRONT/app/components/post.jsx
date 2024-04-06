import { Link } from '@remix-run/react'
import { formatearFecha } from '../utils/helpers.js'

function Post({ post }) {
	const { Contenido, imagen, Titulo, Url, publishedAt } = post
	return (
		<article className='post'>
			<img
				className='imagen'
				src={imagen.data.attributes.formats.small.url}
				alt={`imagen blog ${Titulo}`}
			/>
			<div className='contenido'>
				<h3>{Titulo}</h3>
				<p className='fecha'>{formatearFecha(publishedAt)}</p>
				<p className='resumen'>{Contenido}</p>
				<Link className='enlace' to={`/posts/${Url}`}>
					Leer Post
				</Link>
			</div>
		</article>
	)
}

export default Post
