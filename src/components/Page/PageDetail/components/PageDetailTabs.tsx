import { Button, Col, Row, Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router'
import { DESTINATIONS } from '../../../../constants/destinations'
import { Destination } from '../../../../types/destinations'
import { ReadMore } from '../../../ReadMore/ReadMore'

export const PageDetailTabs = () => {
	return (
		<div className='page-detail-tabs'>
			<Tabs defaultActiveKey={DESTINATIONS[0].slug} id='destinations-tabs' className='my-3' fill>
				{DESTINATIONS.map((destination: Destination) => (
					<Tab eventKey={destination.slug} title={destination.title} key={destination.slug}>
						<p className='mt-5'>{destination.long_description}</p>
						<ReadMore
							align='left'
							expandText='Read More '
							collapseText='Read Less '
							content={
								<>
									<p>
										The advantages of luxury African safaris lie in the exclusive access to remote and pristine wildlife
										areas, where visitors enjoy intimate encounters with Africa’s iconic animals, such as lions,
										elephants, and leopards. Luxury safaris offer personalized itineraries, private guides, and the
										flexibility to customize activities based on individual preferences. The bespoke approach ensures
										guests experience Africa at their own pace, with fewer crowds and more personalized attention,
										making it a truly unforgettable journey.
									</p>

									<p>
										The advantages of luxury African safaris lie in the exclusive access to remote and pristine wildlife
										areas, where visitors enjoy intimate encounters with Africa’s iconic animals, such as lions,
										elephants, and leopards. Luxury safaris offer personalized itineraries, private guides, and the
										flexibility to customize activities based on individual preferences. The bespoke approach ensures
										guests experience Africa at their own pace, with fewer crowds and more personalized attention,
										making it a truly unforgettable journey.
									</p>
								</>
							}
							size='sm'
						/>
						<p className='mb-0 mt-5'></p>
						<Row>
							<Col xs={12} md={1}></Col>
							<Col xs={12} md={10}>
								<Row>
									{/* {TOURS.map((tour) => (
										<Col xs={12} md={4} className='mb-4' key={tour.slug}>
											<TourCard
												handleClick={(tour) => {
													console.log(tour)
												}}
												// @ts-ignore
												tour={tour}
											/>
										</Col>
									))} */}
								</Row>
							</Col>
							<Col xs={12} md={1}></Col>
						</Row>

						<div className='text-center'>
							<Link to={`/destinations/${destination.slug}`}>
								<Button type='button' className='mt-3 px-5 mb-5' size='sm' variant='info'>
									View {destination.title} tours
								</Button>
							</Link>
						</div>
					</Tab>
				))}
			</Tabs>
		</div>
	)
}
