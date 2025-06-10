export const Loading = () => {
	return (
		<div className='global-loading flex items-center justify-center h-screen'>
			<svg width='100px' height='100px' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
				<circle cx='50' cy='50' r='20' fill='#f9c74f'>
					<animateTransform
						attributeName='transform'
						type='rotate'
						from='0 50 50'
						to='360 50 50'
						dur='1.2s'
						repeatCount='indefinite'
					/>
				</circle>

				<g stroke='#f9844a' strokeWidth='4'>
					<line x1='50' y1='10' x2='50' y2='0' />
					<line x1='50' y1='90' x2='50' y2='100' />
					<line x1='90' y1='50' x2='100' y2='50' />
					<line x1='10' y1='50' x2='0' y2='50' />
					<line x1='78.28' y1='78.28' x2='85.36' y2='85.36' />
					<line x1='21.72' y1='21.72' x2='14.64' y2='14.64' />
					<line x1='78.28' y1='21.72' x2='85.36' y2='14.64' />
					<line x1='21.72' y1='78.28' x2='14.64' y2='85.36' />
					<animateTransform
						attributeName='transform'
						type='rotate'
						from='360 50 50'
						to='0 50 50'
						dur='2.4s'
						repeatCount='indefinite'
					/>
				</g>
			</svg>
		</div>
	)
}
