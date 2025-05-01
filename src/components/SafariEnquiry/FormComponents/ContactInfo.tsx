/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'
import { InputText } from 'primereact/inputtext'
import { FC, useState } from 'react'
import { Form } from 'react-bootstrap'
import { COUNTRIES, PHONE_COUNTRIES } from '../../../constants/countries'
import { StepFormTemplateProps } from '../../../types/forms'

const data = {
	title: 'What’s the best way to get in touch with you?',
	description: 'Share your contact details, and let’s start crafting your dream safari experience!',
}

export const ContactInfo: FC<StepFormTemplateProps> = () => {
	const [contact, setContact] = useState<any>({
		name: '',
		email: '',
		phone_code: '',
		phone: '',
		country: '',
	})
	return (
		<div className='form-detail'>
			<h4>{data.title}</h4>
			<p>{data.description}</p>
			<Form.Group className='mb-4'>
				<Form.Label className='fw-bold w-100'>Full Name:</Form.Label>
				<InputText
					className='w-75'
					value={contact.name}
					onChange={(e) => setContact({ ...contact, name: e.target.value })}
					placeholder='Ex: John Doe'
				/>
			</Form.Group>
			<Form.Group className='mb-4'>
				<Form.Label className='fw-bold w-100'>Email:</Form.Label>
				<InputText
					className='w-75'
					id='email'
					placeholder='example@mail.com'
					value={contact.email}
					onChange={(e) => setContact({ ...contact, email: e.target.value })}
				/>
			</Form.Group>
			<Form.Group className='mb-4'>
				<Form.Label className='fw-bold w-100'>Phone:</Form.Label>

				<Dropdown
					value={contact.country}
					onChange={(e) => setContact({ ...contact, phone_code: e.value })}
					options={PHONE_COUNTRIES}
					optionLabel='name'
					placeholder='Ex: +1'
					className='w-25'
				/>
				<InputMask
					className='w-50'
					id='phone'
					mask='(999) 999-9999'
					placeholder='(999) 999-9999'
					value={contact.phone}
					onChange={(e) => setContact({ ...contact, phone: e.target.value })}
				/>
			</Form.Group>
			<Form.Group className='mb-4'>
				<Form.Label className='fw-bold w-100'>Country of Residence:</Form.Label>
				<Dropdown
					value={contact.country}
					onChange={(e) => setContact({ ...contact, country: e.value })}
					options={COUNTRIES}
					optionLabel='name'
					placeholder='Select a Country'
					className='w-75'
				/>
			</Form.Group>
		</div>
	)
}
