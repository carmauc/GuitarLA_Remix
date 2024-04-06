import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitarra } from '../../models/guitarras.server'
import { useState } from 'react'

export async function loader({ params }) {
	const { guitarraUrl } = params
	const guitarra = await getGuitarra(guitarraUrl)
	/* Manejo de errores en la función loader */
	if (guitarra.data.length === 0) {
		throw new Response('', {
			status: 404,
			statusText: 'Guitarra no encontrada',
		})
	}
	return guitarra
}

export function meta({ data }) {
	return [
		{ title: `GuitarLA | ${data.data[0].attributes.nombre}` },
		{
			name: 'description',
			content: `Guitarras - Venta de Guitarras, Guitarra ${data.data[0].attributes.nombre}`,
		},
	]
}

function Guitarra() {
	const { agregarCarrito } = useOutletContext()
	const [cantidad, setCantidad] = useState(0)
	const guitarra = useLoaderData()
	const handleSubmit = e => {
		e.preventDefault()

		if (cantidad < 1) {
			alert('Debes Seleccionar una cantidad')
			return
		}
		const guitarraSeleccionada = {
			id: guitarra.data[0].id,
			nombre,
			imagen: imagen.data.attributes.url,
			precio,
			cantidad,
		}
		agregarCarrito(guitarraSeleccionada)
	}

	const { descripcion, imagen, precio, nombre } = guitarra.data[0].attributes // Destruction al JSON de la api
	return (
		<div className='guitarra'>
			<img
				className='imagen'
				src={imagen.data.attributes.url}
				alt={`imagen de la guitarra ${nombre}`}
			/>
			<div className='contenido'>
				<h3>{nombre}</h3>
				<p className='texto'>{descripcion}</p>
				<p className='precio'>$ {precio}</p>

				<form onSubmit={handleSubmit} className='formulario'>
					<label htmlFor='cantidad'>Cantidad</label>
					<select
						onChange={e => setCantidad(parseInt(e.target.value))}
						type='number'
						id='cantidad'>
						<option value='0'>--Seleccione--</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>

					<input type='submit' value='Agregar al Carrito' />
				</form>
			</div>
		</div>
	)
}

export default Guitarra
