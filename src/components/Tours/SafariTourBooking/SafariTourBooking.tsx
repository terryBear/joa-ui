/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Tour } from '../../../types/tours'
import { formatCurrency } from '../../../utils'
import { TourBookingForm } from '../../Forms/TourBooking'
import { RightArrow, StarIconFilled, StarIconOutline } from '../../Icons/Icons'
import { colClass } from '../../Team/Team'

interface SafariTourBookingProps {
	tour: Tour
	travelDate: string | Date | number
	travellers: any
	travellersChildren: any
	onBack?: () => void
}

export const SafariTourBooking = ({ tour, travelDate, travellers, travellersChildren, onBack = () => {} }: SafariTourBookingProps) => {
	return (
		<div className='safari-tour-booking'>
			<Container className='py-4 bg-white'>
				<Button variant='primary' className='mb-3' onClick={onBack}>
					Back
				</Button>
				<Row>
					<Col xs={12} md={12}>
						<div className='my-5'>
							<span>
								<span
									style={{
										backgroundColor: 'var(--bs-info)',
										borderRadius: 30,
										marginRight: 10,
										color: '#fff',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: 30,
										height: 30,
									}}>
									1
								</span>
								<strong className='text-info'>Choose your safari</strong>
								<RightArrow className='ms-2 text-info me-4' />
							</span>
							<span>
								<span
									style={{
										backgroundColor: 'var(--bs-info)',
										borderRadius: 30,
										marginRight: 10,
										color: '#fff',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: 30,
										height: 30,
									}}>
									2
								</span>
								<strong className='text-info'>Enter your detail</strong>
								<RightArrow className='ms-2 text-info me-4' />
							</span>
							<span>
								<span
									style={{
										backgroundColor: 'var(--bs-dark)',
										borderRadius: 30,
										marginRight: 10,
										color: '#fff',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: 30,
										height: 30,
									}}>
									3
								</span>
								<strong>Travel Specialist email your Quote</strong>
							</span>
						</div>
					</Col>
					<Col xs={12} md={8}>
						<Card className='border-1'>
							<img src={tour?.featured_image} alt={tour?.title} className='card-img-top' />
							<Card.Body>
								{tour?.title && <Card.Title>{tour.title}</Card.Title>}

								<p className='tour-detail m-0'>
									<strong>Countries: </strong>
									{tour.destination
										.map((dest: any, _index: number) => {
											const dest_types = dest?.destination_type?.map((type: any) => type.name) ?? []
											if (dest_types.includes('Country')) {
												return dest.title
											}
											return null
										})
										.join(', ')}
								</p>
								<p className='tour-detail m-0'>
									<strong>Destinations: </strong>{' '}
									<span>{tour.destination.map((dest: any, _index: number) => dest.title).join(', ')}</span>
								</p>
								<p className='tour-detail m-0'>
									<strong>Experiences: </strong>{' '}
									{tour.african_safari_experiences.map((dest: any, _index: number) => dest.title).join(', ')}
								</p>
								<p className='tour-detail m-0'>
									{Array.from({ length: Number(tour.rating) }, (_, _i) => (
										<StarIconFilled key={_i} className='me-1' />
									))}
									{Array.from({ length: 5 - Math.floor(Number(tour.rating)) }, (_, _i) => (
										<StarIconOutline key={_i} className='me-1' />
									))}
									{tour.rating ? tour.rating : 'No rating yet'} from {tour.reviews?.length ?? 'No '} reviews
								</p>
							</Card.Body>
						</Card>
						<Card className='border-1 my-5'>
							<Card.Body className='bg-white'>
								<TourBookingForm
									tour={tour}
									travellersChildren={travellersChildren}
									travellers={travellers}
									travelDate={travelDate}
								/>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={4}>
						<Card className='border-1'>
							<Card.Header className='bg-dark text-white text-center'>
								<Card.Title>Safari details</Card.Title>
							</Card.Header>
							<Card.Body className=''>
								<table className='about-us-table'>
									<tbody>
										<tr>
											<td
												className={colClass}
												style={{
													width: '20%',
												}}>
												<img
													src='/icons/Start Date Icon.png'
													alt='Jewel of Africa Safaris Logo'
													className='inline-icon-image lg'
												/>
											</td>
											<td>
												<p className='m-0'>Travel Date:</p>
												<p className='m-0 fw-bold'>
													{new Date(travelDate).getDate()}, {new Date(travelDate).getMonth()},{' '}
													{new Date(travelDate).getUTCFullYear()}
												</p>
												<p className='m-0'>
													<Button variant='link' className='p-0 text-decoration-none text-info' onClick={onBack}>
														Edit
													</Button>
												</p>
											</td>
										</tr>
										<tr>
											<td
												className={colClass}
												style={{
													width: '20%',
												}}>
												<img
													src='/icons/Travellers Info Icon.png'
													alt='Jewel of Africa Safaris Logo'
													className='inline-icon-image lg'
												/>
											</td>
											<td>
												<p className='m-0'>Travellers:</p>
												<p className='m-0 fw-bold'>
													{travellers?.code} Adults, {travellersChildren?.code} Children
												</p>
												<p className='m-0'>
													<Button variant='link' className='p-0 text-decoration-none text-info' onClick={onBack}>
														Edit
													</Button>
												</p>
											</td>
										</tr>
										<tr>
											<td
												className={colClass}
												style={{
													width: '20%',
												}}>
												<img
													src='/icons/Price Tag Icon.png'
													alt='Jewel of Africa Safaris Logo'
													className='inline-icon-image lg'
												/>
											</td>
											<td>
												<p className='m-0'>Trip Price:</p>
												<p className='m-0 fw-bold'>
													From {formatCurrency(tour?.rate[0]?.amount, tour?.rate[0]?.currency)}{' '}
													{tour?.rate[0]?.rates_important_info}
												</p>
											</td>
										</tr>
									</tbody>
								</table>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
