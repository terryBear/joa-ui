import { Container } from 'react-bootstrap'
import { CAROUSEL } from '../../../constants/carousel'
import { PageDetailCarousel } from './components/PageDetailCarousel'
import { PageDetailHeader } from './components/PageDetailHeader'
import { PageDetailTabs } from './components/PageDetailTabs'

export const PageDetail = () => {
	return (
		<div className='page-detail bg-white'>
			<Container className='mt-3 mb-5 py-5'>
				<PageDetailHeader />
				<PageDetailCarousel slides={CAROUSEL} />
				<PageDetailTabs />
			</Container>
		</div>
	)
}
