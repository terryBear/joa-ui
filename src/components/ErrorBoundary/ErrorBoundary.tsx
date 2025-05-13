/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'react-bootstrap'
import { Link, useRouteError } from 'react-router'

export const ErrorBoundary = () => {
	const error: any = useRouteError()

	return (
		<div className='error-boundary text-center h-full d-flex flex-column justify-content-center align-items-center'>
			<h1>Something went wrong</h1>
			<p>{error?.message || error?.statusText}</p>
			<div className='p-5'>
				<Link to='/' className='text-decoration-none text-info'>
					<Button className='mx-2' size='sm' variant='outline-info'>
						Go to Home
					</Button>
				</Link>
				<Button className='mx-2' size='sm' variant='primary' onClick={() => window.location.reload()}>
					Reload Page
				</Button>
				<Link to='/contact-us' className='text-decoration-none text-secondary'>
					<Button className='mx-2' size='sm' variant='outline-secondary'>
						Contact Us
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default ErrorBoundary
