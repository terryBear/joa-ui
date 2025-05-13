import { Col, Container, Row } from 'react-bootstrap'
import { Banner } from '../components/Banner/Banner'
import { CtaBanner } from '../components/Banner/CtaBanner'
import { DestinationCard } from '../components/Cards/DestinationCard'
import { PageDetail } from '../components/Page/PageDetail/PageDetail'
import { DESTINATIONS } from '../constants/destinations'
import { MainAppLayout } from '../layout/Layout'

export const Destinations = () => {
	return (
		<MainAppLayout>
			<Banner
				hero={true}
				title='Top Luxury Safari Destinations in Africa & Private Wildlife Tours'
				description='Jewel of Africa Safaris is a top-rated private tour operator offering local knowledge on a wide range of destinations from South Africa to its bordering countries and beyond.'
				image='/business/hero/banner-hero-1.jpeg'
			/>
			<Container className='mb-5'>
				<Row className='g-4 my-5'>
					{DESTINATIONS.map((destination) => (
						<Col xs={12} md={6} lg={4} key={destination.id}>
							<DestinationCard destination={destination} />
						</Col>
					))}
				</Row>
			</Container>
			<CtaBanner />
			<PageDetail />
		</MainAppLayout>
	)
}
