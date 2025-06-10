import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { AboutUsCtaBanner } from '../components/Banner/AboutUsCtaBanner'
import { Banner } from '../components/Banner/Banner'
import { CtaForm } from '../components/Forms/CtaForm'
import { PageDetailFaq } from '../components/Page/PageDetail/components/PageDetailFaq'
import { PageDetail } from '../components/Page/PageDetail/PageDetail'
import { ReadMore } from '../components/ReadMore/ReadMore'
import { SectionalImage } from '../components/SectionalImage/SectionalImage'
import { TourLayoutGrid } from '../components/Tours/TourLayouts/TourLayoutGrid'
import { MainAppLayout } from '../layout/Layout'
import { Divider } from '../ui-library/Divider'

export const Home = () => {
	return (
		<MainAppLayout>
			<Banner
				hero={true}
				title={
					<>
						Luxurious <strong className='text-secondary'>African</strong> Safari Tour
					</>
				}
				description='Book Africa’s best safaris with our luxurious packages. Tour South Africa, Botswana, Zambia, Zimbabwe, Namibia, Mozambique, Kenya, Malawi, Tanzania, Rwanda, Uganda, and Madagaskar.'
				image='/images/Hero 3.png'
				button={
					<Link to='/safari-tour'>
						<Button type='button' className='mt-3 px-5' variant='outline-info'>
							view all safari and tour packages
						</Button>
					</Link>
				}
			/>
			<div>
				<Container className='py-5'>
					<Row>
						<Col xs={12} sm={12}>
							<div className='px-5 my-5'>
								<p>
									A luxury African safari is an unparalleled experience that combines the thrill of exploring Africa’s
									diverse wildlife with world-class accommodations and personalized services. The luxurious African safari
									tour is designed to offer guests a unique and immersive journey into some of the continent's most
									spectacular landscapes while providing the highest level of comfort and exclusivity. Luxury African
									safari tours ensure that every detail is crafted to perfection, from private game drives to gourmet
									dining and luxurious lodges, making it the ideal choice for travelers seeking adventure and indulgence.
								</p>
								<p>
									The advantages of luxury African safaris lie in the exclusive access to remote and pristine wildlife
									areas, where visitors enjoy intimate encounters with Africa’s iconic animals, such as lions, elephants,
									and leopards. Luxury safaris offer personalized itineraries, private guides, and the flexibility to
									customize activities based on individual preferences. The bespoke approach ensures guests experience
									Africa at their own pace, with fewer crowds and more personalized attention, making it a truly
									unforgettable journey.
								</p>
								<ReadMore
									content={
										<>
											<p>
												The experience of a luxury African safari tour is exhilarating and relaxing. A private villa
												overlooking the savannah or a tented camp nestled in the heart of the bush awaits guests
												after thrilling game drives. The combination of high-end services, such as spa treatments
												and fine dining, along with the raw beauty of the African wilderness, creates a safari
												experience that is refined and wild. Luxury safaris are the best choice for those seeking
												the ultimate African adventure.
											</p>

											<p>
												Countries like South Africa, Botswana, Kenya, and Tanzania are renowned for offering the
												best luxury African safari tours. Luxury safaris in private reserves in South Africa, like
												Sabi Sands, allow for up-close encounters with the Big Five while staying in exclusive
												lodges that offer personalized services and luxurious amenities. Guests enjoy game drives,
												boat safaris, and bush walks in Botswana’s Okavango Delta while staying in high-end camps
												that blend seamlessly into the natural environment. Each country provides a unique safari
												experience, but all focus on offering luxury, exclusivity, and the chance to connect deeply
												with Africa’s wildlife.
											</p>
											<p>
												Staying in luxury safari lodges is a defining aspect of the luxury safari experience. These
												lodges offer service and comfort that sets them apart from traditional accommodations.
												Guests expect private suites with plunge pools, gourmet meals prepared by top chefs, and
												stunning views of the surrounding wildlife. The lodges are located in remote areas,
												providing unparalleled privacy and access to wildlife. The experience of staying in a luxury
												safari lodge elevates the safari experience to something truly extraordinary, whether it is
												enjoying a sundowner on the private deck or a candlelit dinner under the stars.
											</p>
										</>
									}
									size='sm'
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='bg-white'>
				<TourLayoutGrid />
			</div>
			<div>
				<Container>
					<Row className='my-5 py-5'>
						<Col xs={12} sm={1}></Col>
						<Col xs={12} sm={5}>
							<SectionalImage image='/images/Lion 1.jpg' />
						</Col>
						<Col xs={12} sm={5}>
							<Card className='border-1 rounded'>
								<Card.Header className=' bg-secondary p-3'>
									<h3 className='text-white  m-0'>Dreaming of Africa? Get Inspired Here</h3>
									<p className='text-white'>Expert safari travel advice, new trip ideas, and exclusive offers…</p>
								</Card.Header>
								<Card.Body className='bg-muted rounded'>
									<CtaForm />
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
			<PageDetail />
			<div className='bg-muted py-5'>
				<Container>
					<Row className='my-5 py-5'>
						<Col xs={12} sm={5}>
							<SectionalImage image='/images/Wine.jpg' />
						</Col>
						<Col className='ps-5' xs={12} sm={7}>
							<h3>
								What is a <strong className='text-secondary'>Luxury</strong> Safari?
							</h3>
							<p>
								A Luxury Safari is a high-end, exclusive experience that combines the adventure of wildlife exploration with
								the comfort and opulence of world-class accommodations. A luxury safari provides a more intimate and
								personalized journey through Africa's most breathtaking landscapes, unlike traditional safaris, offering
								guests a chance to connect with nature without sacrificing comfort or style. The type of safari takes place
								in private game reserves or remote, pristine wilderness areas, ensuring exclusivity and extraordinary
								wildlife encounters.
							</p>
							<p>
								The key element of a luxury safari is staying at luxury lodges in secluded areas designed to offer
								unparalleled views of the natural surroundings. These lodges provide five-star amenities such as spacious
								suites, private decks, and plunge pools, allowing guests to relax comfortably while immersed in the beauty
								of the African wilderness. Guests enjoy private dining experiences, with gourmet meals prepared by skilled
								chefs served under the stars in exclusive settings like bush clearings or riverbanks, creating an
								unforgettable dining experience.
							</p>
							<ReadMore
								size='sm'
								content={
									<>
										<p>
											A Luxury Safari offers tailored itineraries catering to each guest's preferences and interests.
											Safari itineraries are customized to ensure every moment of the safari is meaningful and
											memorable, whether it is a private game drive, a guided bush walk, or a helicopter ride over the
											savannah. Guests participate in activities such as wildlife photography, hot air balloon
											safaris, or cultural visits, all while receiving personalized service throughout their journey.
											A Luxury African Safari stands out for its ability to seamlessly blend the excitement of
											wildlife encounters with the indulgence of fine living, offering a truly exceptional way to
											experience Africa's natural beauty.
										</p>
									</>
								}
							/>
						</Col>
					</Row>
					<Row className='my-5 py-5'>
						<Col className='pe-5' xs={12} sm={7}>
							<h3>
								<strong className='text-secondary'>How Safe</strong> is Luxury Safari Tour?
							</h3>
							<p>
								The Best Time for Luxury Safari Tour is during the dry season, which varies by region but falls between June
								and October in most African countries. The climate is cooler, and water sources become scarce, drawing
								wildlife to rivers and waterholes during the period, making it easier to spot animals. The dry season is
								ideal for game viewing because vegetation is less dense, increasing visibility. It is the best time for
								activities such as walking safaris and hot air balloon rides, as the weather is more predictable and
								pleasant.
							</p>
							<p>
								Another key consideration for timing a Luxury Safari Tour is the Great Migration between July and October in
								East Africa in Tanzania’s Serengeti and Kenya’s Maasai Mara. The time marks the movement of millions of
								wildebeest, zebras, and antelopes across the plains in search of fresh grazing lands, followed by predators
								such as lions, leopards, and cheetahs. Witnessing the spectacle from a luxury lodge or during a private game
								drive is one of the most awe-inspiring safari experiences, making the period highly sought after by wildlife
								enthusiasts.
							</p>
							<ReadMore
								size='sm'
								content={
									<>
										<p>
											Visitors are drawn to the area during the dry season from July to September. However, the
											shoulder seasons, just before and after the peak dry season for couples seeking a more intimate
											and quieter experience, provide an ideal balance of good weather and fewer tourists. The dry
											season is recommended for the safety and ease of wildlife viewing for families with kids. Luxury
											lodges even offer child-friendly activities and amenities. Check the lodge policies in advance,
											but the cooler, dry season months are the most comfortable for humans and pets for families
											traveling with pets.
										</p>
									</>
								}
							/>
						</Col>
						<Col xs={12} sm={5}>
							<SectionalImage image='/images/Romance.jpg' />
						</Col>
					</Row>
					<Row className='my-5 py-5'>
						<Col xs={12} sm={5}>
							<SectionalImage image='/images/Walking Safari.jpg' />
						</Col>
						<Col className='ps-5' xs={12} sm={7}>
							<h3>
								When is the <strong className='text-secondary'>Best Time</strong> for Luxury Safari Tour?
							</h3>
							<p>
								A Luxury Safari Tour is 99% safe if guests follow the guidelines and safety protocols set by the safari
								operators and lodges. Luxury safari operators prioritize the safety and well-being of their guests, offering
								well-trained guides, secure vehicles, and expert knowledge of the wildlife. Luxury lodges are located within
								private reserves where human-wildlife interactions are closely managed, ensuring a controlled and secure
								environment for visitors. Game drives are conducted in designed vehicles that provide comfort and protection
								while allowing guests to observe wildlife up close.
							</p>
							<p>
								Additional safety measures provided on a Luxury Safari Tour include personal guides experienced in wildlife
								behavior and using private vehicles for more personalized and safer experiences. Lodges have emergency
								medical services on-site or nearby, ensuring quick access to healthcare if needed. Expert rangers accompany
								guests to ensure their safety in the wild, and clear communication protocols are followed to avoid potential
								risks for walking safaris. Luxury camps and lodges are equipped with secure fencing, alarm systems, and
								trained staff to ensure the safety of guests.
							</p>
							<ReadMore
								size='sm'
								content={
									<>
										<p>
											Visitors on a Luxury Safari Tour are advised to take malaria prophylaxis when traveling to areas
											where malaria is present during the rainy season when mosquitoes are more active. Consult a
											healthcare provider before the trip for recommendations on the appropriate medication. Yellow
											fever vaccinations are required or recommended for visitors traveling to tropical regions such
											as East Africa. Ensuring these health precautions are taken helps make the experience safe and
											enjoyable for all guests.
										</p>
									</>
								}
							/>
						</Col>
					</Row>
					<Divider />
					<Row>
						<Col xs={12} sm={12} className='mt-5'>
							<div className='px-5 mt-5 text-center'>
								<h2>
									What are the <strong className='text-secondary'>Advantages</strong> of Luxury Safari Tour?
								</h2>
							</div>
						</Col>
					</Row>
					<Row className='my-5 py-5'>
						<Col xs={12} sm={5}>
							<SectionalImage image='/images/Tsalala-Cubs-and-Vehicle.jpg' />
						</Col>
						<Col className='ps-5' xs={12} sm={7}>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>1. Exclusive Wildlife Viewing:</h5>
							<p>
								Luxury safaris occur in private reserves or areas with restricted access, ensuring fewer tourists and more
								intimate wildlife encounters. Guests access private game drives and exclusive viewing spots, unlike regular
								safaris involving larger crowds.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>2. High-End Accommodations:</h5>
							<p>
								Luxury safari lodges provide world-class accommodations, including private suites, plunge pools, spa
								services, and fine dining. These lodges are designed to offer comfort and opulence in the heart of the
								wilderness, a level of service and comfort that regular safari camps do not match.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>3. Personalized Service:</h5>
							<p>
								Luxury safaris offer personalized itineraries tailored to guests' preferences. Private guides, chefs, and
								butlers are available, ensuring each experience is unique and catered to individual needs. The personalized
								approach is not typical of standard safari tours.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>4. Expert Guides and Rangers:</h5>
							<p>
								The guides and rangers on a Luxury Safari Tour are highly experienced and knowledgeable, providing deeper
								insights into wildlife behavior and ecosystems. Guests benefit from smaller group sizes and more focused,
								specialized guidance.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>5. Private Game Drives and Activities:</h5>
							<p>
								Luxury safaris offer private vehicles and bespoke experiences, unlike regular safaris, where game drives are
								shared with others. Guests engage in exclusive activities such as helicopter rides, hot air balloon safaris,
								and bush walks with expert guides, adding an extra dimension to the safari experience.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>6. Gourmet Dining and Fine Wine:</h5>
							<p>
								Luxury safaris provide gourmet dining experiences that feature locally sourced ingredients and world-class
								cuisine. Lodges have wine cellars and offer private dining under the stars, a feature not on regular
								safaris.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>7. Enhanced Safety and Comfort:</h5>
							<p>
								The vehicles, lodges, and equipment used in Luxury Safari Tours are of the highest standard, ensuring
								enhanced safety and comfort. Luxurious tents or lodges are equipped with modern amenities, from climate
								control to Wi-Fi, providing a secure and comfortable environment in remote locations.
							</p>
							<Divider />
							<h5 className='fw-light text-secondary letter-spacing-0 '>8. Seclusion and Privacy:</h5>
							<p>
								The major advantage of a luxury safari is the emphasis on seclusion and privacy. Guests enjoy a more
								intimate experience with private lodges, dedicated staff, and exclusive wildlife access, allowing for a more
								peaceful and immersive connection with nature.
							</p>
							<Divider />
						</Col>
					</Row>
				</Container>
			</div>
			<AboutUsCtaBanner />
			<Container>
				<Row>
					<Divider />
					<Col xs={12} sm={12} className='mt-5'>
						<div className='px-5 mt-5 text-center'>
							<h2>
								What Makes Luxury Safari Tour differ from <strong className='text-secondary'>Traditional Safaris?</strong>
							</h2>
						</div>
					</Col>
				</Row>
			</Container>
			<PageDetailFaq />
			<div className='bg-dark text-secondary py-5'>
				<Container className='pb-5 my-5'>
					<Row>
						<Col xs={12} sm={12} className='mt-5'>
							<div className='px-5 mt-5 text-center'>
								<h2 className='text-white'>
									<strong className='text-secondary'>Why Choose</strong> Jewel of Africa Safaris for Luxury Safari Tour?
								</h2>
								<p className='text-white'>
									Choose Jewel of Africa Safaris for a Luxury Safari Tour because they offer a customizable luxury
									experience catering to each guest's unique preferences. A safari itinerary designed by their expert team
									meets customers' desires, whether a romantic getaway, a family adventure, or a wildlife photography
									expedition. Access to some of the most exclusive safari destinations ensures that the trip is
									personalized from start to finish
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={6} className='mt-5'>
							<div className='px-5 mt-5 text-center'>
								<img
									src='/icons/Customization Icon.png'
									alt='Jewel of Africa Safaris Logo'
									className='img-fluid mb-3 icon-image'
								/>
								<h5 className='text-secondary'>Tailor-made Itineraries:</h5>
								<p className='text-white'>
									Every journey is custom-built around your passions—romance, family bonding, or photographic
									mastery—guided by our experts from first idea to final sunset.
								</p>
							</div>
						</Col>
						<Col xs={12} sm={6} className='mt-5'>
							<div className='px-5 mt-5 text-center'>
								<img src='/icons/Hotel.png' alt='Jewel of Africa Safaris Logo' className='img-fluid mb-3 icon-image' />
								<h5 className='text-secondary'>Hand-Picked Luxury Lodges & Hotels:</h5>
								<p className='text-white'>
									LStay in intimate tented camps and opulent suites chosen for world-class amenities, sweeping wilderness
									views, and total privacy.
								</p>
							</div>
						</Col>
						<Col xs={12} sm={6} className='mt-5'>
							<div className='px-5 mt-5 text-center'>
								<img src='/icons/Key.png' alt='Jewel of Africa Safaris Logo' className='img-fluid mb-3 icon-image' />
								<h5 className='text-secondary'>Private Wilderness Access</h5>
								<p className='text-white'>
									Venture beyond the crowds into exclusive reserves and concession areas for up-close wildlife encounters
									led by elite rangers.
								</p>
							</div>
						</Col>
						<Col xs={12} sm={6} className='mt-5'>
							<div className='px-5 mt-5 text-center'>
								<img src='/icons/Globe.png' alt='Jewel of Africa Safaris Logo' className='img-fluid mb-3 icon-image' />
								<h5 className='text-secondary'>Seamless 5-Star Service:</h5>
								<p className='text-white'>
									From chartered flights to on-call concierges, every transfer, meal, and detail is orchestrated so you
									simply live the moment.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='bg-white py-5'>
				<Container className='py-5'>
					<Row>
						<Col xs={12} sm={12} className=''>
							<div className='text-center mb-5'>
								<h2>Jewel of Africa Safaris Awards</h2>
							</div>
						</Col>
						<Col xs={12} sm={3}>
							<div className='px-5 mt-5 text-center'>
								<img
									src='/images/winner-badge-3.png'
									alt='Jewel of Africa Safaris Logo'
									className='img-fluid mb-3 icon-image'
								/>
								<h5>
									<strong>International Travel Awards</strong>
								</h5>
								<h6>
									<strong className='text-secondary'> Best Luxury Tour Operator in Southern Africa</strong>
								</h6>
							</div>
						</Col>
						<Col xs={12} sm={3}>
							<div className='px-5 mt-5 text-center'>
								<img src='/images/tripadvisor-logo.png' alt='Jewel of Africa Safaris Logo' className='img-fluid' />
								<h5>
									<strong>Travelers' Choice Awards</strong>
								</h5>
								<h6 className='m-0'>
									<strong className='text-secondary'> Best of the Best 2024</strong>
								</h6>
							</div>
						</Col>
						<Col xs={12} sm={3}>
							<div className='px-5 mt-5 text-center'>
								<img src='/images/tripadvisor-logo.png' alt='Jewel of Africa Safaris Logo' className='img-fluid' />
								<h5>
									<strong>Travelers' Choice Awards</strong>
								</h5>
								<h6 className='m-0'>
									<strong className='text-secondary'> Best of the Best 2023</strong>
								</h6>
							</div>
						</Col>
						<Col xs={12} sm={3}>
							<div className='px-5 mt-5 text-center'>
								<img src='/images/tripadvisor-logo.png' alt='Jewel of Africa Safaris Logo' className='img-fluid' />
								<h5>
									<strong>Travelers' Choice Awards</strong>
								</h5>
								<h6 className='m-0'>
									<strong className='text-secondary'> Best of the Best 2020</strong>
								</h6>
							</div>
						</Col>
						<Col xs={12} sm={3}>
							<div className='px-5 mt-5 text-center'>
								<img src='/images/tripadvisor-logo.png' alt='Jewel of Africa Safaris Logo' className='img-fluid' />
								<h5>
									<strong>Travelers' Choice Awards</strong>
								</h5>
								<h6 className='m-0'>
									<strong className='text-secondary'> Best of the Best 2017</strong>
								</h6>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</MainAppLayout>
	)
}
