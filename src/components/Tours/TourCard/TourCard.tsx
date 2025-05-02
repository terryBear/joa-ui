import { Link } from 'react-router'
import { Tour, TourCardProps } from '../../../types/tours'
import { formatCurrency } from '../../../utils'

export const TourCard = ({ handleClick: emitClick, tour = null }: TourCardProps) => {
	const handleClick = (tour: Tour) => {
		emitClick(tour)
	}

	if (!tour) {
		return <div className='tour-card'>No tour available</div>
	}

	return (
		<div
			className='tour-card'
			style={{
				backgroundImage: `url(${tour?.featured_image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}>
			<div className='tour-card__overlay'></div>
			<div className='tour-card__content'>
				<div></div>
				<div>
					<h3 className='m-0'>
						<Link to={`/destination/${tour.slug}`} className='btn btn-link p-0' onClick={() => handleClick(tour)}>
							{tour.title}
						</Link>
					</h3>
					<p className='tour-detail'>{tour.short_description}</p>
					<p className='tour-detail m-0'>
						<i className='bi bi-geo-alt me-1'></i>
						{tour.lodge.map((lodge) => lodge.location).join(', ')}
					</p>
					<p className='tour-detail m-0'>
						<i className='bi bi-calendar2-week me-1'></i>
						{tour.duration} <i className='bi bi-wifi me-1 ms-3'></i>
						{tour?.amenities?.join(', ')}
						<i className='bi bi-buildings me-1 ms-3'></i>
						{tour?.accomodation?.join(' | ')}
						<i className='bi bi-person-arms-up me-1 ms-3'></i>
						{tour?.comfort_level?.join(', ')}
					</p>
					<div className='tour-car-price'>
						<span className='tour-price number-font fw-bold'>
							{formatCurrency(tour?.rates?.[0]?.amount, tour?.rates?.[0]?.currency)}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
