/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

declare global {
	interface Window {
		mapboxgl: {
			Map: any
			accessToken: string
		}
	}
}
