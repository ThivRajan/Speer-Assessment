import './Form.css'

const Form = ({ mainFields, subFields }) => (
	<form>
		<label>{mainFields[0]}</label>
		<input type="text" />

		<label>{mainFields[1]}</label>
		<input type="text" />

		<div className="subfields-container">
			<div className="subfield">
				<label>{subFields[0]}</label>
				<input type="text" />
			</div>

			<div className="subfield">
				<label>{subFields[1]}</label>
				<input type="text" />
			</div>
		</div>

		<label>{mainFields[2]}</label>
		<input type="text" />
	</form>
)

export default Form