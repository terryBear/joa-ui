/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
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
			<Form.Group className='mb-4'>
				<InputText
					className='w-75'
					value={contact.name}
					onChange={(e) => setContact({ ...contact, name: e.target.value })}
					placeholder='Ex: John Doe'
				/>
			</Form.Group>
			<Form.Group className='mb-4'>
				<InputText
					className='w-75'
					id='email'
					placeholder='example@mail.com'
					value={contact.email}
					onChange={(e) => setContact({ ...contact, email: e.target.value })}
				/>
			</Form.Group>
			<Form.Group className='mb-4'>
				<InputTextarea
					className='w-75'
					id='message'
					rows={5}
					placeholder='Comment'
					value={contact.message}
					onChange={(e) => setContact({ ...contact, message: e.target.value })}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Button variant='primary' className='px-5' type='submit'>
					Subscribe Now
				</Button>
			</Form.Group>
		</Form>
	)
}
