import { useState } from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = ({ bg, fgOpen, fgClosed, highlight }) => {

	const [isOpen, setIsOpen] = useState(false)
	const menuItems = ['what is it', 'perks', 'pricing']

	return (
		<MenuContainer isOpen={isOpen} bg={bg} fgOpen={fgOpen} fgClosed={fgClosed}
			highlight={highlight}
		>
			<div className='circle'></div>
			<span className="menu-head">
				<FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} />
				<span>EXP|CON</span>
			</span>
			<div className="menu-body">
				{menuItems.map(item => <div className='menu-item'>{item}</div>)}
			</div>
		</MenuContainer>
	)
}

const MenuContainer = styled.div`
	font-size: 20px;
	position: absolute;
	top: 10px;
	left: 10px;

	.circle {
		position: absolute;
		top: -50px;
		left: -50px;
		border-radius: 50%;
		background: ${props => props.bg};
		z-index: -1;
		transition: width 350ms ease-in, height 350ms ease-in;

		${props => props.isOpen ? 'width: 200px; height: 200px' : 'width: 0px; height: 0px'};
	}

	.menu-head {
		transition: color 350ms;
		color: ${props => props.isOpen ? props.highlight : props.fgClosed};
	}

	.menu-head span {
		margin-left: 10px;
	}

	.menu-item {
		font-weight: 300;
		text-transform: uppercase;
		color: ${props => props.fgOpen};
		opacity: ${props => props.isOpen ? '1' : '0'};
		transition: opacity 500ms;
	}
`

export default Menu;