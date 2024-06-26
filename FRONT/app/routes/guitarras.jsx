import { Outlet, useOutletContext } from '@remix-run/react'
// import styles from '../styles/guitarras.css'
import '../styles/guitarras.css'


export function links() {
	return [
		{
			rel: 'stylesheet',
			href: '../styles/guitarras.css',
		},
	]
}

export function Tienda() {
	return (
		<main className='contendor'>
			<Outlet context={useOutletContext()} />
		</main>
	)
}

export default Tienda
