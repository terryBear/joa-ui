import React, { FC, JSX, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ChevronRightIcon } from '../Icons/Icons'

export interface FaqItemProps {
	key: string
	question: string
	answer: React.ReactNode | JSX.Element
}

interface FaqProps {
	items: FaqItemProps[]
}

export const Faq: FC<FaqProps> = ({ items = [] }) => {
	const [activeKey, setActiveKey] = useState<number | null>(0)
	console.log('items', items)
	return (
		<Container fluid className='faq-list-container'>
			<Row>
				<Col xs={12} md={4} className='mb-4'>
					<ul className='sticky-auto' style={{ top: 145 }}>
						<li>
							<Button variant='link' onClick={() => setActiveKey(0)} className={`${activeKey === 0 ? 'active' : ''}`}>
								<ChevronRightIcon className='me-2' />
								What Makes Luxury Safari Tour differ from Traditional Safaris?
							</Button>
						</li>
						<li>
							<Button variant='link' onClick={() => setActiveKey(1)} className={`${activeKey === 1 ? 'active' : ''}`}>
								<ChevronRightIcon className='me-2' />
								How to Book a Luxury Safari Tour?
							</Button>
						</li>
						<li>
							<Button variant='link' onClick={() => setActiveKey(2)} className={`${activeKey === 2 ? 'active' : ''}`}>
								<ChevronRightIcon className='me-2' />
								What Unique Experience does Luxury Safari Tour Offer?
							</Button>
						</li>
						<li>
							<Button variant='link' onClick={() => setActiveKey(3)} className={`${activeKey === 3 ? 'active' : ''}`}>
								<ChevronRightIcon className='me-2' />
								Why Choose Jewel of Africa Safaris for Luxury Safari Tour?
							</Button>
						</li>
					</ul>
				</Col>
				<Col xs={12} md={8} className='mb-4'>
					<div className={`faq-answer ${activeKey === 0 ? 'active' : ''}`}>
						<p>
							Luxury Safari Tour differs from Traditional Safaris by offering a higher level of exclusivity, comfort, and
							personalization, all of which come at a premium cost. The cost of traditional safaris is less, but they involve
							group activities and standard accommodations. Luxury safaris are tailored to individual preferences, with
							private game drives, luxurious lodges, and gourmet dining experiences that set them apart in quality and price.
							The cost of a luxury safari is higher due to the premium services, exclusive access to private reserves, and
							personalized itineraries that are not typical in traditional safaris.
						</p>
						<p>
							A luxury safari provides a more comprehensive and immersive experience in terms of content. Luxury safari lodges
							include additional activities such as hot air balloon rides, private bush walks with expert guides and even spa
							treatments within the lodge. These experiences offer a deeper connection to the wildlife and landscape, while
							traditional safaris focus solely on game drives and standard wildlife viewing activities. The length of a luxury
							safari tour is customized to fit the traveler's preferences, whereas traditional safaris tend to follow fixed
							itineraries.
						</p>
						<p>
							The quality of accommodations and service is another defining feature of a Luxury Safari Tour. Luxury lodges and
							camps provide world-class amenities, including spacious suites, private pools, and fine dining experiences that
							feature locally sourced cuisine and premium wines. Traditional safaris offer more basic lodges or tented camps
							with communal dining and fewer amenities. The safety standards on luxury safaris are higher, with more secure
							lodges, better-maintained vehicles, and experienced guides trained to handle diverse situations. The enhanced
							safety is not found on more budget-friendly, traditional safaris.
						</p>
						<p>
							Exclusivity is one of the most prominent differences between the two types of safaris. Guests have access to
							private reserves and exclusive areas with fewer tourists on a Luxury Safari Tour, offering more intimate
							wildlife encounters. Private game drives are tailored to the guest’s interests, and activities are customized to
							fit personal schedules and preferences. The level of customizability is rarely found on traditional safaris,
							where itineraries are fixed and activities are shared with other travelers, making luxury safaris stand out as a
							more personalized and exclusive option for discerning travelers
						</p>
					</div>
					<div className={`faq-answer ${activeKey === 1 ? 'active' : ''}`}></div>
					<div className={`faq-answer ${activeKey === 2 ? 'active' : ''}`}></div>
					<div className={`faq-answer ${activeKey === 3 ? 'active' : ''}`}></div>
				</Col>
			</Row>
		</Container>
	)
}
