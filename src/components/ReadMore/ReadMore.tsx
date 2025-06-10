import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '../Icons/Icons'

interface ReadMoreProps {
	content: React.ReactNode
	size?: 'sm' | 'md' | 'lg'
	align?: 'left' | 'center' | 'right'
	expandText?: string
	collapseText?: string
}

export const ReadMore = ({ content, size = 'md', align = 'center', expandText = '', collapseText = '' }: ReadMoreProps) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div className={`read-more ${isExpanded ? 'expanded' : ''}`}>
			<div className={`read-more-content ${isExpanded ? 'expanded' : ''}`}>{content}</div>
			<button onClick={toggleReadMore} className={`read-more__toggle ${size} text-${align}`}>
				<small>{isExpanded ? collapseText : expandText}</small>
				{isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
			</button>
		</div>
	)
}
