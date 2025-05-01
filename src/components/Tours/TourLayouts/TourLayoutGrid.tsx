/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FILTERS } from '../../../constants/filters'
import DummyTours from '../../../datasets/tours.json'
import { FilterCard } from '../Filter/FilterCard'
import { TourCard } from '../TourCard/TourCard'

export interface TourLayoutGridProps {
	items?: number
}

export const TourLayoutGrid = ({ items = 2 }: TourLayoutGridProps) => {
	// @ts-ignore
	const [tours, setTours] = useState()
	return (
		<Container className='py-5 my-5'>
			<Row>
				<Col xs={12} md={4} lg={3} className='mb-4'>
					<FilterCard
						filters={FILTERS}
						handleFilterChange={(event: any) => {
							console.log(event)
						}}
						onSubmit={function (): void {
							throw new Error('Function not implemented.')
						}}
						onReset={function (): void {
							throw new Error('Function not implemented.')
						}}
					/>
				</Col>
				<Col xs={12} md={8} lg={9} className='mb-4'>
					<Row>
						{DummyTours.map((tour, index) => (
							<Col xs={12} md={12 / items} className='mb-4' key={index}>
								<TourCard
									handleClick={(tour) => {
										console.log(tour)
									}}
									// @ts-ignore
									tour={tour}
								/>
							</Col>
						))}
					</Row>
					<Row>
						<Col xs={12} className='text-left'>
							<Button type='submit' className='mt-3 px-5' size='sm' variant='outline-primary'>
								Show More
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}
