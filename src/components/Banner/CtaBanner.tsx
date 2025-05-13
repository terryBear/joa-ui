import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

export const CtaBanner = () => {
	return (
		<aside className='banner'>
			<img
				alt={'Request Luxurious African Safari Tour Quote'}
				src={'/images/wild-animals-botswana-africa-2025-03-18-15-02-07-utc.jpg'}
				className='banner__image'
			/>
			<div className='banner__content'>
				<h2>Request Luxurious African Safari Tour Quote</h2>
				<p>Customize my African Safari</p>
				<Link to='/safari-enquiry'>
					<Button variant='secondary' className='mt-3' style={{ borderRadius: 'var(--joa-ui-radius)' }}>
						Request a quote
					</Button>
				</Link>
			</div>
		</aside>
	)
}
