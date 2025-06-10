/* eslint-disable react-hooks/exhaustive-deps */
import { Checkbox } from 'primereact/checkbox'
import { InputTextarea } from 'primereact/inputtextarea'
import { FC, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { StepFormTemplateProps } from '../../../types/forms'

const data = {
	title: 'Craft Your Ultimate African Safari Experience',
	description:
		'Let’s craft a safari experience that’s uniquely yours. Share what excites you most about this adventure, and we’ll design a seamless, luxury journey tailored to your vision.',
}

const travelStyle_options = [
	{
		name: 'Luxury & Exclusive',
		code: 'luxury',
		description: 'Private game drives, ultra-luxurious lodges, and world-class service.',
	},
	{
		name: 'Family Friendly',
		code: 'family',
		description: 'Child-friendly lodges, fun activities, and educational wildlife encounters.',
	},
	{
		name: 'Romantic or Honeymoon',
		code: 'romantic',
		description: 'Intimate lodges, candlelit dinners, and private safaris.',
	},
	{
		name: 'Photography Safari',
		code: 'photography',
		description: 'Expert-guided, prime wildlife locations, and private vehicles.',
	},
	{
		name: 'Active & Adventure',
		code: 'active',
		description: 'Walking safaris, gorilla trekking, and thrilling off-road explorations.',
	},
	{
		name: 'Safari & Beach',
		code: 'safari_beach',
		description: 'Big 5 safaris paired with idyllic island and coastal escapes.',
	},
	{
		name: 'Wildlife Safari',
		code: 'wildlife',
		description: 'Iconic Big 5, rare species, and unforgettable game-viewing experiences.',
	},
	{
		name: 'Food & Wine',
		code: 'food_wine',
		description: 'Fine dining, vineyard tours, and gourmet African cuisine.',
	},
	{
		name: 'Wellness Safari',
		code: 'wellness',
		description: 'Spa treatments, yoga, and relaxation in peaceful wilderness settings.',
	},
]

export const TravelStyle: FC<StepFormTemplateProps> = ({ handleFormChange }) => {
	const [travelStyles, setTravelStyles] = useState<string[]>([])

	useEffect(() => {
		if (travelStyles) {
			handleFormChange('', travelStyles)
		}
	}, [travelStyles])
	return (
		<div className='form-detail'>
			<h4>{data.title}</h4>
			<p>{data.description}</p>
			<Form.Group className='mb-4'>
				<Form.Label className='fw-bold'>What type of safari experience do you want?</Form.Label>
				<p>Every safari package is custom-designed and unique. Choose the style of travel that best suits your vision:</p>
				<div>
					{travelStyle_options.map((option) => (
						<div key={option.code} className='mb-2'>
							<Form.Label className='d-flex align-items-center'>
								<Checkbox
									checked={travelStyles.includes(option.code)}
									onChange={(e) => {
										const selectedOptions = [...travelStyles]
										if (e.checked) {
											selectedOptions.push(option.code)
										} else {
											const index = selectedOptions.indexOf(option.code)
											if (index !== -1) {
												selectedOptions.splice(index, 1)
											}
										}
										setTravelStyles(selectedOptions)
									}}
									className='mx-2'
								/>
								<p className='fw-bold m-0'>
									{option.name}: <i className='fw-light'>{option.description}</i>
								</p>
							</Form.Label>
						</div>
					))}
				</div>
			</Form.Group>
			<Form.Group className='mb-4'>
				<Form.Label className='fw-bold'>Tell us about your African dream:</Form.Label>
				<p>This will help us design your perfect African Adventure</p>
				<ul>
					<li>Areas you want to visit</li>
					<li>Are you celebrating a special occasion?</li>
					<li>What are your interests (safari, food, wine, photography)</li>
				</ul>
				<InputTextarea rows={5} cols={30} autoResize className='w-100' placeholder='Ex: Safari, food, wine, photography...' />
			</Form.Group>
		</div>
	)
}
