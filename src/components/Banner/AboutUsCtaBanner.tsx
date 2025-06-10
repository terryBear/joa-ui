import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router'

export const AboutUsCtaBanner = () => {
	return (
		<aside className='banner cta-banner h50'>
			<img
				alt={'Request Luxurious African Safari Tour Quote'}
				src={'/images/Banner - Call to Action 2.png'}
				className='banner__image'
			/>
			<div className='banner__content'>
				<Row>
					<Col xs={12} sm={6}>
						<div className='cta-banner-content'>
							<h2>Your Private African Safari Starts Here</h2>
							<p>Customize my African Safari</p>
						</div>
					</Col>
					<Col xs={12} sm={6}>
						<div className='cta-banner-content text-right'>
							<div></div>
							<Link to='/safari-enquiry'>
								<Button variant='outline-info' className='mt-3' style={{ borderRadius: 'var(--joa-ui-radius)' }}>
									HELP ME PLAN MY SAFARI
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</div>
		</aside>
	)
}
