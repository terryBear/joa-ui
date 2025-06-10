/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSafariContext } from '../../Providers/SafariProvider'
import { useContactService } from '../../services/useContactService'
import { Divider } from '../../ui-library/Divider'
import { PrivacyLink } from '../Legal/PrivacyLink'

export const CtaForm = () => {
	const { createContact } = useContactService()
	const { handleSnackbar } = useSafariContext()
	const [contact, setContact] = useState<any>({
		name: '',
		email: '',
		subject: 'Call to Action Form',
		message: '',
	})

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			// Here you would typically handle the form submission,
			// such as sending the data to an API or processing it.
			console.log('Form submitted:', contact)
			await createContact(contact)
			handleSnackbar({
				message: 'Your message has been sent successfully.',
				severity: 'success',
			})
			setContact({
				name: '',
				email: '',
				subject: '',
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
			<Form.Group className='mb-4'>
				<InputText
					className='w-100'
					value={contact.name}
					onChange={(e) => setContact({ ...contact, name: e.target.value })}
					placeholder='Ex: John Doe'
				/>
			</Form.Group>
			<Form.Group className='mb-4'>
				<InputText
					className='w-100'
					id='email'
					placeholder='example@mail.com'
					value={contact.email}
					onChange={(e) => setContact({ ...contact, email: e.target.value })}
				/>
			</Form.Group>
			<PrivacyLink />
			<Divider />
			<Form.Group className='mb-3 text-center' controlId='formBasicEmail'>
				<Button variant='secondary' className='px-5' type='submit'>
					Submit
				</Button>
			</Form.Group>
		</Form>
	)
}
