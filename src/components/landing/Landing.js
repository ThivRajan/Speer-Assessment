import Menu from '../menu/Menu'
import Slides from '../slides/Slides'
import SoundSection from '../soundSection/SoundSection'

// CustomCursor toggle method had to be passed through here
// because I wasn't able to keep it contained in the Sound Section
const Landing = ({ setShowCursor }) => {
	return (
		<div>
			<Menu bg={'#0B0B0B'} fgOpen={'white'} fgClosed={'white'} highlight={'#D34848'} />
			<Slides />
			<SoundSection setShowCursor={setShowCursor} />
		</div>
	);
}

export default Landing;
