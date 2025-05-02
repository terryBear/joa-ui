import { Banner } from '../components/Banner/Banner'
import { CtaBanner } from '../components/Banner/CtaBanner'
import { PageDetail } from '../components/Page/PageDetail/PageDetail'
import { TourLayoutGrid } from '../components/Tours/TourLayouts/TourLayoutGrid'
import { MainAppLayout } from '../layout/Layout'

export const SafariTours = () => {
	return (
		<MainAppLayout>
			<Banner
				hero={true}
				title='Top Luxury Safari Destinations in Africa & Private Wildlife Tours'
				description='Jewel of Africa Safaris is a top-rated private tour operator offering local knowledge on a wide range of destinations from South Africa to its bordering countries and beyond.'
				image='/business/hero/banner-hero-1.jpeg'
			/>
			<TourLayoutGrid />
			<CtaBanner />
			<PageDetail />
		</MainAppLayout>
	)
}
