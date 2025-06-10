/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSafariContext } from '../../Providers/SafariProvider'
import { useContactService } from '../../services/useContactService'

export const NewsletterForm = () => {
	const { createContact } = useContactService()
	const { handleSnackbar } = useSafariContext()
	const [contact, setContact] = useState<any>({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			await createContact({
				name: contact.name,
				email: contact.email,
				subject: 'Newsletter Subscription',
				message: 'I would like to subscribe to the newsletter.',
			})
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
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<InputText
					className='w-100'
					value={contact.name}
					onChange={(e) => setContact({ ...contact, name: e.target.value })}
					placeholder='Ex: John Doe'
				/>
			</Form.Group>
			<Form.Group>
				<InputText
					className='w-100'
					id='email'
					placeholder='example@mail.com'
					value={contact.email}
					onChange={(e) => setContact({ ...contact, email: e.target.value })}
				/>
			</Form.Group>
			<Form.Group controlId='formBasicEmail'>
				<Button variant='info' type='submit'>
					Subscribe Now
				</Button>
			</Form.Group>
		</Form>
	)
}
