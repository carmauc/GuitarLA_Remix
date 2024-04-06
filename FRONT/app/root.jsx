import {
	Meta,
	Links,
	Outlet,
	Scripts,
	LiveReload,
	useRouteError,
	Link,
} from '@remix-run/react'

import styles from './styles/index.css'
import Header from './components/header'
import Footer from './components/footer'
import { useEffect, useState } from 'react'

export function meta() {
	return [
		{ title: 'GuitarLA | Remix' },
		{
			name: 'viewport',
			content: 'width=device-width,initial-scale=1',
		},
		{
			charSet: 'utf-8',
		},
		{
			name: 'description',
			content: 'Aplicación para comprar tu guitarra',
		},
	]
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com',
		},

		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: 'true',
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
		},
		{
			rel: 'stylesheet',
			href: styles,
		},
	]
}

export default function App() {
	// Inicializa el carrito desde localStorage o devuelve un arreglo vacío si no hay datos
	const carritoLS =
		typeof window !== 'undefined'
			? JSON.parse(localStorage.getItem('carrito')) ?? []
			: []

	// const initialCart = () => {
	//     const localStorageCart = localStorage.getItem('carrito')
	//     return localStorageCart ? JSON.parse(localStorageCart) : []
	//   }

	const [carrito, setCarrito] = useState(carritoLS)

	// const [carrito, setCarrito] = useState(initialCart())

	const MIN_ITEMS = 1
	const MAX_ITEMS = 5

	useEffect(() => {
		// Guarda el carrito en localStorage cada vez que cambie
		localStorage.setItem('carrito', JSON.stringify(carrito))
	}, [carrito])

	const agregarCarrito = guitarra => {
		if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
			// Iterar sobre el arreglo, e identificar el elemento duplicado
			const carritoActualizado = carrito.map(guitarraState => {
				if (guitarraState.id === guitarra.id) {
					// Reescribir la cantidad
					guitarraState.cantidad = guitarra.cantidad
				}
				return guitarraState
			})
			// Añadir al carrito
			setCarrito(carritoActualizado)
		} else {
			// Registro nuevo, agregar al carrito
			setCarrito([...carrito, guitarra])
		}
	}

	const actualizarCantidad = guitarra => {
		const carritoActualizado = carrito.map(guitarraState => {
			if (guitarraState.id === guitarra.id) {
				guitarraState.cantidad = guitarra.cantidad
			}
			return guitarraState
		})
		setCarrito(carritoActualizado)
	}

	const eliminarGuitarra = id => {
		const carritoActualizado = carrito.filter(
			guitarraState => guitarraState.id !== id,
		)
		setCarrito(carritoActualizado)
	}

	function incrementarCantidad(id) {
		const carritoActualizado = carrito.map(item => {
			if (item.id === id && item.cantidad < MAX_ITEMS) {
				return {
					...item,
					cantidad: item.cantidad + 1,
				}
			}
			return item
		})
		setCarrito(carritoActualizado)
	}

	function disminuirCantidad(id) {
		const carritoActualizado = carrito.map(item => {
			if (item.id === id && item.cantidad > MIN_ITEMS) {
				return {
					...item,
					cantidad: item.cantidad - 1,
				}
			}
			return item
		})
		setCarrito(carritoActualizado)
	}

	function vaciarCarrito(e) {
		setCarrito([])
	}

	return (
		<Document>
			<Header
				carrito={carrito}
				eliminarGuitarra={eliminarGuitarra}
				incrementarCantidad={incrementarCantidad}
				disminuirCantidad={disminuirCantidad}
				vaciarCarrito={vaciarCarrito}
			/>
			<Outlet
				context={{
					carrito,
					agregarCarrito,
					actualizarCantidad,
					eliminarGuitarra,
					// decreaseQuantity
				}}
			/>
		</Document>
	)
}

function Document({ children }) {
	return (
		<html lang='es'>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<Footer />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

    //* manejo de errores*//

export function ErrorBoundary(){
        const error = useRouteError();
    return (
        <Document>
        <p className='error'>{error.status} {error.statusText}</p>
        <Link className='error-enlace' to='/'>Tal vez quieras volver a la pagina principal</Link>
    </Document>
    )
}
