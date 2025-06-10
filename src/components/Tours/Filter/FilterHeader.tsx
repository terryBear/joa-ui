import { Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import { useSafariContext } from '../../../Providers/SafariProvider'

export const FilterHeader = () => {
	const { filter, setFilter, layoutview, setLayoutView } = useSafariContext()
	return (
		<div className='filter-header'>
			<Row>
				<Col xs={12} sm={9} className='mb-3'>
					{Object.keys(filter).length > 0 && (
						<>
							<h3>Chips</h3>
							<Button variant='link' className='p-0 me-2' onClick={() => setFilter([])}>
								Clear Filters
							</Button>
						</>
					)}
				</Col>
				<Col xs={12} sm={3} className='mb-3 text-right'>
					<ButtonGroup aria-label='Basic example'>
						<Button
							variant={layoutview === 'list' ? 'outline-info' : 'info'}
							onClick={() => setLayoutView(layoutview === 'list' ? 'grid' : 'list')}
							style={{ padding: '6px 10px', fontSize: 20, borderRadius: 0 }}>
							{layoutview === 'grid' && <i className='bi bi-grid-fill' />}
							{layoutview === 'list' && <i className='bi bi-grid' />}
						</Button>
						<Button
							variant={layoutview === 'grid' ? 'outline-info' : 'info'}
							onClick={() => setLayoutView(layoutview === 'list' ? 'grid' : 'list')}
							style={{ padding: '6px 10px', fontSize: 20, borderRadius: 0, marginLeft: -2 }}>
							{layoutview === 'grid' && <i className='bi bi-hdd-stack' />}
							{layoutview === 'list' && <i className='bi bi-hdd-stack-fill' />}
						</Button>
					</ButtonGroup>
				</Col>
			</Row>
		</div>
	)
}
