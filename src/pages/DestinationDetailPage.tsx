/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Banner } from '../components/Banner/Banner'
import { CtaBanner } from '../components/Banner/CtaBanner'
import { PageDetail } from '../components/Page/PageDetail/PageDetail'
import { TourLayoutGrid } from '../components/Tours/TourLayouts/TourLayoutGrid'
import { useDestinationService } from '../hooks/useDestination.service'
import { MainAppLayout } from '../layout/Layout'
import { Destination } from '../types/destinations'

export const DestinationDetailPage = () => {
	const { country } = useParams<{ country: any }>()
	const { getByCountry } = useDestinationService()
	const [destination, setDestination] = useState<Destination | null>(null)

	const initCountry = async () => {
		const response: any = await getByCountry(country)
		if (response) {
			setDestination(response)
		}
	}

	useEffect(() => {
		if (country) {
			initCountry()
		}
	}, [country])
	return (
		<MainAppLayout>
			<Banner
				hero={true}
				title={`Discover ${country} Safari Tours`}
				description={destination?.description}
				image={destination?.image}
			/>
			<TourLayoutGrid
				args={{
					country: country,
				}}
			/>
			<CtaBanner />
			<PageDetail />
		</MainAppLayout>
	)
}
