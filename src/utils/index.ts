/* eslint-disable @typescript-eslint/ban-ts-comment */
export const formatCurrency = (amount: number | unknown, currency?: string, locale: string = 'en-US') => {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
		// @ts-ignore
	}).format(amount)
}

export const formatDate = (date: string, locale: string = 'en-US') => {
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	}).format(new Date(date))
}
export const formatDateTime = (date: string, locale: string = 'en-US') => {
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	}).format(new Date(date))
}
export const formatTime = (date: string, locale: string = 'en-US') => {
	return new Intl.DateTimeFormat(locale, {
		hour: '2-digit',
		minute: '2-digit',
	}).format(new Date(date))
}
export const formatDateTimeWithSeconds = (date: string, locale: string = 'en-US') => {
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	}).format(new Date(date))
}
export const formatDateTimeWithSecondsAndTimezone = (date: string, locale: string = 'en-US') => {
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		timeZoneName: 'short',
	}).format(new Date(date))
}

export const isDaytime = () => {
	const currentHour = new Date().getHours()
	return currentHour >= 6 && currentHour < 20
}

export const formatNumber = (value: number, locale: string = 'en-US') => {
	return new Intl.NumberFormat(locale, {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(value)
}

export const getRandomArbitrary = () => {
	const _min = Math.random() * (4000 - 100) + 100
	const _max = Math.random() * (4000 - 2000) + 100
	return Math.random() * (_max - _min) + _min
}
