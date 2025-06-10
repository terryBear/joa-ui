/* eslint-disable @typescript-eslint/no-explicit-any */
import { useApiService } from './useApiService'

const ENDPOINT = '/contact/'

export const useBookingService = () => {
	const api = useApiService()

	const createBooking = async (data: Record<string, any>) => {
		return await api.post(`${ENDPOINT}bookings-create`, data)
	}

	const createContactRequest = async (data: Record<string, any>) => {
		return await api.post(`${ENDPOINT}contact-requests`, data)
	}

	const createBookingRequest = async (data: Record<string, any>) => {
		return await api.post(`${ENDPOINT}booking-requests`, data)
	}

	const createContact = async (data: Record<string, any>) => {
		return await api.post(`${ENDPOINT}contacts`, data)
	}

	return {
		createBooking,
		createContactRequest,
		createBookingRequest,
		createContact,
	}
}
