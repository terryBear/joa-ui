import { createBrowserRouter, RouterProvider } from 'react-router'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import { AboutUs } from '../pages/AboutUs'
import { ContactUs } from '../pages/ContactUs'
import { Destination } from '../pages/Destination'
import { DestinationDetailPage } from '../pages/DestinationDetailPage'
import { Destinations } from '../pages/Destinations'
import { Experiences } from '../pages/Experiences'
import { Home } from '../pages/Home'
import { SafariEnquiry } from '../pages/SafariEnquiry'
import { SafariTours } from '../pages/SafariTours'
import { SafariTourCost } from '../pages/SafariToursCost'
import { TourPage } from '../pages/TourPage'

const router = createBrowserRouter([
	{
		path: '/',
		Component: Home,
		index: true,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/about-us',
		children: [
			{
				Component: AboutUs,
				index: true,
				errorElement: <ErrorBoundary />,
			},
		],
	},
	{
		path: '/experiences',
		Component: Experiences,
		index: true,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/safari-tour',
		Component: SafariTours,
		index: true,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/safari-tour/cost',
		Component: SafariTourCost,
		index: true,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/best-safari-tour',
		Component: SafariTours,
		index: true,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/best-country-safari',
		Component: SafariTours,
		index: true,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/all-inclusive-african-safari',
		Component: SafariTours,
		index: true,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/destination',
		children: [
			{
				Component: Destination,
				index: true,
				errorElement: <ErrorBoundary />,
			},
			{
				path: '/destination/:slug',
				Component: TourPage,
				errorElement: <ErrorBoundary />,
			},
		],
	},
	{
		path: '/destinations',
		children: [
			{
				Component: Destinations,
				index: true,
				errorElement: <ErrorBoundary />,
			},
			{
				path: '/destinations/:country',
				Component: DestinationDetailPage,
				errorElement: <ErrorBoundary />,
			},
		],
	},
	{
		path: '/contact-us',
		Component: ContactUs,
		index: true,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/safari-enquiry',
		Component: SafariEnquiry,
		index: true,
		errorElement: <ErrorBoundary />,
	},
])

export const SafariRouter = () => {
	return <RouterProvider router={router} />
}
