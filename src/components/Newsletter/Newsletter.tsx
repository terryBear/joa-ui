import { Container } from 'react-bootstrap'
import { NewsletterForm } from '../Forms/NewsletterForm'

export const Newsletter = () => {
	return (
		<aside className='banner newsletter'>
			<div className='banner__content'>
				<Container>
					<div className='banner__form'>
						<div className='card'>
							<div className='text-left'>
								<h4 className='text-left'>Subscribe to our Newsletter</h4>
							</div>
							<NewsletterForm />
						</div>
					</div>
				</Container>
			</div>
		</aside>
	)
}
