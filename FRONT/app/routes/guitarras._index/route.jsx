import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '../../models/guitarras.server'
import ListadoGuitarras from '../../components/listado-guitarras'

export function meta() {
	return [
		{ title: 'Guitar | Tienda de Guitarras' },
		{
			name: 'description',
			content: 'GuitarLA - Nuestra colección de guitarras',
		},
	]
}
export async function loader() {
	const guitarras = await getGuitarras()
	return guitarras.data
}

export function Tienda() {
	const guitarras = useLoaderData()

	return <ListadoGuitarras guitarras={guitarras} />
}

export default Tienda
