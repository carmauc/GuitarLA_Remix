import { Link, useLocation } from '@remix-run/react'
import imagen from '../../public/img/carrito.png'
import { useMemo } from 'react'

function Navegacion({
	carrito = [],
	eliminarGuitarra,
	incrementarCantidad,
	disminuirCantidad,
	vaciarCarrito,
}) {
	const location = useLocation()
	// const cart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : [];
	const isEmpty = useMemo(() => carrito.length === 0, [carrito])
	const calculoTotal = useMemo(
		() =>
			carrito.reduce((total, item) => total + item.cantidad * item.precio, 0),
		[carrito],
	)

	return (
		<nav className='navegacion'>
			<Link to='/' className={location.pathname === '/' ? 'active' : ''}>
				Inicio
			</Link>
			<Link
				to='/nosotros'
				className={location.pathname === '/nosotros' ? 'active' : ''}>
				Nosotros
			</Link>
			<Link
				to='/guitarras'
				className={location.pathname === '/guitarras' ? 'active' : ''}>
				Tienda
			</Link>
			<Link
				to='/blog'
				className={location.pathname === '/blog' ? 'active' : ''}>
				Blog
			</Link>

			<div className='cart'>
				<Link to='/carrito'>
					<img src={imagen} alt='carrito de compras' />
				</Link>
				<div id='cart'>
					{isEmpty ? (
						<p>El carrito esta vacío</p>
					) : (
						<>
							<table>
								<thead>
									<tr>
										<th>Imagen</th>
										<th>Nombre</th>
										<th>Precio</th>
										<th>Cantidad</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{carrito.map(guitar => (
										<tr key={guitar.id}>
											<td>
												<img
													className='imagen'
													src={`${guitar.imagen}`}
													alt='imagen guitarra'
												/>
											</td>
											<td>{guitar.nombre}</td>
											<td className='fw-bold'>${guitar.precio}</td>
											<td className='cantidades'>
												<button
													type='button'
													className='enlace boton1'
													onClick={() => disminuirCantidad(guitar.id)}>
													-
												</button>
												{guitar.cantidad}
												<button
													type='button'
													className='enlace boton1'
													onClick={() => incrementarCantidad(guitar.id)}>
													+
												</button>
											</td>
											<td>
												<button
													className='danger'
													type='button'
													onClick={e => {
														eliminarGuitarra(guitar.id) // Llamar a la función eliminarGuitarra
													}}>
													X
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>

							<p className='total'>
								Total pagar: <span className='fw-bold'>${calculoTotal}</span>
							</p>
						</>
					)}

					<button className='boton enlace' onClick={vaciarCarrito}>
						Vaciar Carrito
					</button>
					<Link className='boton enlace' to='/carrito'>
						Ir al Carrito
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navegacion
