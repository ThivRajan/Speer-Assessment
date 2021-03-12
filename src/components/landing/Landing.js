import Menu from '../menu/Menu'
import Slides from '../slides/Slides'
import Section from '../section/Section'

const Landing = () => {
	return (
		<div>
			<Menu bg={'#0B0B0B'} fgOpen={'white'} fgClosed={'white'} highlight={'#D34848'} />
			<Slides />
			<Section />
		</div>
	);
}

export default Landing;
