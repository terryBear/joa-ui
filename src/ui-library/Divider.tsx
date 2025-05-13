export interface DividerProps {
	width?: string
	height?: string
	color?: string
	margin?: string
}
export const Divider = ({ width = '100%', height = '1px', color = 'var(--bs-info)', margin = '16px 0' }: DividerProps) => {
	return (
		<div
			style={{
				width: width,
				height: height,
				backgroundColor: color,
				margin: margin,
			}}></div>
	)
}
