import { Banner } from '../components/Banner/Banner'
import { CtaBanner } from '../components/Banner/CtaBanner'
import { PageDetail } from '../components/Page/PageDetail/PageDetail'
import { TourLayoutGrid } from '../components/Tours/TourLayouts/TourLayoutGrid'
import { MainAppLayout } from '../layout/Layout'

export const Experiences = () => {
	return (
		<MainAppLayout>
			<Banner
				hero={true}
				title="Experience Luxury Safari Escapes Across Africa's Iconic Landscapes"
				description='Tailor your safari bucket-list from top-rated travel opportunities.'
				image='/business/hero/banner-hero-1.jpeg'
			/>
			<TourLayoutGrid />
			<CtaBanner />
			<PageDetail />
		</MainAppLayout>
	)
}
