/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar } from 'primereact/calendar'
import { Chip } from 'primereact/chip'
import { Dropdown } from 'primereact/dropdown'
import { Nullable } from 'primereact/ts-helpers'
import { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { Link, useLocation, useParams } from 'react-router'
import { CheckCircle, MinusIcon, PlusIcon } from '../components/Icons/Icons'
import { PageDetailCarousel } from '../components/Page/PageDetail/components/PageDetailCarousel'
import { SafariTourBooking } from '../components/Tours/SafariTourBooking/SafariTourBooking'
import { MainAppLayout } from '../layout/Layout'
import { useSafariContext } from '../Providers/SafariProvider'
import { useSafariService } from '../services/useSafariService'
import { ItinerarySummary, Tour } from '../types/tours'
import { Divider } from '../ui-library/Divider'
import { formatCurrency } from '../utils'

export const TourPage = () => {
	const { getSafariDetails } = useSafariService()
	const { setIsLoading } = useSafariContext()
	const { pathname } = useLocation()
	const [links] = useState<string[]>(pathname.split('/'))
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

	const Breadcrumb = () => {
		return (
			<p className='mt-xs-5 mb-0'>
				{/* {links.length > 0 && (
					<NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
						Home
					</NavLink>
				)}
				{links.map((link: any, index) => (
					<span className='text-capitalize' key={index}>
						<NavLink to={`/${link?.slug}`} className={({ isActive }) => (isActive ? 'active' : '')}>
							{index > 0 ? tour?.destination : link.title}
						</NavLink>
						<span key={index}>{index < links.length - 1 && ' > '}</span>
					</span>
				))} */}
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
							<div className='page-detail-tabs'>
								<Tabs defaultActiveKey='overview' id='destinations-tabs' className='my-3' fill>
									<Tab eventKey='overview' title='overview' key='overview'>
										<div
											dangerouslySetInnerHTML={{
												__html: tour?.long_description,
											}}></div>
										<Divider margin='2em 0' />
										<Row className='mb-5'>
											<Col xs={12} md={6} className='mb-4'>
												<h5 className='mt-4'>Route:</h5>
												{/* <MapElement tour={tour} renderTourMap={true} /> */}
											</Col>
											<Col xs={12} md={6} className='mb-4'>
												<h5 className='mt-4'>Description:</h5>
												<p>
													<strong>Start: </strong>
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
													<strong>End:</strong>
												</p>
											</Col>
										</Row>
										<Divider margin='2em 0' />
										<h5 className='mt-4 mb-4'>Activities & Transportation:</h5>
										<Row>{/* {JSON.parse(tour?.transportation)} */}</Row>
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
												{/* <ul>
													<li>{JSON.parse(tour.exclusivity).join(', ')}</li>
													<li>{JSON.parse(tour.sustainability).join(', ')}</li>
												</ul> */}
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
												{/* <p>
													{safari.meals.map((meal) => (
														<Chip label={meal} image='/icons/Meals Icon.png' className='me-3' />
													))}
												</p>
												<p>
													{safari.accomodation.map((accomodation) => (
														<Chip label={accomodation} image='/icons/Accommodation Icon.png' className='me-3' />
													))}
												</p> */}

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
														<p className='d-flex m-0'>
															<strong>{item.title}: </strong>{' '}
															<span
																className='ms-2'
																dangerouslySetInnerHTML={{ __html: item.description || '' }}></span>
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
														<p className='d-flex m-0'>
															<strong>{item.title}: </strong>{' '}
															<span
																className='ms-2'
																dangerouslySetInnerHTML={{ __html: item.description || '' }}></span>
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
										<table className='rate-table'>
											<tbody>
												{tour?.rate?.map((rate) => (
													<tr key={`rate-${rate.year}`}>
														<td>
															<strong>Jan 1 - Dec 31 {rate.year}</strong>
														</td>
														<td>
															From USD {formatCurrency(rate.amount, rate.currency)}{' '}
															{rate.rates_important_info}
														</td>
													</tr>
												))}
											</tbody>
										</table>
										<Divider margin='2em 0' />
									</Tab>
								</Tabs>
							</div>
						</Col>
						<Col xs={12} className=''>
							<h3 className='mt-5 text-center mb-4'>Similar to {tour.title}</h3>
							<Row>
								{/* {TOURS.map((_tour) => (
									<Col xs={12} md={4} className='mb-4' key={`similar-index-${_tour.slug}`}>
										<TourCard
											handleClick={(_tour) => {
												console.log(_tour)
											}}
											// @ts-ignore
											tour={_tour}
										/>
									</Col>
								))} */}
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
							{/* <h3 className='mt-5 text-center mb-4'>Similar to {tour.safari_types[0].title}</h3> */}
							<Row>
								{/* {TOURS.map((__tour, _index) => (
									<Col xs={12} md={4} className='mb-4' key={`index-similar-${_index}-${tour.slug}`}>
										<TourCard
											handleClick={(__tour) => {
												console.log(__tour)
											}}
											// @ts-ignore
											tour={__tour}
										/>
									</Col>
								))} */}
							</Row>
							<Row>
								<Col xs={12} className='text-center'>
									<Link to='/safari-tour'>
										<Button type='button' className='mt-3 px-5 mb-5' variant='outline-dark'>
											{/* Similar to {tour.safari_types[0].title} */}
										</Button>
									</Link>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
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
