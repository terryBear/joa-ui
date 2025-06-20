/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { COUNTRIES } from '../../constants/countries'
import { useSafariContext } from '../../Providers/SafariProvider'
import { useContactService } from '../../services/useContactService'
import { Tour } from '../../types/tours'
import { Divider } from '../../ui-library/Divider'
import { AgreementLink } from '../Legal/AgreementLink'

interface TourBookingFormProps {
	tour: Tour
	travellersChildren: any
	travellers: any
	travelDate: string | Date | number
}

export const TourBookingForm = ({ tour, travellersChildren, travellers, travelDate }: TourBookingFormProps) => {
	const { createBooking } = useContactService()
	const { handleSnackbar } = useSafariContext()
	const [contact, setContact] = useState<any>({
		// @ts-ignore
		tour: tour?.id,
		contact: {
			name: '',
			email: '',
			phone: '',
			subject: 'Booking Request',
		},
		travel_date: travelDate,
		travellers: travellers.code + travellersChildren.code,
		country: '',
		message: '',
	})

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const params = { ...contact }
		// @ts-ignore
		params.tour = tour.id
		const _date = new Date(travelDate)
		params.travel_date = `${_date.getFullYear()}-${_date.getMonth()}-${_date.getDate()}`
		params.country = contact.country.code
		try {
			// Here you would typically handle the form submission,
			// such as sending the data to an API or processing it.
			await createBooking(params)
			handleSnackbar({
				message: 'Your message has been sent successfully.',
				severity: 'success',
			})
			setContact({
				tour: tour,
				contact: {
					name: '',
					email: '',
					phone: '',
					subject: 'Booking Request',
				},
				travel_date: travelDate,
				travellers: travellers.code + travellersChildren.code,
				country: '',
				message: '',
			})
		} catch (error) {
			console.error('Error sending message:', error)
			handleSnackbar({
				message: 'Your message cannot be sent at this time. Please try again later.',
				severity: 'danger',
			})
		}
	}
	return (
		<Form onSubmit={handleSubmit} className='w-100'>
			<h3 className='text-center my-4'>Request a Free Quote</h3>
			<Form.Group className='mb-4'>
				<InputText
					className='w-100'
					value={contact.contact.name}
					onChange={(e) =>
						setContact({
							...contact,
							...contact.contact,
							contact: { ...contact.contact, name: e.target.value },
						})
					}
					placeholder='Ex: John Doe'
				/>
			</Form.Group>
			<Form.Group className='mb-4'>
				<InputText
					className='w-100'
					id='email'
					placeholder='example@mail.com'
					value={contact.contact.email}
					onChange={(e) =>
						setContact({
							...contact,
							...contact.contact,
							contact: { ...contact.contact, email: e.target.value },
						})
					}
				/>
			</Form.Group>
			<Form.Group className='mb-4'>
				<Dropdown
					value={contact.country}
					onChange={(e) => {
						console.log(e)
						setContact({ ...contact, country: e.value })
					}}
					options={COUNTRIES}
					optionLabel='name'
					id='country'
					placeholder='Country of Residence'
					className='w-100'
				/>
			</Form.Group>
			<Form.Group className='mb-4'>
				<InputText
					className='w-100'
					id='phone'
					placeholder='Mobile Number:'
					value={contact.contact.phone}
					onChange={(e) =>
						setContact({
							...contact,
							...contact.contact,
							contact: { ...contact.contact, phone: e.target.value },
						})
					}
				/>
			</Form.Group>
			<Form.Group className='mb-4'>
				<InputTextarea
					className='w-100'
					id='message'
					rows={5}
					placeholder='Tell Us More:'
					value={contact.message}
					onChange={(e) => setContact({ ...contact, message: e.target.value })}
				/>
			</Form.Group>
			<AgreementLink />
			<Divider />
			<Form.Group className='mb-3 text-center' controlId='formBasicEmail'>
				<Button variant='primary' className='px-5' type='submit'>
					send request
				</Button>
			</Form.Group>
		</Form>
	)
}
