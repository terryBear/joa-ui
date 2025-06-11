export type DestinationType = 'country' | 'region'

export interface Destination {
	id: string
	title: string
	slug: string
	description: string
	long_description: string
	image: string
	coordinates: string
	location: string
	type: DestinationType
	code: string
}

export interface DestinationCardProps {
	destination: Destination
	handleClick: (destination: Destination) => void
}
