/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react'
import { Button, Dropdown, Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink, useLocation } from 'react-router'
import { DESTINATIONS } from '../../constants/destinations'

export const NavBar = () => {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (
		<Navbar expand='lg' className='bg-body-white top-main-navbar'>
			<Container>
				<Navbar.Brand
					as={NavLink}
					// @ts-ignore
					className={({ isActive }: { isActive: any }) => (isActive ? 'active' : '')}
					to='/'
					style={{ width: 136 }}>
					<Image fluid={true} src='/business/logos/shadow.jpeg' alt='Logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='justify-content-end w-100 m-0 align-items-center'>
						<Dropdown>
							<Dropdown.Toggle variant='link' id='dropdown-basic' className='text-decoration-none text-dark'>
								Destinations
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{DESTINATIONS.map((destination: any) => (
									<Dropdown.Item
										as={NavLink}
										// @ts-ignore
										className={({ isActive }: any) => {
											return isActive ? 'active' : ''
										}}
										to={`/destinations/${destination.slug}`}>
										{destination.title}
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>
						<Nav.Link
							as={NavLink}
							// @ts-ignore
							className={({ isActive }) => {
								return isActive ? 'active' : ''
							}}
							to='/safari-tour'>
							Safari & Tours
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							// @ts-ignore
							className={({ isActive }) => {
								return isActive ? 'active' : ''
							}}
							to='/about-us'>
							About Us
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							// @ts-ignore
							className={({ isActive }) => {
								return isActive ? 'active' : ''
							}}
							to='/contact-us'>
							Contact Us
						</Nav.Link>
						{/* <Nav.Item className="m-0">
              <Form>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    className="m-0"
                    style={{
                      width: 100,
                      backgroundColor: "transparent",
                    }}
                  />
                  <Button type="submit">S</Button>
                </InputGroup>
              </Form>
            </Nav.Item> */}
						<Link to='/safari-enquiry' className='text-white text-decoration-none'>
							<Button variant='primary' className='ms-3'>
								Enquire Now
							</Button>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
