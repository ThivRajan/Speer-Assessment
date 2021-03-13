import { useState } from 'react'
import styled from 'styled-components'
import './PaymentView.css'

import Menu from '../menu/Menu'
import Form from '../form/Form'

const PaymentView = () => {

	const [planType, setPlanType] = useState(0)
	const plans = ['basic', 'advanced', 'pro']
	const planColors = ['#D24848', '#FFB33F', '#1FE1E9']

	return (
		<div className="payment-container">
			<Menu bg={'#0B0B0B'} fgOpen={'white'} fgClosed={'black'} highlight={'#D34848'} />
			<h1>PAYMENT</h1>
			<p>1. Select your plan</p>
			<div className="plan-options">
				{
					plans.map((plan, idx) =>
						<PlanInput
							isSelected={planType === idx}
							planColor={planColors[idx]}
						>
							<div class='radio-btn' onClick={() => setPlanType(idx)} />
							{plan}
						</PlanInput>
					)
				}
			</div>
			<div className="forms-container">
				<div className="bill-info">
					<p>2. Billing Information</p>
					<Form
						className="billing-form"
						mainFields={['Full Name', 'Billing Address', 'Country']}
						subFields={['City', 'Postal Code']}
					/>
				</div>
				<div className="card-info">
					<p>3. Credit Card Information</p>
					<Form
						className="card-form"
						mainFields={['Cardholder\'s Name', 'Card Number', 'CVV']}
						subFields={['Expiry Month', 'Expiry Year']}
					/>
				</div>
			</div>
			<div className="terms">
				<p>
					By continuing, I acknowledge that I've read and agree to the
					<span className="highlight"> Terms of Service </span> &amp;
					<span className="highlight"> Privacy Policy</span>.
				</p>
				<button className="cta">Download</button>
			</div>
		</div>
	)
}

const PlanInput = styled.span`
	margin-right: 10px;
	font-weight: bold;
	display: flex;
	text-transform: uppercase;

	.radio-btn {
		height: 12px;
		width: 12px;
		border-radius: 50%;
		margin-right: 5px;
		cursor: pointer;
		border: 1px solid ${props => props.isSelected ? props.planColor : 'black'};
		background: ${props => props.isSelected ? props.planColor : 'white'};
	}
`

export default PaymentView