import { useState } from 'react'
import { ReadMore } from '../../../ReadMore/ReadMore'

export const PageDetailHeader = () => {
	const [isOpen] = useState(false)
	return (
		<div className='page-detail-header mb-5'>
			<h3>What are The Best Destinations for Luxury Safari Tour?</h3>

			<p className={`read-more ${isOpen ? 'open' : ''} m-0`}>The Best Destinations for Luxury Safari Tour are listed below.</p>
			<ReadMore
				expandText='Read More '
				collapseText='Read Less '
				size='sm'
				content={
					<ul>
						<li>
							<strong>Botswana:</strong> Botswana offers some of Africa's most exclusive and luxurious safari experiences in
							the Okavango Delta and Chobe National Park. The Okavango Delta, a UNESCO World Heritage Site, is renowned for
							its luxury camps, where visitors enjoy boat safaris through its maze of waterways and encounter abundant
							wildlife, including elephants, lions, and hippos. The unique wetland provides an unparalleled safari adventure
							with high-end accommodations seamlessly blending into the natural landscape. Visitors witness some of the best
							elephant viewing in Africa, Chobe National Park. The park is home to large herds of these majestic animals, seen
							along the Chobe River, where luxury lodges offer river cruises, providing a serene and thrilling way to
							experience the park's rich biodiversity.
						</li>
						<li>
							<strong>Zambia:</strong> Zambia is celebrated for its authentic safari experiences in South Luangwa National
							Park and Lower Zambezi National Park. South Luangwa is famous for its walking safaris, allowing visitors to
							explore the wild on foot while staying in intimate luxury camps. The park is known for its rich wildlife, with
							excellent chances of spotting leopards, one of the most elusive big cats, in their natural habitat. Lower
							Zambezi National Park offers a unique combination of land and water safaris. Visitors enjoy game drives
							alongside the Zambezi River, canoeing, fishing, and wildlife viewing from the water. The park's luxury lodges,
							set against the backdrop of the river and escarpments, provide a serene and adventurous safari experience that
							immerses guests in nature.
						</li>
						<li>
							<strong>Namibia:</strong> Namibia offers a unique and captivating luxury safari experience in Sossusvlei and
							Etosha National Park. Sossusvlei is renowned for its striking red dunes, some of the highest in the world,
							creating an otherworldly landscape. Visitors stay in luxurious desert lodges that offer a range of exclusive
							activities, including the unforgettable experience of hot air balloon safaris over the dunes, providing
							breathtaking views of the vast desert below. The landscape is dominated by a vast salt pan that attracts a
							variety of wildlife in Etosha National Park, including rhinos, giraffes, and large herds of elephants. Luxury
							lodges around the park offer an exclusive experience where guests enjoy exceptional wildlife viewing while
							staying in refined accommodations that blend comfort with the rugged beauty of the surroundings.
						</li>
						<li>
							<strong>South Africa:</strong> South Africa is a prime destination for luxury safaris in Kruger National Park
							and Madikwe Game Reserve. Kruger National Park has several ultra-luxury private game reserves, such as Sabi
							Sands, where visitors experience the Big Five, including lion, leopard, elephant, rhino, and buffalo, in lavish
							surroundings. These private reserves offer exclusive safaris with high-end accommodations, fine dining, and
							personalized service, ensuring an intimate and immersive wildlife experience. Madikwe Game Reserve is a
							malaria-free destination, making it an ideal choice for family-friendly safaris. It boasts opulent lodges and is
							renowned for its strong conservation efforts, offering visitors a chance to enjoy wildlife viewing in a pristine
							environment while staying in luxurious comfort.
						</li>
						<li>
							<strong>Uganda:</strong> Uganda offers a unique luxury safari experience in Bwindi Impenetrable Forest and Queen
							Elizabeth National Park. Bwindi Impenetrable Forest is world-renowned for its gorilla trekking, where visitors
							hike through the dense forest to encounter mountain gorillas in their natural habitat. The experience is
							complemented by top-tier lodges that provide luxury and comfort in the heart of the remote wilderness, offering
							stunning views and a tranquil retreat. Queen Elizabeth National Park offers a diverse safari experience,
							combining traditional game drives with boat safaris along the Kazinga Channel, where elephants, hippos, and
							birds are observed up close. Set against a dramatic volcanic landscape, the park's scenic luxury lodges allow
							guests to unwind while enjoying breathtaking views and diverse wildlife.
						</li>
						<li>
							<strong>Zimbabwe:</strong> Zimbabwe offers exceptional luxury safari experiences in Hwange National Park and
							Mana Pools National Park. Hwange National Park is renowned for its vast elephant herds and diverse wildlife,
							making it a top destination for visitors seeking high-quality game viewing. Visitors enjoy game drives, bush
							walks, and night safaris, all while staying in top-end lodges that provide a seamless blend of comfort and
							wilderness. Mana Pools National Park, a UNESCO World Heritage Site, offers a more intimate and adventurous
							safari experience. Mana Pools allows guests to explore the park's rich ecosystem from land and water, known for
							its walking and canoe safaris along the Zambezi River. Exclusive luxury camps along the river offer stunning
							views and unparalleled access to wildlife, making it a must-visit for safari enthusiasts seeking an immersive
							and luxurious adventure.
						</li>
					</ul>
				}
			/>
		</div>
	)
}
