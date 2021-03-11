import Menu from './components/menu/menu'
import './App.css'

const App = () => {
	return (
		<div>
			<Menu bg={'black'} fgOpen={'white'} fgClosed={'black'} highlight={'red'} />
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
