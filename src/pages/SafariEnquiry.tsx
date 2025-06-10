/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Banner } from '../components/Banner/Banner'
import { Budget } from '../components/SafariEnquiry/FormComponents/Budget'
import { ContactInfo } from '../components/SafariEnquiry/FormComponents/ContactInfo'
import { TravelStyle } from '../components/SafariEnquiry/FormComponents/TravelStyle'
import { TripDetails } from '../components/SafariEnquiry/FormComponents/TripDetails'

import { Steps } from 'primereact/steps'
import { Nullable } from 'primereact/ts-helpers'
import { MainAppLayout } from '../layout/Layout'
import { useSafariContext } from '../Providers/SafariProvider'
import { useContactService } from '../services/useContactService'

export interface StepWizardProps {
	index: number
	label: string
	element: JSX.Element
}

export const SafariEnquiry = () => {
	const { createBookingRequest } = useContactService()
	const { handleSnackbar } = useSafariContext()
	const [activeStep, setActiveStep] = useState(1)
	const [formData, setFormData] = useState<{
		selectedDestinations: string[]
		travelDate: Nullable<Date>
		nights: [number, number]
		adults: number | null
		hasChildren: boolean
		children: number | null
		adultAges: number[]
		childAges: number[]
		travelStyles: string[]
		contact: {
			name: string
			email: string
			phone_code: string
			phone: string
			country: string
		}
		budget: number | [number, number] | null | undefined
		mostImportant: string
		message: string
		subject: string
	}>({
		selectedDestinations: [],
		travelDate: null,
		nights: [5, 45],
		adults: 0,
		hasChildren: false,
		children: 0,
		adultAges: [],
		childAges: [],
		travelStyles: [],
		contact: {
			name: '',
			email: '',
			phone_code: '',
			phone: '',
			country: '',
		},
		budget: 5000,
		mostImportant: '',
		message: 'Booking an African safari',
		subject: 'Safari Enquiry',
	})

	const handleFormChange = (key: string, value: any) => {
		let data = {
			...formData,
		}
		if (key) {
			// @ts-expect-error No index signature with a parameter of type 'string' was found
			data[key] = value
		} else {
			data = {
				...formData,
				...value, // Assuming value is an object with the same structure as formData
			}
		}
		setFormData({ ...data })
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			await createBookingRequest(formData)
			handleSnackbar({
				message: 'Your message has been sent successfully.',
				severity: 'success',
			})
		} catch (error) {
			console.error('Error sending message:', error)
			handleSnackbar({
				message: 'Your message cannot be sent at this time. Please try again later.',
				severity: 'danger',
			})
		}
	}

	const [steps] = useState<StepWizardProps[]>([
		{
			index: 1,
			label: 'Trip Details',
			element: <TripDetails index={1} handleFormChange={handleFormChange} />,
		},

		{
			index: 2,
			label: 'Travel Style',
			element: <TravelStyle index={2} handleFormChange={handleFormChange} />,
		},

		{
			index: 3,
			label: 'Budget',
			element: <Budget index={3} handleFormChange={handleFormChange} />,
		},

		{
			index: 4,
			label: 'Contact Info',
			element: <ContactInfo index={4} handleFormChange={handleFormChange} />,
		},
	])

	return (
		<MainAppLayout>
			<Banner
				hero={true}
				title='Start Your African Safari Journey Today'
				description='For more information on our safaris and tours, and to receive an obligation-free quote for your dream safari, and start your journey today!'
				image='/images/rolling-hills-of-uganda-and-rwanda-2024-10-17-04-32-41-utc.jpg'
			/>
			<div className='safari-enquiry'>
				<Container className='py-5'>
					<Form onSubmit={handleSubmit}>
						<div className='card'>
							<Steps
								model={steps}
								activeIndex={activeStep - 1}
								readOnly={true}
								className='m-2 pt-4'
								onSelect={(e) => {
									setActiveStep(e.index + 1)
								}}
							/>
							{steps.map((step) => (
								<div key={step.index} className={`step ${activeStep === step.index ? 'active' : ''}`}>
									{step.element}
								</div>
							))}
							<div className='d-flex justify-content-between mt-4 p-4'>
								<div>
									{activeStep !== 1 && (
										<Button
											variant='outline-secondary'
											disabled={activeStep === 1}
											className='px-5'
											size='sm'
											onClick={() => {
												setActiveStep(activeStep - 1)
											}}>
											Previous
										</Button>
									)}
								</div>
								<Button
									variant='primary'
									onClick={() => {
										if (activeStep < steps.length) {
											setActiveStep(activeStep + 1)
										} else {
											// Submit the form
										}
									}}
									className='px-5'
									size='sm'
									type={activeStep === steps.length ? 'submit' : 'button'}>
									{activeStep === steps.length ? 'Submit' : 'Next'}
								</Button>
							</div>
						</div>
					</Form>
				</Container>
			</div>
		</MainAppLayout>
	)
}
