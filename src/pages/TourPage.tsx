/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Calendar } from 'primereact/calendar'
import { Chip } from 'primereact/chip'
import { Dropdown } from 'primereact/dropdown'
import { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { Link, NavLink, useLocation, useParams } from 'react-router'
import { CheckCircle, MinusIcon, PlusIcon } from '../components/Icons/Icons'
import { MapElement } from '../components/Map/Map'
import { PageDetailCarousel } from '../components/Page/PageDetail/components/PageDetailCarousel'
import { TourCard } from '../components/Tours/TourCard/TourCard'
import { CAROUSEL } from '../constants/carousel'
import TOURS from '../datasets/tours.json'
import { useToursService } from '../hooks/useTours.service'
import { MainAppLayout } from '../layout/Layout'
import { ItinerarySummary, Tour, Transportation } from '../types/tours'
import { Divider } from '../ui-library/Divider'
import { formatCurrency } from '../utils'

export const TourPage = () => {
	const { pathname } = useLocation()
	const [links] = useState<string[]>(pathname.split('/'))
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
							<NavLink
								to={`/${
									link === 'destination' ? 'destinations/' + tour?.destination.split(' ').join('-').toLowerCase() : link
								}`}
								className={({ isActive }) => (isActive ? 'active' : '')}>
								{index > 0 ? tour?.destination : link}
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
							<h1 className='mt-3'>{tour?.title}</h1>
						</Col>

						<Col xs={12} md={8} lg={9} className=''>
							<PageDetailCarousel size='full' slides={CAROUSEL} />
						</Col>
						<Col xs={12} md={4} lg={3} className=''>
							<div className='card p-4 border-1 mb-3 '>
								<p className='m-0 text-uppercase fw-bolder'>
									<strong>
										<small>from</small>
									</strong>
								</p>
								<h3 className='number-font fw-bolder m-0 text-success'>
									{formatCurrency(tour?.rates[0]?.amount, tour?.rates[0]?.currency)}
								</h3>
								<p className='m-0 '>
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
									<Button variant='info' className='m-0 w-100 mb-3' onClick={() => console.log('Request Quote')}>
										Request Quote
									</Button>
								</div>
								<p className='mb-1 small'>
									<CheckCircle className='text-info me-2' />
									<i>Obligation Free Quote</i>
								</p>
								<p className='mb-1 small'>
									<CheckCircle className='text-info me-2' />
									<i>Best Price Guarantee</i>
								</p>
							</div>
						</Col>
						<Col xs={12} className=''>
							<div className='page-detail-tabs'>
								<Tabs defaultActiveKey='overview' id='destinations-tabs' className='my-3' fill>
									<Tab eventKey='overview' title='overview' key='overview'>
										<p>{tour.long_description}</p>
										<Divider margin='2em 0' />
										<Row className='mb-5'>
											<Col xs={12} md={6} className='mb-4'>
												<h5 className='mt-4'>Route:</h5>
												<MapElement tour={tour} renderTourMap={true} />
											</Col>
											<Col xs={12} md={6} className='mb-4'>
												<h5 className='mt-4'>Description:</h5>
												<p>
													<strong>Start: {tour?.itinerary_summary[0].location}</strong>
												</p>
												{tour?.itinerary_summary?.map((safari: ItinerarySummary) => (
													<div key={`safari-${safari.label}`}>
														<p>
															<strong>{safari.label}: </strong>
															{safari.description}
														</p>
														<Chip
															label={safari.meals.join(',')}
															image='/icons/Meals Icon.png'
															className='me-3'
														/>
														<Chip
															label={safari.accomodation.join(', ')}
															image='/icons/Accommodation Icon.png'
														/>
														<Divider />
													</div>
												))}
												<p>
													<strong>
														End: {tour?.itinerary_summary[tour?.itinerary_summary.length - 1].location}
													</strong>
												</p>
											</Col>
										</Row>
										<Divider margin='2em 0' />
										<h5 className='mt-4 mb-4'>Activities & Transportation:</h5>
										<Row>
											{tour?.transportation?.map((features: Transportation, index: number) => (
												<Col xs={12} md={12} className='mb-4' key={`highlights-${features.title}`}>
													<div className='d-flex align-items-center'>
														{index === 0 && <img src='/icons/Binoculars.png' className='icon-image me-3' />}
														{index === 1 && (
															<img src='/icons/Tour Guide Icon.png' className='icon-image me-3' />
														)}
														{index === 2 && <img src='/icons/Transfers Icon.png' className='icon-image me-3' />}
														<p className='m-0'>
															<strong>{features.title}: </strong>
															{features.description}
														</p>
													</div>
												</Col>
											))}
										</Row>
										<Divider margin='2em 0' />
										<h5 className='mt-4 mb-4'>Tour Features</h5>
										<Row>
											<Col xs={12} md={6} className='mb-4'>
												<div className='d-flex align-items-center'>
													<img src='/icons/Tour Catagory Icon.png' className='icon-image me-3 mb-3' />
												</div>
												<p>
													<strong>Tour Catagory: </strong>
												</p>
												<ul>
													<li>{tour.exclusivity.join(', ')}</li>
													<li>{tour.sustainability.join(', ')}</li>
												</ul>
											</Col>
											<Col xs={12} md={6} className='mb-4'>
												<div className='d-flex align-items-center'>
													<img src='/icons/Customization Icon.png' className='icon-image me-3 mb-3' />
												</div>
												<p>
													<strong>Customization: </strong>
												</p>
												<p className='m-0'>This safari can be customized to suite your needs</p>
											</Col>
											<Col xs={12} md={6} className='mb-4'>
												<div className='d-flex align-items-center'>
													<img src='/icons/Private Tour Icon.png' className='icon-image me-3 mb-3' />
												</div>
												<p>
													<strong>Private Tour: </strong>
												</p>
												<p className='m-0'>
													This safari is exclusively yours. However, Safari drives are shared, unless you book a
													private safari vehicle
												</p>
											</Col>
											<Col xs={12} md={6} className='mb-4'>
												<div className='d-flex align-items-center'>
													<img src='/icons/Start Date Icon.png' className='icon-image me-3 mb-3' />
												</div>
												<p>
													<strong>Start Date: </strong>
												</p>
												<p className='m-0'>This safari can start on any day</p>
											</Col>
										</Row>
										<Divider margin='2em 0' />
									</Tab>
									<Tab eventKey='itinerary' title='Day by Day' key='itinerary'>
										{tour?.itinerary_summary?.map((safari: ItinerarySummary) => (
											<div key={`safari-${safari.label}`} className='mt-5'>
												<h5>
													{safari.label}: {safari.title}
												</h5>
												<p>{safari.long_description}</p>
												<p>
													{safari.meals.map((meal) => (
														<Chip label={meal} image='/icons/Meals Icon.png' className='me-3' />
													))}
												</p>
												<p>
													{safari.accomodation.map((accomodation) => (
														<Chip label={accomodation} image='/icons/Accommodation Icon.png' className='me-3' />
													))}
												</p>

												<Divider />
											</div>
										))}
									</Tab>
									<Tab eventKey='inclusions' title='inclusions' key='inclusions'>
										<Row>
											<Col xs={12} md={6} className='mb-4 border-right-divider'>
												<h5 className='mt-4 mb-3'>
													<PlusIcon className='me-2 text-success' />
													Included?
												</h5>
												{tour?.inclusions?.map((item, index) => (
													<div key={index}>
														<p>
															<strong>{item.title}: </strong>
															{item.description}
														</p>
													</div>
												))}
											</Col>
											<Col xs={12} md={6} className='mb-4'>
												<h5 className='mt-4 mb-3'>
													<MinusIcon className='me-2 text-danger' />
													Excluded?
												</h5>
												{tour?.exclusions?.map((item, index) => (
													<div key={index}>
														<p>
															<strong>{item.title}: </strong>
															{item.description}
														</p>
													</div>
												))}
											</Col>
										</Row>
									</Tab>
									<Tab eventKey='rates' title='rates' key='rates'>
										<h5>Important Aspects to Consider:</h5>
										<ul>
											<li>Rates are per person and exclude the international flight from/to your home country.</li>
											<li>This tour is not available to groups larger than 4 people.</li>
											<li>
												This tour is offered in US dollars (USD). The ZAR rates shown are converted for information
												purposes only. How do I pay in USD?
											</li>
											<li>This tour accepts children who are 12 years and older. </li>
											<li>
												Rates include a fixed budget for flights during this tour. Flights may cost more, depending
												on travel dates. If so, your quote will reflect this.
											</li>
										</ul>
										<Divider margin='2em 0' />
										<h5>Price Per Person:</h5>
										<table className='rate-table'>
											<tbody>
												{tour?.rates?.map((rate) => (
													<tr key={`rate-${rate.year}`}>
														<td>
															<strong>Jan 1 - Dec 31 {rate.year}</strong>
														</td>
														<td>From USD {formatCurrency(rate.amount, rate.currency)} per person sharing</td>
													</tr>
												))}
											</tbody>
										</table>
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
								{TOURS.map((__tour, _index) => (
									<Col xs={12} md={4} className='mb-4' key={`index-similar-${_index}-${tour.slug}`}>
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
