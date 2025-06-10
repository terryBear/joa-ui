import { Col, Container, Row } from 'react-bootstrap'
import { FAQ } from '../../../../constants/faq'
import { Faq } from '../../../Faq/Faq'

export const PageDetailFaq = () => {
	return (
		<div className='page-detail-faq'>
			<Container>
				<Row>
					<Col xs={12} md={12} className='mb-4'>
						<Faq items={FAQ} />
					</Col>
				</Row>
			</Container>
		</div>
	)
}
