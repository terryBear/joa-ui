import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
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
	const navigate = useNavigate()
	return (
		<MainAppLayout>
			<Helmet />
			<Banner
				hero={true}
				image='/business/hero/banner-hero-2.jpeg'
				button={
					<Button type='button' className='mt-3 px-5' variant='outline-info' onClick={() => navigate('/safari-tour')}>
						Show More
					</Button>
				}
			/>
			<TourLayoutGrid />
			<CtaBanner />
			<PageDetail />
		</MainAppLayout>
	)
}
