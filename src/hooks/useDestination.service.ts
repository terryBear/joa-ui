import { DESTINATIONS } from '../constants/destinations'
import TOURS from '../datasets/tours.json'

export const useDestinationService = () => {
	const list = () => {
		return Promise.resolve(TOURS)
	}

	const get = (id: number) => {
		return Promise.resolve(TOURS.filter((tour) => tour.id === id))
	}

	const getByCountry = (country: string) => {
		return Promise.resolve(DESTINATIONS.filter((dest) => dest.slug === country))
	}

	return {
		list,
		get,
		getByCountry,
	}
}
