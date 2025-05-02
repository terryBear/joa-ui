/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export const NewsletterForm = () => {
	// const api = useApi()
	const [contact, setContact] = useState<any>({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	return (
		<Form onSubmit={() => {}}>
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
