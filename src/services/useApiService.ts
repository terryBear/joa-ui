/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

console.log(import.meta.env)

export const useApiService = () => {
	const api = axios.create({
		baseURL: BASE_URL,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		withCredentials: false,
	})

	const get = async (url: string, params?: Record<string, any>) => {
		try {
			const response = await api.get(url, { params })
			return response.data
		} catch (error) {
			console.error('API GET Error:', error)
			throw error
		}
	}

	const post = async (url: string, data: Record<string, any>) => {
		try {
			const response = await api.post(url, data)
			return response.data
		} catch (error) {
			console.error('API POST Error:', error)
			throw error
		}
	}

	const put = async (url: string, data: Record<string, any>) => {
		try {
			const response = await api.put(url, data)
			return response.data
		} catch (error) {
			console.error('API PUT Error:', error)
			throw error
		}
	}

	const del = async (url: string) => {
		try {
			const response = await api.delete(url)
			return response.data
		} catch (error) {
			console.error('API DELETE Error:', error)
			throw error
		}
	}

	return {
		get,
		post,
		put,
		del,
	}
}
