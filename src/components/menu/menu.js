import { useState } from 'react'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = ({ bg, fgOpen, fgClosed, highlight }) => {
	const [isOpen, setIsOpen] = useState(false)
	const currentRoute = useLocation()

	const menuItems = ['what is it', 'perks', 'pricing']
	const menuRoutes = ['/', '/perks', '/pricing']

	return (
		<MenuContainer isOpen={isOpen} bg={bg} fgOpen={fgOpen} fgClosed={fgClosed}
			highlight={highlight} currentRoute={currentRoute}
		>
			<div className="menu-content">
				<span className="menu-head">
					<FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} />
					<span>EXP|CON</span>
				</span>
				<div className="menu-body">
					{
						menuItems.map((item, idx) =>
							<Link to={menuRoutes[idx]} className="link">
								<MenuItem
									isOpen={isOpen}
									color={fgOpen}
									isActive={currentRoute.pathname === menuRoutes[idx]}
									highlight={highlight}
								>
									{item}
								</MenuItem>
							</Link>
						)
					}
				</div>
			</div>
		</MenuContainer>
	)
}

const MenuItem = styled.div`
	font-weight: 300;
	text-transform: uppercase;
	cursor: pointer;
	color: ${props => props.isActive ? props.highlight : props.color};
	visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
	transition: opacity 500ms;
	opacity: ${props => props.color ? '1' : '0'};
`

// using styled components here because of many conditional styles
const MenuContainer = styled.div`
	font-size: 25px;
	position: absolute;
	top: -70px;
	left: -40px;
	border-radius: 50%;
	background: ${props => props.bg};
	transition: width 350ms ease-in, height 350ms ease-in;

	${props => props.isOpen ? 'width: 275px; height: 275px' : 'width: 0; height: 0'};

	.link {
		text-decoration: none;
	}

	.menu-content {
		position: absolute;
		top: 120px;
		left: 100px;
	}

	.menu-head {
		display: flex;
		transition: color 350ms;
		cursor: pointer;
		color: ${props => props.isOpen ? props.highlight : props.fgClosed};
	}

	.menu-head span {
		margin-left: 10px;
	}
`

export default Menu;