import React, { FC, JSX } from 'react'
import { Container } from 'react-bootstrap'

export interface BannerProps {
	title?: string
	description?: string
	image?: string
	button?: React.ReactNode | JSX.Element
	hero?: boolean
}

export const Banner: FC<BannerProps> = ({
	title = 'Luxurious African Safari Tour',
	description = 'A Luxury Africa Safari & Tour with Jewel of Africa Safaris is an invitation to discover the wild beauty of Africa in unparalleled style and comfort.',
	button = null,
	image = null,
	hero = false,
}) => {
	const style = {
		backgroundImage: `url(${image})`,
	}
	return (
		<aside className={`banner ${hero && 'hero'}`} style={image ? style : {}}>
			<div className='banner__content'>
				<Container>
					<h1>{title}</h1>
					<p>{description}</p>
					{button && <div className='banner__button'>{button}</div>}
				</Container>
			</div>
		</aside>
	)
}
