/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar } from 'primereact/calendar'
import { Chip } from 'primereact/chip'
import { Dropdown } from 'primereact/dropdown'
import { Nullable } from 'primereact/ts-helpers'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { Link, NavLink, useLocation, useParams } from 'react-router'
import { CheckCircle, MinusIcon, PlusIcon } from '../components/Icons/Icons'
import { MapElement } from '../components/Map/Map'
import { PageDetailCarousel } from '../components/Page/PageDetail/components/PageDetailCarousel'
import { SafariTourBooking } from '../components/Tours/SafariTourBooking/SafariTourBooking'
import { TourCard } from '../components/Tours/TourCard/TourCard'
import { MainAppLayout } from '../layout/Layout'
import { useSafariContext } from '../Providers/SafariProvider'
import { useSafariService } from '../services/useSafariService'
import { ItinerarySummary, Tour } from '../types/tours'
import { Divider } from '../ui-library/Divider'
import { formatCurrency } from '../utils'

export const TourPage = () => {
	const { getSafariDetails, getSafariList } = useSafariService()
	const [tours, setTours] = useState<Tour[]>([])

	const getSafariTours = async () => {
		const response = await getSafariList()
		if (response) {
			setTours(response)
		} else {
			console.error('Failed to fetch safari tours')
		}
		setIsLoading(false)
	}

	useEffect(() => {
		setIsLoading(true)
		getSafariTours()
	}, [])
	const { setIsLoading } = useSafariContext()
	const { pathname } = useLocation()
	const [links, setLinks] = useState<string[]>([])
	const { slug } = useParams<{ slug: string }>()
	const [tour, setTour] = useState<Tour | null>(null)
	const [travelDate, setTravelDate] = useState<string | Date | Nullable>(null)
	const [travellers, setTravellers] = useState<any>({
		name: '1 Adult',
		code: 1,
	})
	const [travellersChildren, setTravellersChildren] = useState<any>({
		name: '0 Children',
		code: 0,
	})
	const [book, setBook] = useState<boolean>(false)

	const fetchTour = async (slug: string) => {
		try {
			const response = await getSafariDetails(slug)
			if (response) {
				setTour(response)
			} else {
				console.error('Tour not found')
			}
			setIsLoading(false)
		} catch (error) {
			console.error('Error fetching tour:', error)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		setIsLoading(true)
		if (slug) {
			fetchTour(slug)
		}
		console.log(links)
	}, [slug])

	useEffect(() => {
		if (book) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [book])

	const generateBreadcrumbsLinks = (path: string) => {
		const _links = path.split('/')
		console.log(_links)
		setLinks(_links)
	}

	const Breadcrumb = () => {
		return (
			<p className='mt-xs-5 mb-0 breadcrums-top-nav'>
				{links.map((link: any, index) => {
					if (index === 0) {
						return (
							<>
								<NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
									Home
								</NavLink>
								{links.length > 0 && <span key={index}>{index < links.length - 1 && ' > '}</span>}
							</>
						)
					} else if (index === links.length - 1) {
						return (
							<span className='text-capitalize' key={index}>
								{tour?.title}
							</span>
						)
					} else {
						const _slug = index === 1 ? `destinations/${tour?.destination[0].slug}` : link
						const _title = index === 1 ? tour?.destination[0].title : tour?.title
						return (
							<span className='text-capitalize' key={index}>
								<NavLink to={`/${_slug}`} className={({ isActive }) => (isActive ? 'active' : '')}>
									{_title}
								</NavLink>
								<span key={index}>{index < links.length - 1 && ' > '}</span>
							</span>
						)
					}
				})}
			</p>
		)
	}

	useEffect(() => {
		if (pathname) {
			generateBreadcrumbsLinks(pathname)
		}
	}, [pathname])
	return (
		<MainAppLayout>
			{tour && (
				<>
					<Container className='mt-5 pt-5'>
						<Row className='mt-5'>
							<Col xs={12}>
								<Breadcrumb />
								<h2 className='mt-3'>{tour?.title}</h2>
							</Col>

							<Col xs={12} md={8} lg={9} className=''>
								<PageDetailCarousel size='full' slides={tour.images} />
							</Col>
							<Col xs={12} md={4} lg={3} className=''>
								<div className='card p-4 border-1 mb-3 '>
									<p className='m-0 text-uppercase fw-bolder'>
										<strong>
											<small>from</small>
										</strong>
									</p>
									<h3 className='number-font fw-bolder m-0 text-success'>
										{formatCurrency(tour?.rate[0]?.amount, tour?.rate[0]?.currency)}
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
											onChange={(e) => setTravelDate(e.value)}
											placeholder='Select Departure Date'
											className='w-100'
											value={travelDate ? new Date(travelDate) : null}
										/>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<i className='bi bi-person-square me-3'></i>

										<Dropdown
											value={travellers}
											onChange={(e) => setTravellers(e.value)}
											options={[
												{
													name: '1 Adult',
													code: 1,
												},
												{
													name: '2 Adults',
													code: 2,
												},
												{
													name: '3 Adults',
													code: 3,
												},
												{
													name: '4 Adults',
													code: 4,
												},
												{
													name: '5 Adults',
													code: 5,
												},
												{
													name: '6 Adults',
													code: 6,
												},
												{
													name: '7 Adults',
													code: 7,
												},
												{
													name: '8 Adults',
													code: 8,
												},
												{
													name: '9 Adults',
													code: 9,
												},
												{
													name: '10 Adults',
													code: 10,
												},
											]}
											optionLabel='name'
											placeholder='Select Adults'
											className='w-100'
										/>
									</div>
									<div className='d-flex align-items-center mb-3'>
										<i className='bi bi-person-plus me-3'></i>

										<Dropdown
											value={travellersChildren}
											onChange={(e) => setTravellersChildren(e.value)}
											options={[
												{
													name: '0 Children',
													code: 0,
												},
												{
													name: '1 Children',
													code: 1,
												},
												{
													name: '2 Children',
													code: 2,
												},
												{
													name: '3 Children',
													code: 3,
												},
												{
													name: '4 Children',
													code: 4,
												},
												{
													name: '5 Children',
													code: 5,
												},
												{
													name: '6 Children',
													code: 6,
												},
												{
													name: '7 Children',
													code: 7,
												},
												{
													name: '8 Children',
													code: 8,
												},
												{
													name: '9 Children',
													code: 9,
												},
												{
													name: '10 Children',
													code: 10,
												},
											]}
											optionLabel='name'
											placeholder='Select Children'
											className='w-100'
										/>
									</div>
									<div>
										<Button
											disabled={!travelDate || !travellers}
											variant='info'
											className='m-0 w-100 mb-3'
											onClick={() => setBook(true)}>
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
								<div className='page-detail-tabs' style={{ top: '144px' }}>
									<Tabs defaultActiveKey='overview' id='destinations-tabs' className='my-3' fill>
										<Tab eventKey='overview' title='overview' key='overview'>
											<div
												dangerouslySetInnerHTML={{
													__html: tour?.long_description,
												}}></div>
											<Row className='my-5'>
												<Col xs={12} md={12} className='my-5'>
													<Card className='bg-muted border-1 rounded'>
														<Card.Body className='p-5'>
															<h3 className='mb-3 text-center'>
																Your Safari At a <strong className='text-secondary'>Glance</strong>
															</h3>
															<Row>
																<Col xs={12} md={4} className='my-4'>
																	<Card className='bg-white border-1 rounded text-center h-100'>
																		<Card.Body>
																			<img
																				src='/icons/Destinations.png'
																				alt='Jewel of Africa Safaris Logo'
																				className='img-fluid my-3 icon-image md'
																			/>
																			<h5 className='mb-3'>Countries:</h5>
																			<Divider margin='1em 0' />
																			<div className='px-5'>
																				{tour.destination.map((country: any, _index: number) => (
																					<p key={_index} className='m-0 text-left'>
																						<i className='bi bi-check2-square me-2 text-secondary'></i>
																						{country.title}
																					</p>
																				))}
																			</div>
																		</Card.Body>
																	</Card>
																</Col>
																<Col xs={12} md={4} className='my-4'>
																	<Card className='bg-white border-1 rounded text-center h-100'>
																		<Card.Body>
																			<img
																				src='/icons/Hotel.png'
																				alt='Jewel of Africa Safaris Logo'
																				className='img-fluid my-3 icon-image md'
																			/>
																			<h5 className='mb-3'>Parks & Destinations:</h5>
																			<Divider margin='1em 0' />
																			<div className='px-2'>
																				{tour.lodge.map((lodge: any, _index: number) => (
																					<p key={_index} className='m-0 text-left'>
																						<i className='bi bi-check2-square me-2 text-secondary'></i>
																						{lodge.title}
																					</p>
																				))}
																			</div>
																		</Card.Body>
																	</Card>
																</Col>
																<Col xs={12} md={4} className='my-4'>
																	<Card className='bg-white border-1 rounded text-center h-100'>
																		<Card.Body>
																			<img
																				src='/icons/All-inclusive.png'
																				alt='Jewel of Africa Safaris Logo'
																				className='img-fluid my-3 icon-image md'
																			/>
																			<h5 className='mb-3'>Experience:</h5>
																			<Divider margin='1em 0' />
																			<div className='px-2'>
																				{tour.african_safari_experiences.map(
																					(experience: any, _index: number) => (
																						<p key={_index} className='m-0 text-left'>
																							<i className='bi bi-check2-square me-2 text-secondary'></i>
																							{experience.title}
																						</p>
																					)
																				)}
																			</div>
																		</Card.Body>
																	</Card>
																</Col>
															</Row>
														</Card.Body>
													</Card>
												</Col>
											</Row>
											<Row className='my-5 '>
												<Col xs={12} md={12} className='my-5'>
													<h3 className='mb-3 text-center'>
														Safari <strong className='text-secondary'>Route</strong> and{' '}
														<strong className='text-secondary'>Map</strong>:
													</h3>
													<MapElement tour={tour} />
												</Col>
											</Row>
											<Row className='my-5 '>
												<Col xs={12} md={12} className='my-5'>
													<h3 className='mb-3 text-center'>
														Safari <strong className='text-secondary'>Accommodation</strong> &{' '}
														<strong className='text-secondary'>Meals</strong>
													</h3>
													<p className='text-center'>
														Each handpicked lodge and camp on your journey offers an immersive blend of comfort,
														luxury, and culinary excellence—ensuring your stay is as unforgettable as the
														landscapes you explore.
													</p>
													<div>
														<table className='table table-striped safari-table border-1 rounded'>
															<tbody>
																{tour?.itinerary_summaries?.map(
																	(safari: ItinerarySummary, index: number) => (
																		<React.Fragment key={`safari-${safari.label}`}>
																			<tr>
																				<td>
																					<h4 className='text-secondary m-0'>{safari.label}</h4>
																				</td>
																				{safari.accomodation.length > 0 && (
																					<>
																						{safari.accomodation.map(
																							(accomodation: any, index: number) => (
																								<td key={index}>
																									<img
																										src={accomodation.image}
																										alt={accomodation.title}
																										className='table-img-thumbnail'
																									/>
																								</td>
																							)
																						)}
																						{safari.accomodation.map(
																							(accomodation: any, index: number) => (
																								<td key={index}>
																									<h5 className='mt-3 mb-0'>
																										{accomodation.title}
																									</h5>
																									<h6 className='mb-3 mt-0 fw-light'>
																										{accomodation.location}
																									</h6>
																								</td>
																							)
																						)}
																					</>
																				)}
																				{safari.accomodation.length === 0 && (
																					<>
																						<td></td>
																						<td>
																							<h5 className='m-0'>{safari.description}</h5>
																						</td>
																					</>
																				)}

																				{JSON.parse(safari.meals).map(
																					(meal: any, index: number) => (
																						<td key={index} className='text-center'>
																							<img
																								src={
																									meal === 'Breakfast'
																										? '/icons/Breakfast.png'
																										: meal === 'Lunch'
																										? '/icons/All meals.png'
																										: '/icons/All-inclusive.png'
																								}
																								alt='Jewel of Africa Safaris Logo'
																								className='img-fluid mt-3 icon-image sm'
																							/>
																							<p className='m-0 mb-3'>
																								<small>
																									<strong>{meal}</strong>
																								</small>
																							</p>
																						</td>
																					)
																				)}
																			</tr>
																			{index !== tour?.itinerary_summaries.length - 1 && (
																				<tr style={{ height: '100px', backgroundColor: '#f8f9fa' }}>
																					<td>
																						<Divider
																							width='2px'
																							height='100px'
																							margin='0 50px'
																							layout='vertical'
																						/>
																					</td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																			)}
																		</React.Fragment>
																	)
																)}
															</tbody>
														</table>
													</div>
												</Col>
											</Row>
											<Divider margin='2em 0' />
											<Row className='my-5'>
												<Col xs={12} md={12} className='my-5'>
													<Card className=''>
														<Card.Body className='p-5'>
															<h3 className='mb-3 text-center'>
																What <strong className='text-secondary'>Activities & Transportation</strong>{' '}
																Are Included in This Safari?
															</h3>
															<p className='text-center'>
																Every detail of your journey is thoughtfully arranged—from expertly guided
																excursions and immersive wildlife encounters to seamless transfers by air
																and road—ensuring a smooth, enriching, and luxurious safari experience.
															</p>
															<Row>
																<Col xs={12} md={4} className='my-4'>
																	<Card className='bg-white border-1 rounded text-center h-100'>
																		<Card.Body>
																			<img
																				src='/icons/Binoculars.png'
																				alt='Jewel of Africa Safaris Logo'
																				className='img-fluid my-3 icon-image md'
																			/>
																			<h5 className='mb-3'>Activities Included:</h5>
																			<Divider margin='1em 0' />
																			<div className='px-5'>
																				{tour.destination.map((country: any, _index: number) => (
																					<p key={_index} className='m-0 text-left'>
																						<i className='bi bi-check2-square me-2 text-secondary'></i>
																						{country.title}
																					</p>
																				))}
																			</div>
																		</Card.Body>
																	</Card>
																</Col>
																<Col xs={12} md={4} className='my-4'>
																	<Card className='bg-white border-1 rounded text-center h-100'>
																		<Card.Body>
																			<img
																				src='/icons/Transfers Icon.png'
																				alt='Jewel of Africa Safaris Logo'
																				className='img-fluid my-3 icon-image md'
																			/>
																			<h5 className='mb-3'>Getting Around:</h5>
																			<Divider margin='1em 0' />
																			<div className='px-2'>
																				{tour.lodge.map((lodge: any, _index: number) => (
																					<p key={_index} className='m-0 text-left'>
																						<i className='bi bi-check2-square me-2 text-secondary'></i>
																						{lodge.title}
																					</p>
																				))}
																			</div>
																		</Card.Body>
																	</Card>
																</Col>
																<Col xs={12} md={4} className='my-4'>
																	<Card className='bg-white border-1 rounded text-center h-100'>
																		<Card.Body>
																			<img
																				src='/icons/Tour Guide Icon.png'
																				alt='Jewel of Africa Safaris Logo'
																				className='img-fluid my-3 icon-image md'
																			/>
																			<h5 className='mb-3'>Private Activities:</h5>
																			<Divider margin='1em 0' />
																			<div className='px-2'>
																				{tour.african_safari_experiences.map(
																					(experience: any, _index: number) => (
																						<p key={_index} className='m-0 text-left'>
																							<i className='bi bi-check2-square me-2 text-secondary'></i>
																							{experience.title}
																						</p>
																					)
																				)}
																			</div>
																		</Card.Body>
																	</Card>
																</Col>
															</Row>
														</Card.Body>
													</Card>
												</Col>
											</Row>
											<Divider margin='2em 0' />
											<Row className='my-5'>
												<Col xs={12} md={12} className='my-5'>
													<Card className=''>
														<Card.Body className='p-5'>
															<h3 className='mb-3 text-center'>
																What Are The <strong className='text-secondary'>Features</strong> of This
																Safari?
															</h3>
															<p className='text-center'>
																This journey is designed with flexibility, exclusivity, and personalization
																in mind—whether you're celebrating a honeymoon, traveling with family, or
																seeking premier wildlife encounters. With customizable options, private
																touring, and the freedom to begin your adventure on any date, this safari
																offers the luxury of choice in every detail.
															</p>
														</Card.Body>
													</Card>
												</Col>
											</Row>
										</Tab>
										<Tab eventKey='itinerary' title='Day by Day' key='itinerary'>
											{tour?.itinerary_summaries?.map((safari: ItinerarySummary) => (
												<div key={`safari-${safari.label}`} className='mt-5'>
													<h5>
														{safari.label}: {safari.title}
													</h5>
													<p>{safari.long_description}</p>
													<p>
														{safari.accomodation.map((accomodation: any, key: number) => (
															<Chip
																key={`acc_${key}`}
																label={accomodation.title}
																image='/icons/Accommodation Icon.png'
																className='me-3'
															/>
														))}
													</p>
													<p>
														{JSON.parse(safari.meals).map((meal: any, key: number) => (
															<Chip
																key={`meal_${key}`}
																label={meal}
																image='/icons/Meals Icon.png'
																className='me-3'
															/>
														))}
													</p>
													<Divider width='50%' height='2px' margin='2em auto' />
												</div>
											))}
										</Tab>
										<Tab eventKey='inclusions' title='inclusions' key='inclusions'>
											<Row>
												<Col xs={12} md={6} className='mb-4 border-right-divider'>
													<h5 className='mt-4 mb-5'>
														<PlusIcon className='me-2 text-success' />
														Included?
													</h5>
													{tour?.inclusions?.map((item, index) => (
														<div key={index}>
															<div className='m-0'>
																<p>
																	<strong>{item.title}: </strong>
																</p>
																<p>
																	<span
																		dangerouslySetInnerHTML={{ __html: item.description || '' }}></span>
																</p>
															</div>
														</div>
													))}
												</Col>
												<Col xs={12} md={6} className='mb-4'>
													<h5 className='mt-4 mb-5'>
														<MinusIcon className='me-2 text-danger' />
														Excluded?
													</h5>
													{tour?.exclusions?.map((item, index) => (
														<div key={index}>
															<div className='m-0'>
																<p>
																	<strong>{item.title}: </strong>
																</p>
																<p>
																	<span
																		dangerouslySetInnerHTML={{ __html: item.description || '' }}></span>
																</p>
															</div>
														</div>
													))}
												</Col>
											</Row>
										</Tab>
										<Tab eventKey='rates' title='rates' key='rates'>
											<Row className='my-5'>
												<Col xs={12} md={12} className='my-5'>
													<Card className=''>
														<Card.Body className='p-5'>
															<h3 className='mb-3 text-center'>
																The <strong className='text-secondary'>Price</strong> For This Safari Is:
															</h3>
															<p className='text-center'>
																This rate reflects a fully curated, luxury safari experience—including
																exclusive accommodations, personalized guiding, seamless transfers, and all
																activities—crafted to deliver exceptional value and unforgettable memories.
															</p>
														</Card.Body>
													</Card>
												</Col>
												{tour?.rate?.map((rate) => (
													<Col key={`rate-${rate.year}`} xs={12} md={4} className='my-5'>
														<Card className='bg-white border-1 rounded text-center h-100'>
															<Card.Body>
																<h6 className='mb-3 font-button fw-bold'>{rate.year} Rates</h6>
																<h4 className='font-button'>
																	<strong>Jan 1 - Dec 31 {rate.year}</strong>
																</h4>
																<Divider margin='1em auto' width='50%' height='3px' />
																<div className=''>
																	<h3>From USD {formatCurrency(rate.amount, rate.currency)}</h3>
																	<p>{rate.helper_text}</p>
																</div>
															</Card.Body>
														</Card>
														<h5>Important Aspects to Consider:</h5>
														<p>{rate.rates_important_info}</p>
													</Col>
												))}
											</Row>
										</Tab>
									</Tabs>
								</div>
							</Col>
						</Row>
					</Container>
					<div className='bg-white'>
						<Container>
							<Row>
								<Col xs={12} className='py-5'>
									<h3 className='mt-5 text-center mb-4'>Similar to {tour.title}</h3>
									<Row>
										{tours.map((_tour: Tour, index: number) => {
											if (index >= 3) return null
											if (index < 3) {
												return (
													<Col xs={12} md={4} className='mb-4' key={`similar-index-${_tour.slug}`}>
														<TourCard
															handleClick={(_tour) => {
																console.log(_tour)
															}}
															tour={_tour}
														/>
													</Col>
												)
											}
										})}
									</Row>
									<Row>
										<Col xs={12} className='text-center'>
											<Link to='/safari-tour'>
												<Button type='button' className='mt-3 px-5 mb-5' variant='info'>
													Similar to {tour.title}
												</Button>
											</Link>
										</Col>
									</Row>
								</Col>
								<Divider margin='2em 0' />
								<Col xs={12} className=''>
									<h3 className='mt-5 text-center mb-4'>Similar to {tour.safari_types[0].title}</h3>
									<Row>
										{tours.map((_tour: Tour, index: number) => {
											if (index >= 3) return null
											if (index < 3) {
												return (
													<Col xs={12} md={4} className='mb-4' key={`similar-index-${_tour.slug}`}>
														<TourCard
															handleClick={(_tour) => {
																console.log(_tour)
															}}
															tour={_tour}
														/>
													</Col>
												)
											}
										})}
									</Row>
									<Row>
										<Col xs={12} className='text-center'>
											<Link to='/safari-tour'>
												<Button type='button' className='mt-3 px-5 mb-5' variant='info'>
													Similar to {tour.safari_types[0].title}
												</Button>
											</Link>
										</Col>
									</Row>
								</Col>
								<Divider margin='2em 0' color='transparent' />
							</Row>
						</Container>
					</div>
				</>
			)}
			{book && tour && travelDate && Boolean(travellers) && (
				<SafariTourBooking
					tour={tour}
					travelDate={travelDate}
					travellers={travellers}
					travellersChildren={travellersChildren}
					onBack={() => {
						setBook(false)
					}}
				/>
			)}
		</MainAppLayout>
	)
}
