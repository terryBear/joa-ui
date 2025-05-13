/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tooltip } from 'primereact/tooltip'
import { Link } from 'react-router'
import { Tour, TourCardProps } from '../../../types/tours'
import { formatCurrency } from '../../../utils'
import { StarIconFilled, StarIconOutline } from '../../Icons/Icons'

export const TourCard = ({ handleClick: emitClick, tour = null }: TourCardProps) => {
	const handleClick = (tour: Tour) => {
		emitClick(tour)
	}

	if (!tour) {
		return <div className='tour-card'>No tour available</div>
	}

	return (
		<Link
			to={`/destination/${tour.slug}`}
			className='tour-card btn btn-link p-0 text-left text-capitalize text-decoration-none w-100'
			onClick={() => handleClick(tour)}>
			<img alt={tour.title} src={tour?.featured_image} className='tour-card__image' />
			<div className='tour-card__overlay'></div>
			<div className='tour-card__content'>
				<div></div>
				<div className='tour-card__text'>
					<p className='fw-bold h5'>{tour.title}</p>
					<p className='tour-detail m-0'>
						<strong>{tour.destination}: </strong>
						{tour.exclusivity.join(', ')}
					</p>
					<p className='tour-detail m-0'>
						<strong>Destinations: </strong>
						{tour.lodge.map((lodge) => lodge.location).join(', ')}
					</p>
					<p className='tour-detail m-0'>
						{Array.from({ length: Number(tour.rating) }, (_, _i) => (
							<StarIconFilled className='me-1' />
						))}
						{Array.from({ length: 5 - Math.floor(Number(tour.rating)) }, (_, _i) => (
							<StarIconOutline className='me-1' />
						))}
						{tour.rating ? tour.rating : 'No rating yet'} from {tour.reviews?.length ?? 'No '} reviews
					</p>
					<Tooltip target='.tour-price' mouseTrack mouseTrackTop={10} />
					<div className='tour-car-price'>
						<span className='tour-price number-font fw-bold' data-pr-tooltip={`Price in USD`}>
							from {formatCurrency(tour?.rates?.[0]?.amount, tour?.rates?.[0]?.currency)}
						</span>
					</div>
				</div>
			</div>
		</Link>
	)
}
