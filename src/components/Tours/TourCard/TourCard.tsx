/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tooltip } from 'primereact/tooltip'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Tour, TourCardProps } from '../../../types/tours'
import { formatCurrency } from '../../../utils'
import { StarIconFilled, StarIconOutline } from '../../Icons/Icons'
import { TourCardCarousel } from './TourCardCarousel'

export const TourCard = ({ handleClick = () => {}, tour = {} as Tour }: TourCardProps) => {
	const [tourData, setTourData] = useState<Tour | null>(null)

	useEffect(() => {
		console.log('TourCard useEffect', tourData)
		if (tour) {
			setTourData(tour)
		}
	}, [tour])

	if (!tourData) {
		return <div className='tour-card'>No tour available</div>
	}

	return (
		<div className='tour-card btn btn-link p-0 text-left text-capitalize text-decoration-none w-100'>
			<div className='tour-car-price'>
				<span className='tour-price number-font fw-bold' data-pr-tooltip={`Price in USD`}>
					from {formatCurrency(tour?.rate?.[0]?.amount, 'USD')}
				</span>
			</div>
			{tourData.images.length > 0 && <TourCardCarousel size='full' slides={tour?.images ?? []} interval={999999999} />}
			{tourData.images.length === 0 && <img alt={tourData.title} src={tour?.featured_image} className='tour-card__image' />}
			<button className='tour-card__content' onClick={() => handleClick(tourData)} aria-label={`View details for ${tourData.title}`}>
				<div></div>
				<Link to={`/destination/${tour?.slug}`} className='tour-card__text'>
					<p className='fw-bold h5'>{tourData.title}</p>
					<p className='tour-detail m-0'>
						<strong>Countries: </strong>
						{tourData.destination
							.map((dest: any, _index: number) => {
								const dest_types = dest?.destination_type?.map((type: any) => type.name) ?? []
								if (dest_types.includes('Country')) {
									return dest.title
								}
								return null
							})
							.join(', ')}
					</p>
					<p className='tour-detail m-0'>
						<strong>Destinations: </strong>{' '}
						<span>{tourData.destination.map((dest: any, _index: number) => dest.title).join(', ')}</span>
					</p>
					<p className='tour-detail m-0'>
						<strong>Experiences: </strong>{' '}
						{tourData.african_safari_experiences.map((dest: any, _index: number) => dest.title).join(', ')}
					</p>
					<p className='tour-detail m-0'>
						{Array.from({ length: Number(tourData.rating) }, (_, _i) => (
							<StarIconFilled key={_i} className='me-1' />
						))}
						{Array.from({ length: 5 - Math.floor(Number(tourData.rating)) }, (_, _i) => (
							<StarIconOutline key={_i} className='me-1' />
						))}
						{tourData?.rating ?? 'No rating yet'} from {tourData.reviews?.length ?? 'No '} reviews
					</p>
					<Tooltip target='.tour-price' mouseTrack mouseTrackTop={10} />
				</Link>
			</button>
		</div>
	)
}
