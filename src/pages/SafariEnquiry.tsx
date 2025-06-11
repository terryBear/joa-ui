/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX, useMemo, useState } from 'react'
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
		selectedDestinations: any[]
		travelDate: Date | number | string | Nullable<Date>
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
			country: any
		}
		budget: number | [number, number] | null | undefined
		mostImportant: string
		message: string
		subject: string
		travelDescription: string
	}>({
		selectedDestinations: [],
		travelDate: new Date(),
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
		travelDescription: '',
	})

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const params: any = {}
		params.destination = formData.selectedDestinations.length > 0 ? formData.selectedDestinations.map((dest: any) => dest.code) : []
		// params.destination = `['${params.destination.join(',')}']`

		if (formData?.travelDate) {
			const _date = new Date(formData?.travelDate)
			params.departure_date = `${_date.getFullYear()}-${_date.getMonth()}-${_date.getDate()}`
		}
		params.duration = formData.nights[1] - formData.nights[0] + 1
		params.adults = formData.adults
		params.adult_age_ranges =
			formData.adultAges.length > 0 ? formData.adultAges.map((age: any) => String(age.code)) : formData.adultAges
		params.adult_age_ranges = params.adult_age_ranges.join(',')
		params.children = formData.children
		params.children_age_ranges =
			formData.childAges.length > 0 ? formData.childAges.map((age: any) => String(age.code)) : formData.childAges
		params.children_age_ranges = params.children_age_ranges.join(',')
		params.travel_style = formData.travelStyles
		params.travel_message = formData.travelDescription
		params.budget = formData.budget
		params.budget_importance = formData.mostImportant
		params.country_of_residence = formData.contact.country.code
		params.contact = formData.contact
		params.contact.country = formData.contact.country.code
		// @ts-ignore
		params.contact.phone_code = formData.contact.phone_code?.code
		params.country = params.contact.country
		try {
			await createBookingRequest(params)
			handleSnackbar({
				message: 'Your message has been sent successfully.',
				severity: 'success',
			})
			setFormData({
				selectedDestinations: [],
				travelDate: new Date(),
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
				travelDescription: '',
			})
			setActiveStep(1)
		} catch (error) {
			console.error('Error sending message:', error)
			handleSnackbar({
				message: 'Your message cannot be sent at this time. Please try again later.',
				severity: 'danger',
			})
		}
	}

	const handleFormChange = (key: string, value?: any) => {
		console.log(`Updating formData: ${key} =`, value)
		setFormData({
			...formData,
			[key]: value,
		})
	}

	const [steps] = useMemo(() => {
		const steps: StepWizardProps[] = [
			{
				index: 1,
				label: 'Trip Details',
				element: <TripDetails formData={formData} index={1} handleFormChange={handleFormChange} />,
			},

			{
				index: 2,
				label: 'Travel Style',
				element: <TravelStyle formData={formData} index={2} handleFormChange={handleFormChange} />,
			},

			{
				index: 3,
				label: 'Budget',
				element: <Budget formData={formData} index={3} handleFormChange={handleFormChange} />,
			},

			{
				index: 4,
				label: 'Contact Info',
				element: <ContactInfo formData={formData} index={4} handleFormChange={handleFormChange} />,
			},
		]
		return [steps, steps.length]
	}, [formData, handleFormChange])

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
											variant='secondary'
											disabled={activeStep === 1}
											className='px-5'
											size='sm'
											type='button'
											onClick={() => {
												setActiveStep(activeStep - 1)
											}}>
											Previous
										</Button>
									)}
								</div>
								{activeStep < steps.length && (
									<Button
										variant='primary'
										onClick={() => setActiveStep(activeStep + 1)}
										className='px-5'
										size='sm'
										type='button'>
										{activeStep === steps.length ? 'Submit' : 'Next'}
									</Button>
								)}
								{activeStep === steps.length && (
									<Button variant='primary' className='px-5' size='sm' type='submit'>
										Submit
									</Button>
								)}
							</div>
						</div>
					</Form>
				</Container>
			</div>
		</MainAppLayout>
	)
}
