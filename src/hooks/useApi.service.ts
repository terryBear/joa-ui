import axios, { AxiosInstance } from 'axios'
import { useState } from 'react'

const apiClient: AxiosInstance = axios.create({
	baseURL: import.meta.env.API_URL, // Replace with your API base URL
	headers: {
		'Content-Type': 'application/json',
	},
})

export const useApi = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const request = async <T>(method: 'get' | 'post' | 'put' | 'delete', url: string, data?: any): Promise<T | null> => {
		setLoading(true)
		setError(null)
		try {
			const response = await apiClient.request<T>({
				method,
				url,
				data,
			})
			return response.data
		} catch (err: any) {
			setError(err.message || 'An error occurred')
			return null
		} finally {
			setLoading(false)
		}
	}

	return {
		loading,
		error,
		get: <T>(url: string) => request<T>('get', url),
		post: <T>(url: string, data: any) => request<T>('post', url, data),
		put: <T>(url: string, data: any) => request<T>('put', url, data),
		del: <T>(url: string) => request<T>('delete', url),
	}
}
