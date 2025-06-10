/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FILTERS } from '../../../constants/filters'
import { useSafariContext } from '../../../Providers/SafariProvider'
import { useSafariService } from '../../../services/useSafariService'
import { Tour } from '../../../types/tours'
import { JoaChip } from '../../../ui-library/JoaChip'
import { TitleDivider } from '../../../ui-library/TitleDivider'
import { FilterCard } from '../Filter/FilterCard'
import { TourCard } from '../TourCard/TourCard'

export interface TourLayoutGridProps {
	items?: number
	args?: any
}

const presetFilters = [
	{
		label: 'Luxury & Exclusive',
		value: 'luxury',
		config: [],
	},
	{
		label: 'Sabi Sands GR',
		value: 'sabi-sands-gr',
		config: [],
	},
	{
		label: 'Okavango Delta, BW',
		value: 'okavango-delta-bw',
		config: [],
	},
	{
		label: 'Family Safari',
		value: 'family-safari',
		config: [],
	},
	{
		label: 'Masai Mara, Kenya',
		value: 'masai-mara-kenya',
		config: [],
	},
	{
		label: 'Serengeti, Tanzania',
		value: 'serengeti-tanzania',
		config: [],
	},
	{
		label: 'Honeymoon',
		value: 'honeymoon',
		config: [],
	},
	{
		label: 'Cape Town',
		value: 'cape-town',
		config: [],
	},
]

// @ts-ignore
export const TourLayoutGrid = ({ args = {} }) => {
	const { getSafariList } = useSafariService()
	const { setIsLoading } = useSafariContext()
	const [tours, setTours] = useState<Tour[]>()
	const [activeChip, setActiveChip] = useState('')

	const getSafariTours = async () => {
		const response = await getSafariList()
		if (response) {
			setTours(response)
		} else {
			console.error('Failed to fetch safari tours')
		}
		setIsLoading(false)
	}

	useEffect(() => {
		setIsLoading(true)
		getSafariTours()
	}, [])

	return (
		<Container className='py-5'>
			<Row>
				<Col xs={12}>
					<h3 className='text-center letter-spacing-0'>
						Find over <strong className='text-secondary'>150</strong> Luxury African Safari Packages & Ideas
					</h3>
					<h6 className='mb-5 text-center'>Let your Safari Expert Customize Your Dream Africa Tour</h6>
					<TitleDivider />
				</Col>
				<Col xs={12} className='mt-5 text-center mb-5'>
					{presetFilters.map((filter, index) => (
						<JoaChip
							key={index}
							label={filter.label}
							value={filter.value}
							config={filter.config}
							onClick={(ev) => {
								console.log(ev)
								setActiveChip(filter.value)
							}}
							className={activeChip === filter.value ? 'active' : ''}
						/>
					))}
				</Col>
			</Row>
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
						{tours?.map((tour: Tour, index: number) => (
							<Col xs={12} md={6} className='mb-4' key={index}>
								<TourCard
									handleClick={(tour: Tour) => {
										console.log(tour)
									}}
									tour={tour}
								/>
							</Col>
						))}
					</Row>
					<Row>
						<Col xs={12} className='text-left'>
							<Button type='button' className='mt-3 px-5 w-100' variant='outline-dark'>
								show more
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}
