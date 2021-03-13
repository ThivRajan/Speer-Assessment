import { useState } from 'react'

import './App.css'
import Landing from './components/landing/Landing'
import CustomCursor from './components/customCursor/CustomCursor'

const App = () => {
	// there were issues with putting the CustomCursor in the sound section 
	// component, so I had to handle its state here
	const [showCursor, setShowCursor] = useState(false)

	return (
		<>
			<CustomCursor showCursor={showCursor} />
			<Landing setShowCursor={setShowCursor} />
		</>
	);
}

export default App;
