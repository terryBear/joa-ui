import { Banner } from '../components/Banner/Banner'
import { MainAppLayout } from '../layout/Layout'

export const Activities = () => {
	return (
		<MainAppLayout>
			<Banner
				hero={true}
				title='Discover the Essence of Jewel of Africa Safaris'
				description='Jewel of Africa was founded in 2004 and has built a solid reputation as a top guided-safari and tour operator through consistent delivery of expertise, flexibility and variety.'
				image='/images/baboon-uganda-africa-2024-09-12-04-39-25-utc.JPG'
			/>
		</MainAppLayout>
	)
}
