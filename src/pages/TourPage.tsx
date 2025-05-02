/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { Link, NavLink, useLocation, useParams } from 'react-router'
import { MapElement } from '../components/Map/Map'
import { PageDetailCarousel } from '../components/Page/PageDetail/components/PageDetailCarousel'
import { TourCard } from '../components/Tours/TourCard/TourCard'
import { CAROUSEL } from '../constants/carousel'
import TOURS from '../datasets/tours.json'
import { useToursService } from '../hooks/useTours.service'
import { MainAppLayout } from '../layout/Layout'
import { AccomodationType, Features, Highlights, Tour } from '../types/tours'
import { formatCurrency } from '../utils'

export const TourPage = () => {
	const { pathname } = useLocation()
	const links = pathname.split('/')
	const { slug } = useParams<{ slug: string }>()
	const { getBySlug } = useToursService()
	const [tour, setTour] = useState<Tour | null>(null)
	const [travelDate, setTravelDate] = useState<string | null>(null)
	const [travellers, setTravellers] = useState<number>(1)

	const fetchTour = async (slug: string) => {
		try {
			const response = await getBySlug(slug)
			if (response.length > 0) {
				// @ts-ignore
				setTour(response[0])
			} else {
				console.error('Tour not found')
			}
		} catch (error) {
			console.error('Error fetching tour:', error)
		}
	}

	useEffect(() => {
		console.log(slug)
		if (slug) {
			fetchTour(slug)
		}
	}, [slug])

	const Breadcrumb = () => {
		return (
			<p className='mt-xs-5 mb-0'>
				{links.length > 0 && (
					<NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
						Home
					</NavLink>
				)}
				{links.map((link, index) =>
					index === links.length - 1 ? (
						<span className='text-capitalize' key={index}>
							{link.split('-').join(' ')}
						</span>
					) : (
						<span className='text-capitalize' key={index}>
							<NavLink to={`/${link}`} className={({ isActive }) => (isActive ? 'active' : '')}>
								{link.split('-').join(' ')}
							</NavLink>
							<span key={index}>{index < links.length - 1 && ' > '}</span>
						</span>
					)
				)}
			</p>
		)
	}
	return (
		<MainAppLayout>
			{tour && (
				<Container className='mt-5 pt-5'>
					<Row className='mt-5'>
						<Col xs={12}>
							<Breadcrumb />
							<h1 className='m-0'>{tour?.title}</h1>
							<p className='mt-0 mb-4'>{tour?.short_description}</p>
						</Col>

						<Col xs={12} md={8} lg={9} className=''>
							<PageDetailCarousel size='full' slides={CAROUSEL} />
						</Col>
						<Col xs={12} md={4} lg={3} className=''>
							<div className='card p-4 border-1 mb-3 bg-primary'>
								<h4 className='font-family-button fw-bolder m-0 text-white'>
									{formatCurrency(tour?.rates[0]?.amount, tour?.rates[0]?.currency)}
								</h4>
								<p className='m-0 text-white'>
									<small>per person sharing</small>
								</p>
							</div>
							<div className='card p-4 border-1'>
								<h6 className='font-family-button text-uppercase mb-3'>Request A Quote</h6>
								<div className='d-flex align-items-center mb-3'>
									<i className='bi bi-calendar-day me-3'></i>
									<Calendar
										// @ts-ignore
										value={travelDate}
										// @ts-ignore
										onChange={(e) => setTravelDate(e.value)}
										placeholder='Select Departure Date'
										className='w-100'
									/>
								</div>
								<div className='d-flex align-items-center mb-3'>
									<i className='bi bi-person-square me-3'></i>

									<Dropdown
										value={travellers}
										onChange={(e) => setTravellers(e.value)}
										options={[
											{
												name: '1 Traveller',
												code: 1,
											},
											{
												name: '2 Travellers',
												code: 2,
											},
											{
												name: '3 Travellers',
												code: 3,
											},
											{
												name: '4 Travellers',
												code: 4,
											},
											{
												name: '5 Travellers',
												code: 5,
											},
											{
												name: '6 Travellers',
												code: 6,
											},
											{
												name: '7 Travellers',
												code: 7,
											},
											{
												name: '8 Travellers',
												code: 8,
											},
											{
												name: '9 Travellers',
												code: 9,
											},
											{
												name: '10 Travellers',
												code: 10,
											},
										]}
										optionLabel='name'
										placeholder='Select Travellers'
										className='w-100'
									/>
								</div>
								<div>
									<Button
										variant='primary'
										className='m-0 w-100 mb-3'
										size='sm'
										onClick={() => console.log('Request Quote')}>
										Request Quote
									</Button>
								</div>
								<p className='mb-1 small'>
									<i className='bi bi-check-circle text-primary me-3'></i>
									<i>Best Price Guarantee</i>
								</p>
								<p className='mb-1 small'>
									<i className='bi bi-check-circle text-primary me-3'></i>
									<i>Best Price Guarantee</i>
								</p>
								<p className='mb-0 small'>
									<i className='bi bi-check-circle text-primary me-3'></i>
									<i>Best Price Guarantee</i>
								</p>
							</div>
						</Col>
						<Col xs={12} className=''>
							<div className='page-detail-tabs'>
								<Tabs defaultActiveKey='overview' id='destinations-tabs' className='my-3' fill>
									<Tab eventKey='overview' title='overview' key='overview'>
										<h2>Safari Overview</h2>
										<p>{tour.long_description}</p>
										<Row className='mb-5'>
											<Col xs={12} md={6} className='mb-4'>
												<h5 className='mt-4'>Route:</h5>
												<MapElement />
											</Col>
											<Col xs={12} md={6} className='mb-4'>
												<h5 className='mt-4'>Description:</h5>
												<p>Map</p>
											</Col>
										</Row>
										<h5 className='mt-4 mb-4'>Tour Features:</h5>
										<Row>
											{tour?.features?.map((features: Features) => (
												<Col xs={12} md={6} className='mb-4' key={`highlights-${features.title}`}>
													<div className='d-flex align-items-center'>
														<i className='bi bi-check-circle text-primary me-3'></i>
														<p className='m-0'>
															<strong>{features.title}</strong>
															<p className='m-0'>{features.description}</p>
														</p>
													</div>
												</Col>
											))}
										</Row>
										<h5 className='mt-4 mb-4'>Highlights & Activities:</h5>
										<Row>
											{tour?.highlights?.map((highlight: Highlights) => (
												<Col xs={12} md={6} className='mb-4' key={`highlights-${highlight.title}`}>
													<div className='d-flex align-items-center'>
														<i className='bi bi-check-circle text-primary me-3'></i>
														<p className='m-0'>
															<strong>{highlight.title}</strong>
															<p className='m-0'>{highlight.description}</p>
														</p>
													</div>
												</Col>
											))}
										</Row>
										<h5 className='mt-4 mb-3'>Accommodation & Meals:</h5>
										<Row>
											{tour?.accomodation?.map((accomodation: AccomodationType) => (
												<Col xs={12} md={6} className='mb-4' key={`highlights-${accomodation}`}>
													<div className='d-flex align-items-center'>
														<i className='bi bi-check-circle text-primary me-3'></i>
														<p className='m-0'>
															<strong>{accomodation}</strong>
														</p>
													</div>
												</Col>
											))}
										</Row>
									</Tab>
									<Tab eventKey='itinerary' title='Day by Day' key='itinerary'>
										<h2>Day by Day</h2>
										<Accordion defaultActiveKey='0'>
											{tour?.itinerary?.map((day, index) => (
												<Accordion.Item eventKey={index.toString()} key={`itinerary-${day.day}`}>
													<Accordion.Header>
														<h5 className='m-0'>{day.day}</h5>
													</Accordion.Header>
													<Accordion.Body>
														<p>{day.description}</p>
													</Accordion.Body>
												</Accordion.Item>
											))}
										</Accordion>
									</Tab>
									<Tab eventKey='inclusions' title='inclusions' key='inclusions'>
										<Row>
											<Col xs={12} md={6} className='mb-4'>
												<h5 className='mt-4 mb-3'>What's included?</h5>
												{tour?.inclusions?.map((item, index) => (
													<div key={index}>
														<h6 className='font-family-button mt-4'>{item.title}</h6>
														<p>{item.description}</p>
													</div>
												))}
											</Col>
											<Col xs={12} md={6} className='mb-4'>
												<h5 className='mt-4 mb-3'>What's excluded?</h5>
												{tour?.exclusions?.map((item, index) => (
													<div key={index}>
														<h6 className='font-family-button mt-4'>{item.title}</h6>
														<p>{item.description}</p>
													</div>
												))}
											</Col>
										</Row>
									</Tab>
									<Tab eventKey='rates' title='rates' key='rates'>
										<h2>Important to know</h2>
									</Tab>
								</Tabs>
							</div>
						</Col>
						<Col xs={12} className=''>
							<h3 className='mt-5 text-center mb-4'>Similar to {tour.title}</h3>
							<Row>
								{TOURS.map((_tour) => (
									<Col xs={12} md={4} className='mb-4' key={`similar-index-${_tour.slug}`}>
										<TourCard
											handleClick={(_tour) => {
												console.log(_tour)
											}}
											// @ts-ignore
											tour={_tour}
										/>
									</Col>
								))}
							</Row>
							<Row>
								<Col xs={12} className='text-center'>
									<Link to='/safari-tour'>
										<Button type='button' className='mt-3 px-5 mb-5' variant='outline-dark'>
											Similar to {tour.title}
										</Button>
									</Link>
								</Col>
							</Row>
						</Col>
						<Col xs={12} className=''>
							<h3 className='mt-5 text-center mb-4'>Similar to {tour.safari_types[0].title}</h3>
							<Row>
								{TOURS.map((__tour) => (
									<Col xs={12} md={4} className='mb-4' key={`index-similar-${tour.slug}`}>
										<TourCard
											handleClick={(__tour) => {
												console.log(__tour)
											}}
											// @ts-ignore
											tour={__tour}
										/>
									</Col>
								))}
							</Row>
							<Row>
								<Col xs={12} className='text-center'>
									<Link to='/safari-tour'>
										<Button type='button' className='mt-3 px-5 mb-5' variant='outline-dark'>
											Similar to {tour.safari_types[0].title}
										</Button>
									</Link>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			)}
		</MainAppLayout>
	)
}
