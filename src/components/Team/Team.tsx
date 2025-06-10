/* eslint-disable @typescript-eslint/no-explicit-any */
import { Timeline } from 'primereact/timeline'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { Divider } from '../../ui-library/Divider'
import { AboutUsCtaBanner } from '../Banner/AboutUsCtaBanner'
import { Banner } from '../Banner/Banner'
import { SectionalImage } from '../SectionalImage/SectionalImage'

export const colStyle = {
	width: '30%',
}

export const colClass = 'text-secondary fw-bold'

export const Team = () => {
	const bookingProcess = [
		{
			index: 1,
			title: '1. Browse & Dream:',
			description:
				'Explore our Luxury Safari Collection to spark ideas, compare itineraries, and note lodges or experiences that excite you.',
		},
		{
			index: 2,
			title: '2. Request a Custom Quote:',
			description: 'Click “Request a Quote” (or Contact Us) and submit travel dates, group size, budget, and any special interest',
		},
		{
			index: 3,
			title: '3. One-on-One Consultation:',
			description:
				'Within 24 hours a senior Travel Specialist schedules a call or video chat, clarifies priorities, and advises on seasonality, health, and logistics.',
		},
		{
			index: 4,
			title: '4. Receive & Refine Your Proposal:',
			description:
				'Get a detailed, day-by-day draft with pricing, lodge images, and flight plan; tweak as much as you wish until every detail is perfect.',
		},
		{
			index: 5,
			title: '5. Confirm with a 30 % Deposit:',
			description:
				'Secure lodges and flights by card or wire; we issue your booking pack, lock in services, and assign a 24/7 concierge for on-trip support.',
		},
	]
	const customizedMarker = (item: any) => {
		return (
			<span className='flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 bg-secondary'>
				{item.index}
			</span>
		)
	}

	const customizedContent = (item: any) => {
		return (
			<div className='time-content'>
				<h6 className='m-0 mb-3 letter-spacing-0'>{item.title}</h6>
				<p className='m-0'>{item.description}</p>
			</div>
		)
	}

	return (
		<div className='meet-the-team'>
			<Container className='py-5 my-5'>
				<Row>
					<Col xs={12}>
						<Card className='border-1 mb-5 bg-white rounded'>
							<Card.Body>
								<Card.Title className={`text-center h1 ${colClass}`}>Fast Facts</Card.Title>
								<table className='about-us-table'>
									<tbody>
										<tr>
											<td className={colClass} style={colStyle}>
												<img
													src='/icons/Location.png'
													alt='Jewel of Africa Safaris Logo'
													className='inline-icon-image'
												/>
												Founded:
											</td>
											<td>March 1, 2024</td>
										</tr>
										<tr>
											<td className={colClass} style={colStyle}>
												<img
													src='/icons/Time.png'
													alt='Jewel of Africa Safaris Logo'
													className='inline-icon-image'
												/>
												Years in Operation:
											</td>
											<td>21 Years</td>
										</tr>
										<tr>
											<td className={colClass} style={colStyle}>
												<img
													src='/icons/Founders.png'
													alt='Jewel of Africa Safaris Logo'
													className='inline-icon-image'
												/>
												Founders:
											</td>
											<td>Kobus & Neil de Jonge</td>
										</tr>
										<tr>
											<td className={colClass} style={colStyle}>
												<img
													src='/icons/Manager.png'
													alt='Jewel of Africa Safaris Logo'
													className='inline-icon-image'
												/>
												Managing Director:
											</td>
											<td>Neil de Jonge</td>
										</tr>
										<tr>
											<td className={colClass} style={colStyle}>
												<img
													src='/icons/Service.png'
													alt='Jewel of Africa Safaris Logo'
													className='inline-icon-image'
												/>
												Core Service:
											</td>
											<td>Luxury African Safaris, Tailored Tours, Private Safaris</td>
										</tr>
										<tr>
											<td className={colClass} style={colStyle}>
												<img
													src='/icons/Destinations.png'
													alt='Jewel of Africa Safaris Logo'
													className='inline-icon-image'
												/>
												Top Destinations:
											</td>
											<td>South Africa, Namibia, Botswana, Zambia, Zimbabwe,</td>
										</tr>
										<tr>
											<td className={colClass} style={colStyle}></td>
											<td>Kenya, Tanzania, Rwanda, Uganda, Mozambique</td>
										</tr>
									</tbody>
								</table>
							</Card.Body>
						</Card>
						<p className='mb-5'>
							Founded in 2004 by South African tourism pioneer Kobus de Jonge and his son Neil de Jonge, Jewel of Africa
							Safaris is a family-owned luxury safari operator specializing in private, tailor-made journeys across Southern
							and Eastern Africa. Born from a deep-rooted love for Africa and a commitment to sharing its wonders with the
							world, the company has grown into a trusted name in bespoke travel, delivering experiences that are immersive,
							safe, and unforgettable.
						</p>
						<p className='mb-5'>
							For over 20 years, we’ve designed personalized safaris that blend comfort, adventure, and authenticity. Now
							under the leadership of Neil de Jonge, a qualified safari guide and the founder’s son, Jewel of Africa Safaris
							continues to evolve while honoring its legacy. Neil’s firsthand knowledge of the continent, combined with his
							innovative spirit, ensures every itinerary reflects local expertise and global expectations.
						</p>
						<p className='mb-5'>
							We offer luxury African safari tours that are consistent in quality, flexible in design, and varied in
							destination. Whether you dream of tracking big cats in the Sabi Sands, sailing the waters of the Okavango Delta,
							or standing in awe at the edge of Victoria Falls, our journeys are tailored to you, with exclusive access to top
							safari destinations and rare, intimate wildlife encounters. Each safari is crafted with meticulous attention to
							detail, placing safety, comfort, and storytelling at the heart of the experience.
						</p>
						<p className='mb-5'>
							Our portfolio includes privately guided safaris, luxury lodge circuits, family-friendly wildlife journeys, and
							coastal add-ons to the Indian Ocean islands. [Explore our destinations] and discover how our curated experiences
							immerse you in the richness of Africa. With a founding team comprising Kobus and Neil de Jonge, our company
							remains proudly family-run. Every journey is infused with their shared passion, personal relationships with
							local partners, and a vision to create safaris that leave a lasting impact on travelers and on Africa itself.
						</p>

						<Divider />
					</Col>
				</Row>
			</Container>

			<Banner
				hero={false}
				title={<>Award Winning African Safaris</>}
				description="International Travel Awards - Best Luxury Tour Operator in Southern Africa, and TripAdvisor’s - Traveller's Choice Awards in 2017, 2020, 2024 & 2024. Book with Jewel of Africa Safaris and enjoy exceptional service and quality."
				image='/images/Banner - Call to action.jpg'
				className='text-center h50'
				button={
					<>
						<Link to='/safari-tour'>
							<Button type='button' className='mt-3 px-5 me-3' variant='outline-info'>
								African Safaris
							</Button>
						</Link>
						<Link to='/reviews'>
							<Button type='button' className='mt-3 px-5' variant='info'>
								African Safari Reviews
							</Button>
						</Link>
					</>
				}
			/>
			<div className='sectional-bg'>
				<Container className='py-5 my-0'>
					<Row className='my-5 py-5'>
						<Col xs={12} sm={5}>
							<SectionalImage image='/images/Other - Nam Baloon.jpg' />
						</Col>
						<Col className='ps-5' xs={12} sm={7}>
							<h3>
								What is the <strong className='text-secondary'>Mission</strong> of Jewel Of Africa Safaris?
							</h3>
							<p>
								<strong>
									The mission of Jewel of Africa Safaris is to deliver exceptional, personalized safari experiences that
									immerse guests in Africa’s breathtaking beauty and rich culture while ensuring the highest standards of
									luxury, comfort, and safety.
								</strong>
							</p>
							<p>How This Mission Impacts Your Experience:</p>
							<ul>
								<li>
									<strong>Every safari is tailored</strong> to your unique preferences, ensuring a one-of-a-kind
									adventure.
								</li>
								<li>
									<strong>Luxury and comfort are paramount,</strong> with handpicked accommodations that elevate your
									journey.
								</li>
								<li>
									<strong>Safety is our priority,</strong> allowing you to explore Africa’s untamed wilderness with
									complete peace of mind.
								</li>
								<li>
									<strong>Cultural immersion through authentic encounters</strong> with local communities enriches your
									understanding of Africa’s heritage.
								</li>
							</ul>
							<p>
								Our mission defines who we are and what we offer. It reflects our commitment to providing a transformative
								safari journey that leaves you with cherished memories and a deep appreciation for Africa.
							</p>
						</Col>
					</Row>
					<Row className='my-5 py-5'>
						<Col className='pe-5' xs={12} sm={7}>
							<h3>
								What is the <strong className='text-secondary'>Vision</strong> of Jewel Of Africa Safaris?
							</h3>
							<p>
								<strong>
									The vision of Jewel of Africa Safaris is to craft unparalleled bespoke safari experiences that not only
									fulfill dreams but leave every traveler with lasting memories, a renewed spirit, and a lifelong
									connection to the heart of Africa and its diverse cultures.
								</strong>
							</p>
							<p>How This Vision Shapes Your Journey:</p>
							<ul>
								<li>
									<strong>Dream-Fulfilling Experiences:</strong> Every safari is designed to turn your travel aspirations
									into reality, delivering personalized adventures that go beyond expectations.
								</li>
								<li>
									<strong>Lasting Memories:</strong> From breathtaking wildlife encounters to immersive cultural
									interactions, your safari will create moments you’ll treasure forever.
								</li>
								<li>
									<strong>Renewed Spirit:</strong> Our safaris are not just about exploring; they’re about reconnecting
									with nature and yourself, leaving you feeling refreshed and inspired.
								</li>
								<li>
									<strong>A Lifelong Connection to Africa:</strong> By immersing you in Africa’s beauty and traditions, we
									foster a deep appreciation for the continent that lasts a lifetime.
								</li>
							</ul>
						</Col>
						<Col xs={12} sm={5}>
							<SectionalImage image='/images/Family.jpg' />
						</Col>
					</Row>
					<Row className='my-5 py-5'>
						<Col xs={12} sm={5}>
							<SectionalImage image='/images/Safari.jpg' />
						</Col>
						<Col className='ps-5' xs={12} sm={7}>
							<h3>
								What is the <strong className='text-secondary'>Purpose</strong> of Jewel Of Africa Safaris?
							</h3>
							<p>
								<strong>
									Jewel of Africa Safaris aims to design bespoke, high-end safari experiences across Africa, combining
									personalized service, expert local knowledge, and exceptional attention to detail, ensuring every
									traveler experiences the magic of Africa in comfort and style.
								</strong>
							</p>
							<p>How This Purpose Translates Into Your Safari Experience:</p>
							<ul>
								<li>
									<strong>Tailored Adventures:</strong> Every safari is designed to match your unique interests, whether
									exploring the Serengeti’s migration, relaxing in the Okavango Delta, or enjoying Big Five game drives in
									Kruger.
								</li>
								<li>
									<strong>Local Expertise:</strong> Our guides and planners use their deep local knowledge to create
									authentic and immersive experiences that showcase the best of Africa.
								</li>
								<li>
									<strong>Luxury and Comfort:</strong> From opulent lodges to seamless transportation, we ensure every
									moment of your journey is indulgent and stress-free.
								</li>
								<li>
									<strong>Unmatched Attention to Detail:</strong> Every aspect of your safari is carefully crafted, from
									the smallest personal touches to the grandest adventures, ensuring an unforgettable trip.
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
			<Container className='py-5 my-0'>
				<Row>
					<Col xs={12} sm={12}>
						<h2 className='text-center'>
							<strong className='text-secondary'>Why Travel</strong> With Us?
						</h2>
					</Col>
					<Col xs={12} sm={4}>
						<Card className='border-1 mt-5 rounded'>
							<Card.Header className='text-center bg-secondary p-3'>
								<h5 className='text-white text-center m-0'>How Does Jewel of Africa Safaris Make Safari Tours Special?</h5>
							</Card.Header>
							<Card.Body className='bg-white rounded'>
								<p>
									<strong>
										We create truly private, luxury safaris powered by two decades of on-the-ground expertise and
										exclusive access to Africa’s most protected wild spaces.
									</strong>
								</p>
								<p>
									Our Cape Town team hand-builds every itinerary—no templates—then pairs you with guides who live the
									landscapes you’ll explore. Because we operate inside private game reserves and community concessions,
									you enjoy uncrowded wildlife encounters, night drives, and lodge suites chosen for intimacy rather than
									size.
								</p>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} sm={4}>
						<Card className='border-1 mt-5 rounded'>
							<Card.Header className='text-center bg-secondary p-3'>
								<h5 className='text-white text-center m-0'>What Does Jewel of Africa Safaris Offer Travelers?</h5>
							</Card.Header>
							<Card.Body className='bg-white rounded'>
								<p>
									<strong>
										We deliver bespoke adventures that fuse comfort, safety, and unrivalled variety across Africa’s
										headline destinations.
									</strong>
								</p>
								<div className='card-section-item'>
									<img src='/icons/Service.png' alt='Jewel of Africa Safaris Logo' className='inline-icon-image' />
									<strong className='text-secondary'>Tailored African Safari Tours</strong>
								</div>
								<div className='card-section-item'>
									<strong className='text-secondary'>Iconic Destinations</strong>
								</div>
								<div className='card-section-item'>
									<strong className='text-secondary'>Luxury & Security</strong>
								</div>
								<div className='card-section-item'>
									<strong className='text-secondary'>Flexibility & Variety</strong>
								</div>
								<div className='card-section-item'>
									<strong className='text-secondary'>Signature Experiences</strong>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} sm={4}>
						<Card className='border-1 mt-5 rounded'>
							<Card.Header className='text-center bg-secondary p-3'>
								<h5 className='text-white text-center m-0'>How Does Jewel of Africa Safaris Make Safari Tours Special?</h5>
							</Card.Header>
							<Card.Body className='bg-white rounded'>
								<p>
									<strong>
										Your journey is led by a second-generation safari family and Africa’s top private guides.
									</strong>
								</p>
								<p>
									President Neil de Jonge (FGASA-qualified) oversees every itinerary, drawing on lessons from founder
									Kobus de Jonge, who still consults on route design and lodge curation. In the field, our hand-selected
									guides—many raised near the reserves they interpret—blend naturalist insight, cultural fluency, and
									conservation ethics, turning sightings into stories you’ll recount for life.
								</p>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} sm={3}></Col>
					<Col xs={12} sm={6} className='mb-5'>
						<Card className='border-1 mt-5 rounded bg-white mb-5'>
							<Card.Body className='text-center'>
								<h5 className=''>
									<strong className='text-secondary'>Fast Facts</strong> about Jewel of Africa Safaris
								</h5>

								<div>
									<strong>98 % “Excellent” TripAdvisor reviews</strong> (1 500+ guests)
								</div>
								<div>
									<strong>12 countries covered,</strong> 100+ vetted lodges
								</div>
								<div>
									<strong>Average guide tenure:</strong> 12 years | NQF L4
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Divider />
				</Row>
				<Row className='my-5 pb-5'>
					<Col xs={12} sm={12}>
						<h2 className='text-center my-5'>
							<strong className='text-secondary'>Who is the Owner</strong> of JOA (Jewel of Africa)
						</h2>
						<p>
							<strong>Jewel of Africa Safaris is owned and led by Neil de Jonge,</strong> a qualified safari ranger and
							Tourism-Management graduate who assumed full control in 2019 after his father and founder, Kobus de Jonge,
							stepped back from day-to-day operations.
						</p>
						<p>
							<strong>Together, father and son combine more than 40 years</strong> of frontline safari expertise to guide the
							company’s strategic vision while safeguarding the personal touch that has defined JOA since its founding in
							2004. Neil directs product design, partner relations, and client care, while Kobus remains an advisory presence,
							lending decades of bushcraft and logistics insight.
						</p>
						<p>
							Our multidisciplinary team—supported by FGASA-certified field guides, veteran logistics managers, and a 24/7
							concierge desk—works in concert to craft luxurious, immersive, and unquestionably safe journeys. From private
							charter coordination to real-time medical contingency planning, each expert adds a layer of assurance so you can
							focus on the wonder of Africa.
						</p>

						<h3 className='text-center mt-5'>
							Meet Our <strong className='text-secondary'>Team:</strong>
						</h3>
					</Col>
					<Col xs={12} sm={3}>
						<Card className='border-1 mt-5 rounded bg-muted'>
							<img src='/business/team/Kobus-de-Jonge-Founder.jpg.webp' className='img-responsive' />
							<Card.Body>
								<h6 className='text-center m-0'>Kobus de Jonge</h6>
								<h6
									className='text-center mb-3 text-secondary '
									style={{
										minHeight: '40px',
									}}>
									<small className='fw-bold'>Founder</small>
									<br />
									<br />
								</h6>
								<p>
									<strong>Role:</strong> Sets overarching safari vision, vets new routes, mentors guides, guaranteeing
									authenticity, safety and enduring company values.
								</p>
								<a href='mailto:info@joasafaris.com' className='text-info'>
									Contact: info@joasafaris.com
								</a>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} sm={3}>
						<Card className='border-1 mt-5 rounded bg-muted'>
							<img src='/business/team/Neil-de-Jonge-Managing-Director.jpg.webp' className='img-responsive' />
							<Card.Body>
								<h6 className='text-center m-0'>Neil de Jonge</h6>
								<h6
									className='text-center mb-3 text-secondary '
									style={{
										minHeight: '40px',
									}}>
									<small className='fw-bold'>
										Director & Owner
										<br />
										<br />
									</small>
								</h6>
								<p>
									<strong>Role:</strong> Steers strategic growth, forges premier lodge partnerships, and applies guiding
									expertise to enrich every client itinerary.
								</p>
								<a href='mailto:neil@joasafaris.com' className='text-info'>
									Contact: neil@joasafaris.com
								</a>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} sm={3}>
						<Card className='border-1 mt-5 rounded bg-muted'>
							<img src='/business/team/Elize-Loubser-Sales-Operations-Manager.jpg.webp' className='img-responsive' />
							<Card.Body>
								<h6 className='text-center m-0'>Elize Loubser</h6>
								<h6
									className='text-center mb-3 text-secondary '
									style={{
										minHeight: '40px',
									}}>
									<small className='fw-bold'>Manager & Travel Specialist</small>
								</h6>
								<p>
									<strong>Role:</strong> Orchestrates supplier relations, crafts bespoke luxury itineraries, and
									supervises operations for seamless guest experiences.
								</p>
								<a href='mailto:elize@joasafaris.com' className='text-info'>
									Contact: elize@joasafaris.com
								</a>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} sm={3}>
						<Card className='border-1 mt-5 rounded bg-muted'>
							<img src='/business/team/Adele-Fouche-Reservations-Travel-Specialist.jpg.webp' className='img-responsive' />
							<Card.Body>
								<h6 className='text-center m-0'>Adele Fouche</h6>
								<h6
									className='text-center mb-3 text-secondary '
									style={{
										minHeight: '40px',
									}}>
									<small className='fw-bold'>Reservations & Travel Specialist</small>
								</h6>
								<p>
									<strong>Role:</strong> Secures prime availability, handles complex logistics, and designs coastal
									extensions complementing inland wildlife safaris.
								</p>
								<a href='mailto:adele@joasafaris.com' className='text-info'>
									Contact: adele@joasafaris.com
								</a>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<div className='bg-white'>
				<Container className='py-5 mt-5'>
					<Row>
						<Col xs={12} sm={12}>
							<div className='px-5 text-center'>
								<h2>
									What Are the <strong className='text-secondary'>Services Offered</strong> <br />
									by Jewel of Africa Safaris?
								</h2>
								<p>
									We provide an end-to-end luxury travel service—consulting, designing, operating, and supporting bespoke
									African journeys—plus a portfolio of curated experience categories that guests can mix and match.
								</p>
							</div>
						</Col>
					</Row>
					<Row className='my-5 py-5'>
						<Col xs={12} sm={5}>
							<SectionalImage image='/images/JOA_Header_AboutUs.jpg' />
						</Col>
						<Col className='ps-5' xs={12} sm={7}>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>1. Tailor-Made Itinerary Design:</h5>
							<p>
								We begin with an in-depth consultation, then craft bespoke routing, hand-pick lodges, schedule activities
								and transfers, orchestrating each day’s tempo around your personal interests and style.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>2. Private Guiding & Specialist Guides:</h5>
							<p>
								FGASA-certified big-game drivers, photographic tutors, birding experts and walking guides interpret
								behavior, track quietly, and adapt commentary to your individual passions throughout the journey.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>3. Aviation & Ground Logistics:</h5>
							<p>
								From private charters and helicopter hops to luxury 4×4 vehicles, we synchronize every airstrip, border
								crossing and road segment, ensuring smooth, time-saving transitions between remote wilderness areas.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>4. 24/7 Concierge & On-Trip Support:</h5>
							<p>
								Our round-the-clock concierge monitors movements via WhatsApp, books restaurants or spas, fast-tracks
								airports, troubleshoots delays, and provides immediate medical or security liaison wherever you roam.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>5. Travel Documentation & Insurance Facilitation:</h5>
							<p>
								We streamline formalities with proactive visa advice, vaccination reminders, detailed health briefs, and
								links to insurers offering cancel-for-any-reason cover, medical evacuation, and high-value gear protection.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>6. Conservation & Community Integration:</h5>
							<p>
								Visit vetted community projects, fund anti-poaching patrols, join researcher briefings, or plant trees; we
								weave meaningful conservation impact seamlessly into every luxury itinerary.
							</p>
							<Divider />
						</Col>
					</Row>
					<Divider />
					<Row>
						<Col xs={12} sm={12}>
							<div className='px-5 text-center mt-5'>
								<h2 className='mt-5'>
									<strong className='text-secondary'>TripAdvisor Reviews</strong> for African Safaris
								</h2>
								<p>
									TripAdvisor reviews are guest-written, third-party evaluations that TripAdvisor screens with automated
									fraud filters and human moderators, making them a widely trusted yardstick for judging safari operators.
								</p>
							</div>
						</Col>
						<Col xs={12} sm={4}>
							<div className='px-5 mb-5 border-left-secondary-1'>
								<h5 className='text-center mb-3 mt-5'>What are TripAdvisor Reviews?</h5>
								<p>
									TripAdvisor hosts the world’s largest repository of travel feedback, allowing verified travellers to
									rate accommodations, tours, and experiences on a 1-to-5 scale and add detailed commentary and photos. In
									the African-safari niche, these reviews typically cover guide expertise, wildlife sightings, lodge
									quality, safety standards, and overall service
								</p>
							</div>
						</Col>
						<Col xs={12} sm={4}>
							<div className='px-5 mb-5 border-left-secondary-1'>
								<h5 className='text-center mb-3 mt-5'>Jewel of Africa Safaris on TripAdvisor</h5>
								<div>
									<strong>Rating:</strong> 5.0 / 5 “Excellent” average
								</div>
								<div>
									<strong>Reviews:</strong> 120 + independently verified guest reports
								</div>
								<div>
									<strong>Traveller’s Choice Awards:</strong> 2017, 2020, 2023, 2024 — top 10 % worldwide
								</div>
								<div>
									<strong>Highlights called out by guests:</strong> seamless logistics, knowledgeable guides, intimate
									wildlife encounters, personalized itineraries, and responsive 24/7 support
								</div>
							</div>
						</Col>
						<Col xs={12} sm={4}>
							<div className='px-5 mb-5 border-left-secondary-1 border-right-secondary-1'>
								<h5 className='text-center mb-3 mt-5'>Are TripAdvisor Reviews Legitimate?</h5>
								<p>
									Yes. TripAdvisor’s Content Integrity team employs machine-learning detection, IP tracking, and manual
									audits to remove suspicious or incentivized posts. Operators risk penalties or delisting if manipulation
									is detected, which is why seasoned travellers and industry media still cite TripAdvisor as a reliable,
									user-generated barometer of quality.
								</p>
							</div>
						</Col>
						<Col xs={12} sm={12}>
							<div className='px-5 text-center text-secondary'>
								<p>
									<strong>
										<i>
											Consistently perfect scores and four Traveller’s Choice wins affirm Jewel of Africa Safaris’
											unwavering commitment to safety, luxury, and unforgettable wildlife moments—evidence you can
											trust when choosing your African adventure!
										</i>
									</strong>
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='bg-muted'>
				<Container className='py-5'>
					<Row>
						<Col xs={12} sm={12}>
							<div className='px-5 text-center my-5'>
								<h2>
									<strong className='text-secondary'>Contact</strong> Jewel of Africa Safaris
								</h2>
							</div>
						</Col>
					</Row>
					<Row className='mb-5 pb-5'>
						<Col xs={12} sm={3}>
							<Card className='border-1 mt-5 rounded bg-white'>
								<div className='d-flex justify-content-center align-items-center'>
									<img src='/icons/Key.png' alt='Jewel of Africa Safaris Logo' className='img-fluid my-3 icon-image' />
								</div>
								<Card.Body className='text-center'>
									<h5 className=''>Book a Safari</h5>
									<p>Explore and book our luxury safari tours for an unforgettable African adventure.</p>

									<Link to='/safari-tour'>
										<Button type='button' className='mt-3 px-5 w-100' variant='outline-info'>
											Book Now
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} sm={3}>
							<Card className='border-1 mt-5 rounded bg-white'>
								<div className='d-flex justify-content-center align-items-center'>
									<img src='/icons/Key.png' alt='Jewel of Africa Safaris Logo' className='img-fluid my-3 icon-image' />
								</div>
								<Card.Body className='text-center'>
									<h5 className=''>Safari Packages</h5>
									<p>Discover our exclusive safari packages across various African regions.</p>

									<Link to='/safari-tour'>
										<Button type='button' className='mt-3 px-5 w-100' variant='outline-info'>
											View Packages
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} sm={3}>
							<Card className='border-1 mt-5 rounded bg-white text-center'>
								<div className='d-flex justify-content-center align-items-center'>
									<img src='/icons/Key.png' alt='Jewel of Africa Safaris Logo' className='img-fluid my-3 icon-image' />
								</div>
								<Card.Body className='text-center'>
									<h5 className=''>Connect With Us</h5>
									<p>Follow us on social media to see our latest updates and safari stories.</p>

									<Link to='/safari-tour'>
										<Button type='button' className='mt-3 px-5 w-100' variant='outline-info'>
											Follow Us
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} sm={3}>
							<Card className='border-1 mt-5 rounded bg-white'>
								<div className='d-flex justify-content-center align-items-center'>
									<img src='/icons/Key.png' alt='Jewel of Africa Safaris Logo' className='img-fluid my-3 icon-image' />
								</div>
								<Card.Body className='text-center'>
									<h5 className=''>Contact Support</h5>
									<p>Reach out to our support team for any questions or assistance with your bookings.</p>

									<Link to='/contact-us'>
										<Button type='button' className='mt-3 px-5 w-100' variant='outline-info'>
											Call Us
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='bg-white'>
				<Container className='py-5'>
					<Row>
						<Col xs={12} sm={12}>
							<div className='px-5 text-center my-5'>
								<h2>
									<strong className='text-secondary'>How to Book</strong> a Safari with Jewel of Africa Safaris
								</h2>
							</div>
						</Col>
					</Row>
					<Row className='mb-5 pb-5'>
						<Col xs={12} sm={12}>
							<Timeline
								value={bookingProcess}
								align='alternate'
								className='customized-timeline'
								marker={customizedMarker}
								content={customizedContent}
							/>
						</Col>
					</Row>
				</Container>
			</div>
			<AboutUsCtaBanner />
		</div>
	)
}
