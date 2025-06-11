import { RadioButton } from 'primereact/radiobutton'
import { Slider } from 'primereact/slider'
import { FC } from 'react'
import { Form } from 'react-bootstrap'
import { StepFormTemplateProps } from '../../../types/forms'
import { formatCurrency } from '../../../utils'

const data = {
	title: 'Your budget is the starting point for an adventure designed just for you.',
	description: 'Complete the form below to help us tailor a personalized itinerary that reflects your preferences and budget.',
}

export const Budget: FC<StepFormTemplateProps> = ({ handleFormChange, formData }) => {
	return (
		<div className='form-detail'>
			<h4>{data.title}</h4>
			<p>{data.description}</p>

			<Form.Group className='mb-2'>
				<Form.Label className='fw-bold'>What is your budget for the entire trip? (Per person)</Form.Label>
				<Slider
					value={formData.budget}
					onChange={(e) => handleFormChange('budget', e.value)}
					min={5000}
					max={45000}
					step={100}
					prefix='$'
					data-pr-tooltip='{value}'
				/>
			</Form.Group>
			<div className='d-flex justify-content-between'>
				<small>{formatCurrency(5000, 'USD')}</small>
				<small>{formatCurrency(45000, 'USD')}</small>
			</div>
			<div className='my-4'>
				<h3 className='m-0'>{formatCurrency(formData.budget, 'USD')}</h3>
				<p className='m-0'>Per Person</p>
			</div>
			<Form.Group className='mb-2'>
				<Form.Label className='fw-bold'>What is most important to you?</Form.Label>
				<div>
					<Form.Label className='fw-bold d-flex align-items-center'>
						<RadioButton
							type='radio'
							name='mostImportant'
							id='budgetPriority'
							checked={formData.mostImportant === 'budgetPriority'}
							value='budgetPriority'
							onChange={(e) => {
								console.log(e)
								handleFormChange('mostImportant', e.target.value)
							}}
							className='me-2'
						/>
						Keeping to my budget.
					</Form.Label>
				</div>
				<div>
					<Form.Label className='fw-bold d-flex align-items-center'>
						<RadioButton
							type='radio'
							name='mostImportant'
							id='rightTripBudgetIncrease'
							checked={formData.mostImportant === 'rightTripBudgetIncrease'}
							value='rightTripBudgetIncrease'
							onChange={(e) => handleFormChange('mostImportant', e.target.value)}
							className='me-2'
						/>
						For the right trip, I'll increase my budget.
					</Form.Label>
				</div>
				<div>
					<Form.Label className='fw-bold d-flex align-items-center'>
						<RadioButton
							type='radio'
							name='mostImportant'
							id='perfectTrip'
							checked={formData.mostImportant === 'perfectTrip'}
							value='perfectTrip'
							onChange={(e) => handleFormChange('mostImportant', e.target.value)}
							className='me-2'
						/>
						Taking the perfect trip
					</Form.Label>
				</div>
			</Form.Group>
		</div>
	)
}
