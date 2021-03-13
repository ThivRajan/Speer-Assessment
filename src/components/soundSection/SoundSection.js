import './Section.css'
import Menu from '../menu/Menu'

import speaker1 from '../../assets/speaker-1.png';
import speaker2 from '../../assets/speaker-2.png';
import elevatorMusic from '../../assets/elevator-music.mp3'

const music = new Audio(elevatorMusic)
music.loop = true

const Section = ({ setShowCursor }) => {

	const toggleMusic = () => {
		if (music.paused) music.play()
		else music.pause()
	}

	return (
		<div className="section"
			onMouseEnter={() => setShowCursor(true)}
			onMouseLeave={() => setShowCursor(false)}
		>
			<Menu bg={'#0B0B0B'} fgOpen={'white'} fgClosed={'white'} highlight={'#D34848'} />
			<button className="demo-btn cta-btn">TRY IT NOW</button>
			<div className="text-container">
				<h1 className="sound-title">SUPERIOR SOUND</h1>
				<h2>Experience live versions of your favourite songs.</h2>
				<button className="demo-btn">SEE DEMO</button>
			</div>
			<div className="img-container">
				<div>
					<img
						src={speaker1}
						className="speaker1"
						onClick={() => toggleMusic()}
						alt="Speaker 1"
					/>
				</div>
				<div>
					<img
						src={speaker2}
						className="speaker2"
						onClick={() => toggleMusic()}
						alt="Speaker 2"
					/>
				</div>
			</div>
		</div>
	);
}


export default Section;
