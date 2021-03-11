import Menu from './components/menu/Menu'
import './App.css'

const App = () => {
	return (
		<div>
			<Menu bg={'#0B0B0B'} fgOpen={'white'} fgClosed={'#0B0B0B'} highlight={'#D34848'} />
			<div>
				<h1>Pricing</h1>
				<p>
					Test our our app today! Choose from three subscription
					based payment models.
				</p>
			</div>
		</div>
	);
}

export default App;
