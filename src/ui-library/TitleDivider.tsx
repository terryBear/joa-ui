export interface DividerProps {
	width?: string
	height?: string
	color?: string
	margin?: string
}
export const TitleDivider = ({ width = '100%', height = '1px', color = 'var(--bs-info)', margin = '16px 0' }: DividerProps) => {
	return (
		<div
			style={{
				width: width,
				height: height,
				backgroundColor: color,
				margin: margin,
				alignContent: 'center',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<span className='bg-white h6 text-primary m-0 py-4 px-3'>Popular Safaris & Tours</span>
		</div>
	)
}
