export interface DividerProps {
	width?: string
	height?: string
	color?: string
	margin?: string
	layout?: 'horizontal' | 'vertical'
}
export const Divider = ({
	width = '100%',
	height = '1px',
	color = 'var(--bs-info)',
	margin = '16px 0',
	layout = 'horizontal',
}: DividerProps) => {
	const verticalStyles = {
		width: width,
		height: height,
		backgroundColor: color,
		margin: margin,
	}

	return (
		<div
			style={
				layout === 'vertical'
					? verticalStyles
					: {
							width: width,
							height: height,
							backgroundColor: color,
							margin: margin,
					  }
			}></div>
	)
}
