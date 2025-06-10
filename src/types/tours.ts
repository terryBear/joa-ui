/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Rates {
	currency: string
	amount: number
	year: number
	helper_text: string
	rates_important_info: string
}
export interface Itinerary {
	day: string
	description: string
	long_description: string
}
export interface ItinerarySummary {
	label: string
	title: string
	description: string
	location: string
	coordinates: string
	accomodation: string[]
	meals: string
	long_description: string
}
export interface Inclusions {
	title: string
	description: string
}
export interface Exclusions {
	title: string
	description: string
}
export interface Experiences {
	title: string
	description: string
	image: string
}
export interface SafariTypes {
	title: string
	description: string
	image: string
}
export type AccomodationType =
	| 'Hotel'
	| 'Lodge'
	| 'Tent'
	| 'Camp'
	| 'Cottage'
	| 'Villa'
	| 'Apartment'
	| 'House'
	| 'Bungalow'
	| 'Resort'
	| 'Hostel'
	| 'Motel'
	| 'Inn'
	| 'Chalet'
	| 'Suite'
	| 'Flat'
	| 'Condo'
	| 'Cabin'

export interface Lodge {
	title: string
	description: string
	image: string
	coordinates: string
	location: string
	type: AccomodationType
}
export type Meals =
	| 'Breakfast'
	| 'Lunch'
	| 'Dinner'
	| 'Brunch'
	| 'Snack'
	| 'Buffet'
	| 'Continental'
	| 'Full English'
	| 'Vegetarian'
	| 'Vegan'

export type Exclusivity = 'Private' | 'Shared' | 'Exclusive'

export type Amenities =
	| 'WiFi'
	| 'Pool'
	| 'Spa'
	| 'Gym'
	| 'Parking'
	| 'Restaurant'
	| 'Bar'
	| 'Laundry'
	| 'Air Conditioning'
	| 'Heating'
	| 'TV'
	| 'Kitchen'
	| 'Pet Friendly'
export type Sustainability =
	| 'Eco-Friendly'
	| 'Sustainable'
	| 'Green'
	| 'Carbon Neutral'
	| 'Renewable Energy'
	| 'Waste Reduction'
	| 'Water Conservation'
	| 'Community Engagement'
export type TransportationType =
	| 'Car'
	| 'Bus'
	| 'Train'
	| 'Plane'
	| 'Boat'
	| 'Bicycle'
	| 'Walking'
	| 'Motorcycle'
	| 'Helicopter'
	| 'Hot Air Balloon'

export interface Transportation {
	title: string
	description: string
}

export type ComfortLevel =
	| 'Basic'
	| 'Standard'
	| 'Luxury'
	| 'Premium'
	| 'Deluxe'
	| 'Budget'
	| 'Mid-Range'
	| 'High-End'
	| '1 Star'
	| '2 Star'
	| '3 Star'
	| '4 Star'
	| '5 Star'
export type StayDuration =
	| '1 Day'
	| '2 Days'
	| '3 Days'
	| '4 Days'
	| '5 Days'
	| '6 Days'
	| '7 Days'
	| '8 Days'
	| '9 Days'
	| '10 Days'
	| '11 Days'
	| '12 Days'
	| '13 Days'
	| '14 Days'

export interface Locations {
	coordinates: string[]
	location: string
}

export interface Features {
	title: string
	description: string
}
export interface Highlights {
	title: string
	description: string
	image: string
}
export interface Reviews {
	title: string
	description: string
	image?: string
}

export interface Tour {
	title: string
	slug: string
	short_description: string
	long_description: string
	featured_image: string
	images: any[]
	rate: Rates[]
	itinerary: Itinerary[]
	itinerary_summaries: ItinerarySummary[]
	inclusions: Inclusions[]
	exclusions: Exclusions[]
	destination: any[]
	african_safari_experiences: Experiences[]
	safari_types: SafariTypes[]
	accomodation: AccomodationType[]
	lodge: Lodge[]
	meals: Meals[]
	exclusivity: Exclusivity[]
	amenities: Amenities[]
	sustainability: Sustainability[]
	transportation: Transportation[]
	comfort_level: ComfortLevel[]
	duration: StayDuration[]
	map: Locations[]
	features: Features[]
	highlights: Highlights[]
	rating?: number
	reviews?: Reviews[]
}

export interface TourCardProps {
	handleClick: (tour: Tour) => void
	tour: Tour | null | any
}
