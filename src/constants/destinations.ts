import { Destination } from '../types/destinations'

export type DestinationsType =
	| 'south-africa'
	| 'tanzania'
	| 'kenya'
	| 'uganda'
	| 'zambia'
	| 'namibia'
	| 'botswana'
	| 'zanzibar'
	| 'rwanda'
	| 'malawi'
	| 'mozambique'
	| 'zimbabwe'

export const DESTINATIONS: Destination[] = [
	{
		id: '1',
		title: 'Tanzania',
		slug: 'tanzania',
		description: 'Explore the stunning landscapes and wildlife of Tanzania.',
		long_description:
			"Tanzania is home to some of the most breathtaking landscapes and diverse wildlife in the world. From the Serengeti National Park to Mount Kilimanjaro, Tanzania offers a unique blend of adventure and natural beauty. Experience the rich culture of the Maasai people and indulge in the vibrant local cuisine. Whether you're on a thrilling safari or relaxing on the pristine beaches of Zanzibar, Tanzania promises an unforgettable experience. With its stunning national parks, including Serengeti and Ngorongoro Crater, and the idyllic beaches of Zanzibar, Tanzania is a paradise for nature lovers and adventure seekers alike. Explore the rich culture of the Maasai people and indulge in the vibrant local cuisine. Experience the thrill of witnessing the Great Migration in the Serengeti, where millions of wildebeest and zebras traverse the plains in search of greener pastures. Tanzania's national parks are teeming with wildlife, offering unparalleled opportunities for game viewing and photography.",
		image: '/images/countries/tanzania-min.jpg',
		coordinates: '-6.7924, 39.2083',
		location: 'East Africa',
		type: 'country',
	},
	{
		id: '2',
		title: 'Kenya',
		slug: 'kenya',
		description: 'Experience the rich culture and wildlife of Kenya.',
		long_description:
			"Kenya is a land of diverse landscapes, rich culture, and abundant wildlife. From the iconic Maasai Mara to the stunning beaches of Diani, Kenya offers a unique blend of adventure and relaxation. Experience the vibrant culture of the Maasai people and indulge in the delicious local cuisine. Whether you're on a thrilling safari or relaxing on the beautiful beaches, Kenya promises an unforgettable experience. With its diverse ecosystems, including savannahs, mountains, and coastal regions, Kenya is a paradise for nature lovers and adventure seekers alike. Explore the rich culture of the Maasai people and indulge in the delicious local cuisine. Experience the thrill of witnessing the Great Migration in the Maasai Mara, where millions of wildebeest and zebras traverse the plains in search of greener pastures. Kenya's national parks and reserves are teeming with wildlife, offering unparalleled opportunities for game viewing and photography.",
		image: '/images/countries/kenya-min.jpg',
		coordinates: '-1.2864, 36.8172',
		location: 'East Africa',
		type: 'country',
	},
	{
		id: '3',
		title: 'Uganda',
		slug: 'uganda',
		description: "Discover the beauty of Uganda's national parks and wildlife.",
		long_description:
			"Uganda, known as the \"Pearl of Africa,\" is a land of stunning landscapes and diverse wildlife. From the lush rainforests of Bwindi Impenetrable National Park to the breathtaking scenery of Queen Elizabeth National Park, Uganda offers a unique blend of adventure and natural beauty. Experience the rich culture of the Ugandan people and indulge in the delicious local cuisine. Whether you're on a thrilling gorilla trek or relaxing by the shores of Lake Victoria, Uganda promises an unforgettable experience. With its diverse ecosystems, including rainforests, savannahs, and lakes, Uganda is a paradise for nature lovers and adventure seekers alike. Explore the rich culture of the Ugandan people and indulge in the delicious local cuisine. Experience the thrill of trekking to see mountain gorillas in Bwindi Impenetrable National Park, where you can observe these magnificent creatures in their natural habitat. Uganda's national parks are teeming with wildlife, offering unparalleled opportunities for game viewing and photography. Experience the breathtaking scenery of Queen Elizabeth National Park, where you can witness the unique wildlife and stunning landscapes that make Uganda a must-visit destination. Whether you're on a thrilling safari or relaxing by the shores of Lake Victoria, Uganda promises an unforgettable experience.",
		image: '/images/countries/uganda-min.jpg',
		coordinates: '1.3733, 32.2903',
		location: 'East Africa',
		type: 'country',
	},
	{
		id: '4',
		title: 'South Africa',
		slug: 'south-africa',
		description: 'Experience the diverse landscapes and wildlife of South Africa.',
		long_description:
			"South Africa is a land of stunning landscapes, rich culture, and abundant wildlife. From the iconic Table Mountain to the breathtaking Kruger National Park, South Africa offers a unique blend of adventure and relaxation. Experience the vibrant culture of the Zulu people and indulge in the delicious local cuisine. Whether you're on a thrilling safari or relaxing on the beautiful beaches, South Africa promises an unforgettable experience. With its diverse ecosystems, including savannahs, mountains, and coastal regions, South Africa is a paradise for nature lovers and adventure seekers alike. Explore the rich culture of the Zulu people and indulge in the delicious local cuisine. Experience the thrill of witnessing the Big Five in Kruger National Park, where you can observe lions, elephants, leopards, rhinos, and buffalo in their natural habitat. South Africa's national parks and reserves are teeming with wildlife, offering unparalleled opportunities for game viewing and photography.",
		image: '/images/countries/south-africa-min.jpg',
		coordinates: '-30.5595, 22.9375',
		location: 'Southern Africa',
		type: 'country',
	},
	{
		id: '5',
		title: 'Botswana',
		slug: 'botswana',
		description: 'Explore the stunning landscapes and wildlife of Botswana.',
		long_description:
			"Botswana is a land of breathtaking landscapes and abundant wildlife. From the iconic Okavango Delta to the stunning Chobe National Park, Botswana offers a unique blend of adventure and natural beauty. Experience the rich culture of the Tswana people and indulge in the delicious local cuisine. Whether you're on a thrilling safari or relaxing by the shores of the Okavango Delta, Botswana promises an unforgettable experience. With its diverse ecosystems, including wetlands, savannahs, and deserts, Botswana is a paradise for nature lovers and adventure seekers alike. Explore the rich culture of the Tswana people and indulge in the delicious local cuisine. Experience the thrill of witnessing elephants in Chobe National Park, where you can observe these magnificent creatures in their natural habitat. Botswana's national parks are teeming with wildlife, offering unparalleled opportunities for game viewing and photography.",
		image: '/images/countries/botswana-min.jpg',
		coordinates: '-22.3285, 24.6849',
		location: 'Southern Africa',
		type: 'country',
	},
	{
		id: '6',
		title: 'Zambia',
		slug: 'zambia',
		description: "Discover the beauty of Zambia's national parks and wildlife.",
		long_description:
			"Zambia is a land of stunning landscapes and abundant wildlife. From the iconic South Luangwa National Park to the breathtaking Lower Zambezi National Park, Zambia offers a unique blend of adventure and natural beauty. Experience the rich culture of the Zambian people and indulge in the delicious local cuisine. Whether you're on a thrilling safari or relaxing by the shores of the Zambezi River, Zambia promises an unforgettable experience. With its diverse ecosystems, including wetlands, savannahs, and forests, Zambia is a paradise for nature lovers and adventure seekers alike. Explore the rich culture of the Zambian people and indulge in the delicious local cuisine. Experience the thrill of witnessing wildlife in South Luangwa National Park, where you can observe lions, leopards, elephants, and hippos in their natural habitat. Zambia's national parks are teeming with wildlife, offering unparalleled opportunities for game viewing and photography.",
		image: '/images/countries/zambia-min.jpg',
		coordinates: '-13.1339, 27.8493',
		location: 'Southern Africa',
		type: 'country',
	},
	{
		id: '7',
		title: 'Namibia',
		slug: 'namibia',
		description: 'Experience the stunning landscapes and wildlife of Namibia.',
		long_description:
			"Namibia is a land of breathtaking landscapes and abundant wildlife. From the iconic Sossusvlei to the stunning Etosha National Park, Namibia offers a unique blend of adventure and natural beauty. Experience the rich culture of the Himba people and indulge in the delicious local cuisine. Whether you're on a thrilling safari or relaxing by the shores of the Atlantic Ocean, Namibia promises an unforgettable experience. With its diverse ecosystems, including deserts, savannahs, and coastal regions, Namibia is a paradise for nature lovers and adventure seekers alike. Explore the rich culture of the Himba people and indulge in the delicious local cuisine. Experience the thrill of witnessing wildlife in Etosha National Park, where you can observe lions, elephants, rhinos, and giraffes in their natural habitat. Namibia's national parks are teeming with wildlife, offering unparalleled opportunities for game viewing and photography.",
		image: '/images/countries/namibia-min.jpg',
		coordinates: '-22.9576, 18.4904',
		location: 'Southern Africa',
		type: 'country',
	},
]
