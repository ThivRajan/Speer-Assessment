import Menu from '../menu/Menu'
import Slides from '../slides/Slides'

const Landing = () => {
	return (
		<div>
			<Menu bg={'#0B0B0B'} fgOpen={'white'} fgClosed={'white'} highlight={'#D34848'} />
			<Slides />
		</div>
	);
}

export default Landing;
