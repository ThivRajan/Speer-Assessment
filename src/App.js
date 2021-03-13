import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Landing from './components/landing/Landing'
import CustomCursor from './components/customCursor/CustomCursor'
import Pricing from './components/pricingView/PricingView'
import PaymentView from './components/paymentView/PaymentView'
import Footer from './components/footer/Footer'

const App = () => {
	// there were issues with putting the CustomCursor in the sound section 
	// component, so I had to handle its state here
	const [showCursor, setShowCursor] = useState(false)

	return (
		<>
			<Switch>
				<Route path="/payment">
					<PaymentView />
				</Route>
				<Route path="/pricing">
					<Pricing />
				</Route>
				<Route path="/">
					<CustomCursor showCursor={showCursor} />
					<Landing setShowCursor={setShowCursor} />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
