import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
	return [
		{ title: 'Guitar | Nosotros' },
		{
			name: 'description',
			content: 'Venta de Guitarras, blog de Música',
		},
	]
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: styles,
		},
		{
			rel: 'preload',
			href: imagen,
			as: 'image',
		},
	]
}
const Nosotros = () => {
	return (
		<main className='contenedor nosotros'>
			<h2 className='heading'>Nosotros</h2>
			<div className='contenido'>
				<img src={imagen} alt='imagen sobre nosotros' />
				<div>
					<p>
						{' '}
						Mauris gravida nunc a urna efficitur sodales sit amet eget risus.
						Duis vitae ex in nulla dapibus laoreet at ac dui. Phasellus turpis
						sapien, elementum vel eros vitae, varius consectetur lorem.
						Curabitur posuere velit sit amet ex vulputate congue. Proin a elit
						mollis, consequat tortor non, congue erat. Aliquam erat volutpat.
						Nullam placerat ligula rutrum, mollis neque ut, maximus lacus.{' '}
					</p>
					<p>
						{' '}
						Mauris gravida nunc a urna efficitur sodales sit amet eget risus.
						Duis vitae ex in nulla dapibus laoreet at ac dui. Phasellus turpis
						sapien, elementum vel eros vitae, varius consectetur lorem.
						Curabitur posuere velit sit amet ex vulputate congue. Proin a elit
						mollis, consequat tortor non, congue erat. Aliquam erat volutpat.
						Nullam placerat ligula rutrum, mollis neque ut, maximus lacus.{' '}
					</p>
				</div>
			</div>
		</main>
	)
}

export default Nosotros
