import { Banner } from '../components/Banner/Banner'
import { Team } from '../components/Team/Team'
import { MainAppLayout } from '../layout/Layout'

export const AboutUs = () => {
	return (
		<MainAppLayout>
			<Banner
				hero={true}
				title={
					<>
						<strong>About</strong> Jewel of Africa
					</>
				}
				description='At Jewel of Africa Safaris, every journey is a reflection of our personal connection to Africa — handcrafted by a team who live here, know the land intimately, and design luxury safaris not just to impress, but to transform.'
				image='/images/Hero - About Us.jpg'
				className='text-center'
			/>
			<Team />
		</MainAppLayout>
	)
}
