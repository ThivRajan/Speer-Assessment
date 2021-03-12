import { useState, useEffect } from 'react'
import styled from 'styled-components';

import img1 from '../../assets/img-1.png';
import img2 from '../../assets/img-2.png';
import img3 from '../../assets/img-3.png';

//TODO: interval improperly cleared if navdot is clicked before 10s
//TODO: fix sizing on zoom
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
		top: 675px;
		left: 818px;
		width: 284px;
		height: 79px;
		
		background: transparent linear-gradient(90deg, #1FE1E9 0%, #5E33D1 34%, #D34848 65%, #FFB33F 100%) 0% 0% no-repeat padding-box;
		border-radius: 79px;
		border: none;
		color: white;
		
		font-size: 18px;
		letter-spacing: 2px;
		text-transform: uppercase;

		:hover {
			cursor: pointer;
		}

		:active {
			filter: brightness(95%);
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