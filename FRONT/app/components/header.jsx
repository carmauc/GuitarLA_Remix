import { Link } from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'

const Header = ({
	carrito,
	eliminarGuitarra,
	incrementarCantidad,
	disminuirCantidad,
	vaciarCarrito,
}) => {
	return (
		<header className='header'>
			<div className='contenedor barra'>
				<Link to='/'>
					<img className='logo' src={Logo} alt='Imagen logo' />
				</Link>
				<Navegacion
					carrito={carrito}
					eliminarGuitarra={eliminarGuitarra}
					incrementarCantidad={incrementarCantidad}
					disminuirCantidad={disminuirCantidad}
					vaciarCarrito={vaciarCarrito}
				/>
			</div>
		</header>
	)
}

export default Header
