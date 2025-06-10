import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { SIZES } from '../../../constants/sizes'
import { SizeTypes } from '../../../types/utilities'

export interface TourCardCarouselCaptionProps {
	title?: string
	description?: string
}

export interface TourCardCarouselItemProps {
	caption?: TourCardCarouselCaptionProps
	image?: string
}

export interface TourCardCarouselProps {
	size?: SizeTypes
	interval?: number
	caption?: boolean
	slides: TourCardCarouselItemProps[]
}

export const TourCardCarousel = ({ size = 'md', interval = 4000, caption = false, slides = [] }: TourCardCarouselProps) => {
	const [index, setIndex] = useState(0)

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex)
	}
	return (
		<Carousel
			className='page-detail-carousel tour-card__image'
			style={{
				borderRadius: '0',
				overflow: 'hidden',
				height: SIZES[`${size}`] ?? '300px',
			}}
			interval={interval}
			indicators={true}
			activeIndex={index}
			controls={slides.length > 1}
			onSelect={handleSelect}>
			{slides.map((slide) => (
				<Carousel.Item
					key={slide.image}
					style={{
						height: SIZES[`${size}`] ?? '500px',
						backgroundImage: `url('${slide?.image}')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}>
					{caption && slide.caption && (
						<Carousel.Caption>
							<h4 className='m-0'>{slide.caption.title}</h4>
							<p>{slide.caption.description}</p>
						</Carousel.Caption>
					)}
				</Carousel.Item>
			))}
		</Carousel>
	)
}
