import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SubscriptionInfo = ({ plan }) => {

	const { type, model, price, highlight, features } = plan

	return (
		<SubscriptionInfoContainer highlight={highlight}>
			<h1 className="plan-title">{type}</h1>
			<h1 className="plan-model">{model}</h1>
			<h1 className="plan-price">{price}</h1>
			<ul>
				{features.map(feature => <li className="feature">{feature}</li>)}
			</ul>
			<Link to="/payment">
				<button className="select-btn">SELECT</button>
			</Link>
		</SubscriptionInfoContainer >
	)
}

const SubscriptionInfoContainer = styled.div`
	margin-right: 50px;

	.plan-title, .plan-model {
		color: ${props => props.highlight};
		font-weight: 200;
	}

	.plan-title {
		border-bottom: 1px solid ${props => props.highlight};
		width: max-content;
		font-size: 25px;
		padding-bottom: 5px;
		margin-bottom: 10px;
	}

	.plan-model {
		font-size: 23px;
	}

	.plan-price {
		font-size: 60px;
		color: ${props => props.highlight};
	}

	.feature {
		font-size: 20px;
		letter-spacing: 2px;
	}

	.select-btn {
		width: 208px;
		height: 50px;
		border: none;
		border-radius: 79px;
		opacity: 1;
	
		font-size: 15px;
		font-weight: bold;
		letter-spacing: 1px;
		background: ${props => props.highlight};
		color: white;
		cursor: pointer;

		:active {
			filter: brightness(95%);
		}
	}
`

export default SubscriptionInfo