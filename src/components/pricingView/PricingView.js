import './PricingView.css'
import Menu from '../menu/Menu'
import SubscriptionInfo from '../subscriptionInfo/SubscriptionInfo'

const Pricing = () => {

	const plans = [
		{
			type: 'BASIC',
			model: 'MONTHLY',
			price: '$9',
			highlight: '#D24848',
			features: [
				'Very good',
				'Amazing',
				'Perfect job',
				'Love this',
				'It’s so good',
				'Features'
			]
		},
		{
			type: 'ADVANCED',
			model: 'YEARLY',
			price: '$99',
			highlight: '#FFB33F',
			features: [
				'Very very good',
				'Even Amazing',
				'Perfect job',
				'Love this more',
				'It’s so so good',
				'More Features'
			]
		},
		{
			type: 'PRO',
			model: 'YEARLY',
			price: '$120',
			highlight: '#1FE1E9',
			features: [
				'Very very good',
				'Even more',
				'Perfect job',
				'Love this more',
				'It’s so so good',
				'More Features'
			]
		}
	]

	return (
		<div class="pricing-container">
			<Menu bg={'#1FE1E9'} fgOpen={'white'} fgClosed={'white'} highlight={'black'} />
			<h1 className="pricing-title">PRICING</h1>
			<p className="pricing-subtitle">
				Test out our app today! Choose from three
				subscription Based payment models.
			</p>
			<div class="sub-container">
				{plans.map(plan => <SubscriptionInfo plan={plan} />)}
			</div>
		</div>
	)
}

export default Pricing