import { useState, useEffect } from 'react'
import styled from 'styled-components';

import img1 from '../../assets/img-1.png';
import img2 from '../../assets/img-2.png';
import img3 from '../../assets/img-3.png';

const Slides = () => {

	const [activeSlide, setActiveSlide] = useState(0)
	const slides = [img1, img2, img3]

	useEffect(() => {
		setTimeout(() => setActiveSlide((activeSlide + 1) % 3), 10000)
	})

	return (
		<SlideContainer img={slides[activeSlide]}>
			<h1>Interactive Concert Experience</h1>
			<h2>
				Experience your favourite artists
				like never before and from the comfort
				of your own home.
			</h2>
			<button className="cta">Try It Now</button>
			<div className="slider-nav">
				{
					slides.map((_slide, idx) =>
						<Navdot
							onClick={() => setActiveSlide(idx)}
							isActive={activeSlide === idx}
						/>
					)
				}
			</div>
		</SlideContainer>
	)
}

const SlideContainer = styled.div`
	background-image: url(${props => props.img}); 
	background-position: center;
    height: 100vh;
    width: 100%;
    background-size: cover;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: white;

	h1 {
		text-transform: uppercase;
		letter-spacing: 5px;
		font-size: 50px;
	}

	h2 {
		max-width: 60vw;
		font-size: 30px;
		font-weight: 200;
		letter-spacing: 1px;
	}

	.cta {
		outline:0;
		border-radius: 50px;
		border: none;
		color: white;
		font-size: 0.8em;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		letter-spacing: 4px;
		overflow: hidden;
		position: relative; //absolute
		padding: 2em 3em;
		margin: 4em;
		text-transform: uppercase;
		-webkit-tap-highlight-color: transparent;
		transition: all 500ms ease-in-out;
		&::after, &::before { 
			content: "";
			position: absolute;
		}
		&:hover, &:focus {
			background: rgba(255, 255, 255, 0.8);
		}

		&::before {
			background: transparent;
			border-radius: 100%;
			top: 50%;
			left: 50%;
			box-shadow: 0 1em 2em 3em rgba(255, 50, 0, 0.5),
						4em 0em 2em 2em rgba(155, 50, 0, 0.6),
						-4em -2em 2em 2em rgba(255, 0, 150, 0.5),
						-4em 2em 2em 4em rgba(0, 0, 150, 0.5),
						0 -3em 2em 3em rgba(120, 250, 0, 0.5),
						2em -1em 2em 2em rgba(50, 10, 200, 0.5);
			width: 0;
			height: 0;
			animation: mix 5s linear infinite;
		}
	}

	.slider-nav {
		display: flex;
		position: absolute;
		bottom: 20px;
	}
`

const Navdot = styled.div`
	height: 15px;
	width: 15px;
	border-radius: 50%;
	border: solid white 1px;
	background: ${props => props.isActive ? 'white' : 'none'};
	margin: 5px;
`

export default Slides;