/* eslint-disable @typescript-eslint/no-explicit-any */
import { useApiService } from './useApiService'

const ENDPOINT = '/safari/'

export const useSafariService = () => {
	const api = useApiService()

	const getSafariList = async (params?: Record<string, any>) => {
		return await api.get(`${ENDPOINT}tours/`, params)
	}

	const getSafariDetails = async (slug: string) => {
		return await api.get(`${ENDPOINT}tours/${slug}/`)
	}

	return {
		getSafariList,
		getSafariDetails,
	}
}
