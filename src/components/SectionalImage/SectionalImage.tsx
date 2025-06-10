interface SectionalImageProps {
	image: string
	className?: string
	style?: React.CSSProperties
}
export const SectionalImage = ({ image, className = '', style = {} }: SectionalImageProps) => {
	return <img alt={image.split('/')[-1]} src={image} className={`sectional__image ${className}`} style={style} />
}
