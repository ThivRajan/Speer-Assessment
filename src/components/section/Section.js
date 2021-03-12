import styled from 'styled-components'
import Menu from '../menu/Menu'

import speaker1 from '../../assets/speaker-1.png';
import speaker2 from '../../assets/speaker-2.png';

const Section = () => {
	return (
		<SectionContainer>
			<Menu bg={'#0B0B0B'} fgOpen={'white'} fgClosed={'white'} highlight={'#D34848'} />
			<div className="text-container">
				<h1>SUPERIOR SOUND</h1>
				<h2>Experience live versions of your favourite songs.</h2>
				<button className="demo-btn">SEE DEMO</button>
			</div>
			<div className="img-container">
				<div>
					<img src={speaker1} className="speaker1" alt="Speaker 1" />
				</div>
				<div>
					<img src={speaker2} className="speaker2" alt="Speaker 2" />
				</div>
			</div>
		</SectionContainer>
	);
}

const SectionContainer = styled.div`
	background: #D34848 0% 0% no-repeat padding-box;
	opacity: 1;

	display: flex;
	justify-content: center;

	position: relative;

	.text-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-right: 30px;
	}

	.img-container {
		display: flex;
	}

	.demo-btn {
		top: 1781px;
		left: 184px;
		width: 338px;
		height: 81px;
		/* UI Properties */
		background: #FFFFFF 0% 0% no-repeat padding-box;
		border: none;
		border-radius: 79px;
		opacity: 1;

		font-size: 25px;
		font-weight: bold;
		letter-spacing: 1px;
		color: #D34848;

		:hover {
			cursor: pointer;
		}

		:active {
			filter: brightness(95%);
		}
	}

	h1 {
		color: white;
		text-transform: uppercase;
		letter-spacing: 5px;
		font-size: 50px;
		margin: 0;
	}

	h2 {
		max-width: 60vw;
		font-size: 40px;
		font-weight: 200;
		letter-spacing: 1px;
		width: 500px;
	}

	img {
		width: 20vw;
	}

	.speaker1 {
		margin-top: 200px;
	}

	.speaker2 {
		margin-top: 400px;
	}
`



export default Section;
