import { useState } from 'react'
import styled from 'styled-components'

import './PaymentView.css'

const PaymentView = () => {

	const [planType, setPlanType] = useState(0)
	const plans = ['basic', 'advanced', 'pro']
	const planColors = ['#D24848', '#FFB33F', '#1FE1E9']

	return (
		<div className="payment-container">
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
			<div className="form">
				<div className="bill-info">
					<p>2. Billing Information</p>
				</div>
				<div className="card-info">
					<p>3. Credit Card Information</p>
				</div>

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