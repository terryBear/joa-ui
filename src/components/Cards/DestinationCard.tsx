import { Link } from 'react-router'
import { Destination } from '../../types/destinations'

interface DestinationCardProps {
	destination: Destination
}

export const DestinationCard = ({ destination }: DestinationCardProps) => {
	return (
		<Link to={`/destinations/${destination.slug}`} className='destination-card text-decoration-none'>
			<img src={destination.image} alt={destination.title} />
			<div className='destination-card__content'>
				<h3>{destination.title}</h3>
				<p>{destination.description}</p>
			</div>
		</Link>
	)
}
