import React, { FC, JSX } from 'react'
import { Container } from 'react-bootstrap'

export interface BannerProps {
	title?: string | JSX.Element | React.ReactNode
	description?: string
	image?: string
	button?: React.ReactNode | JSX.Element
	hero?: boolean
	className?: string
}

export const Banner: FC<BannerProps> = ({
	title = 'Luxurious African Safari Tour',
	description = 'A Luxury Africa Safari & Tour with Jewel of Africa Safaris is an invitation to discover the wild beauty of Africa in unparalleled style and comfort.',
	button = null,
	image = null,
	hero = false,
	className = '',
}) => {
	return (
		<aside className={`banner ${hero && 'hero'} ${className}`}>
			{image && <img alt={description} src={image} className='banner__image' />}
			<div className='banner__content'>
				<Container>
					<h1 className='text-capitalize '>{title}</h1>
					<p>{description}</p>
					{button && <div className='banner__button'>{button}</div>}
				</Container>
			</div>
		</aside>
	)
}
