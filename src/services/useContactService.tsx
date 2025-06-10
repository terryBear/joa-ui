/* eslint-disable @typescript-eslint/no-explicit-any */
import { useApiService } from './useApiService'

const BOOKING_CREATE_ENDPOINT = 'contact/bookings-create'
const CONTACT_REQUEST_ENDPOINT = 'contact/contact-requests'
const BOOKING_REQUEST_ENDPOINT = 'contact/booking-requests'
const CONTACT_ENDPOINT = 'contact/contacts'

export const useContactService = () => {
	const api = useApiService()

	const createBooking = async (data: Record<string, any>) => {
		return await api.post(BOOKING_CREATE_ENDPOINT, data)
	}

	const createContactRequest = async (data: Record<string, any>) => {
		return await api.post(CONTACT_REQUEST_ENDPOINT, data)
	}

	const createBookingRequest = async (data: Record<string, any>) => {
		return await api.post(BOOKING_REQUEST_ENDPOINT, data)
	}

	const createContact = async (data: Record<string, any>) => {
		return await api.post(CONTACT_ENDPOINT, data)
	}

	return {
		createBooking,
		createContactRequest,
		createBookingRequest,
		createContact,
	}
}
