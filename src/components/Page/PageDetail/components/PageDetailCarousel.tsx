import { Carousel } from 'react-bootstrap'
import { SIZES } from '../../../../constants/sizes'
import { SizeTypes } from '../../../../types/utilities'

export interface PageDetailCarouselCaptionProps {
	title?: string
	description?: string
}

export interface PageDetailCarouselItemProps {
	caption?: PageDetailCarouselCaptionProps
	image?: string
}

export interface PageDetailCarouselProps {
	size?: SizeTypes
	interval?: number
	caption?: boolean
	slides: PageDetailCarouselItemProps[]
}

export const PageDetailCarousel = ({ size = 'md', interval = 4000, caption = false, slides = [] }: PageDetailCarouselProps) => {
	return (
		<Carousel
			className='page-detail-carousel w-100'
			style={{
				borderRadius: '0.25rem',
				overflow: 'hidden',
				height: SIZES[`${size}`] ?? size,
			}}
			interval={interval}
			indicators={false}>
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
