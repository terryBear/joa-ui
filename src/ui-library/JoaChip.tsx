import { useSafariContext } from '../Providers/SafariProvider'
import { FilterOptions } from '../types/filters'

interface JoaChipProps {
	label: string
	value: string
	config?: FilterOptions[]
	onClick?: (value: string) => void
	className?: string
}

export const JoaChip = ({
	label = 'Luxury & Exclusive',
	value = 'luxury',
	config = [],
	onClick = () => {},
	className = '',
}: JoaChipProps) => {
	const { handleFilterChange } = useSafariContext()

	const handleClick = (config: FilterOptions[]) => {
		handleFilterChange(config)
		onClick(value)
	}
	return (
		<button
			className={`joa-chip ${className}`}
			onClick={() => {
				handleClick(config)
				if (config.length > 0) {
				}
			}}>
			{label}
		</button>
	)
}
