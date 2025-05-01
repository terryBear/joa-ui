/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { FilterCardProps, FilterOptions } from '../../../types/filters'
import { Divider } from '../../../ui-library/Divider'

export interface FilterSortOptions {
	destinations: string[] | null
	experiences: string[] | null
	duration: number | null
	comfort_levels: string[] | null
	accomodation: string[] | null
	amenities: string[] | null
}

const defaultFilters: FilterSortOptions = {
	destinations: null,
	experiences: null,
	duration: 5,
	comfort_levels: null,
	accomodation: null,
	amenities: null,
}

export const FilterCard = ({ filters }: FilterCardProps) => {
	// @ts-ignore
	const [filterQuery, setFilterQueries] = useState<FilterSortOptions>(defaultFilters)

	return (
		<Card>
			<Card.Body>
				<h5>Refine your safari</h5>
				<Card.Text>
					<Form>
						{filters.map((filter: FilterOptions) => {
							if (filter.component === 'select') {
								return (
									<div key={filter.key}>
										<p className='mb-2 mt-4 font-family-button text-uppercase fw-bolder'>
											<small>{filter.title}</small>
										</p>
										<Form.Select aria-label='Default select example'>
											<option>{filter.value.join(', ')}</option>
											{filter.value.map((option) => (
												<option key={option} value={option}>
													{option}
												</option>
											))}
										</Form.Select>
										<Divider />
									</div>
								)
							} else if (filter.component === 'range') {
								return (
									<div key={filter.key}>
										<p className='mb-2 mt-4 font-family-button text-uppercase fw-bolder'>
											<small>{filter.title}</small>
										</p>
										<Form.Range />
										<Divider />
									</div>
								)
							} else {
								return (
									<div key={filter.key}>
										<p className='mb-2 mt-4 font-family-button text-uppercase fw-bolder'>
											<small>{filter.title}</small>
										</p>

										{filter.value.map((option, index) => (
											<Form.Check
												type={filter.component === 'checkbox' ? 'checkbox' : 'radio'}
												label={option}
												key={`${filter.key}-${index}-${option.replace(' ', '_')}`}
											/>
										))}
										<Divider />
									</div>
								)
							}
						})}

						<Button type='submit' className='btn btn-primary btn-sm w-100 mt-3'>
							Apply Filters
						</Button>
					</Form>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}
