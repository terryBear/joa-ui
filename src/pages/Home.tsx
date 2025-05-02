import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import { Banner } from '../components/Banner/Banner'
import { CtaBanner } from '../components/Banner/CtaBanner'
import { PageDetail } from '../components/Page/PageDetail/PageDetail'
import { TourLayoutGrid } from '../components/Tours/TourLayouts/TourLayoutGrid'
import { MainAppLayout } from '../layout/Layout'

const Helmet = () => {
	return (
		<head>
			<title>Home</title>
			<meta name='description' content='Home page of Jewel of Africa Safaris' />
			<link rel='icon' href='/favicon.ico' />
		</head>
	)
}

export const Home = () => {
	return (
		<MainAppLayout>
			<Helmet />
			<Banner
				hero={true}
				image='/business/hero/banner-hero-2.jpeg'
				button={
					<Link to='/safari-tour'>
						<Button type='button' className='mt-3 px-5' variant='outline-info'>
							view all safari and tour packages
						</Button>
					</Link>
				}
			/>
			<TourLayoutGrid />
			<CtaBanner />
			<PageDetail />
		</MainAppLayout>
	)
}
