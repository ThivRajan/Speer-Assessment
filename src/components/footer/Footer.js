import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
	<footer>
		<span className="contact">
			<FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
			support@experienceconcerts.co
		</span>
		<div className="brand">
			<span className="brand-name">EXP|CON</span>
			<span className="copyright">
				2019 © All Rights Reserved | Speer Technologies Incorporated
			</span>
		</div>
	</footer>
)

export default Footer
