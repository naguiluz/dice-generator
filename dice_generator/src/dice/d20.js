import { Button, Card, Form } from 'react-bootstrap'
import React from 'react'
import { D20 } from '../img/index'

class Twenty extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.props.onD20Change(event.target.value)
	}

	rollDice(sides) {
		this.props.onRollDice(sides)
	}

	render() {
		return (
			<>
				<Card body style={{ width: '400px' }}>
					<Form class='form'>
						<Form.Group controlId='amount'></Form.Group>
						<Form.Label>How many dice do you want to roll?</Form.Label>
						<Form.Control
							name='d20'
							d20Amount={this.props.d20Amount}
							placeholder='#'
							onChange={this.handleChange}
							type='number'
							class='formControl'
							min='0'
						/>
						<Form.Group />
					</Form>
					<Button variant='warning' onClick={() => this.rollDice(20)}>
						D20
						<img src={D20} alt='four sided die' />
					</Button>
				</Card>
			</>
		)
	}
}

// function Twenty(props) {
// 	const [open, setOpen] = useState(false)

// 	return (
// 		<>
// 			<Button
// 				onClick={() => setOpen(!open)}
// 				aria-controls='example-collapse-text'
// 				aria-expanded={open}>
// 				<img src={D20} alt='Twenty sided die' />
// 			</Button>
// 			<div style={{ minHeight: '150px' }}>
// 				<Collapse in={open} dimension='width'>
// 					<div id='example-collapse-text'>
// 						<Card body style={{ width: '400px' }}>
// 							<Form class='form'>
// 								<Form.Group controlId='amount'></Form.Group>
// 								<Form.Label>How many dice do you want to roll?</Form.Label>
// 								<Form.Control
// 									name='amount'
// 									value={props.amount}
// 									placeholder='#'
// 									onChange={props.handleChange}
// 									type='number'
// 									class='formControl'
// 								/>
// 								<Form.Group />
// 							</Form>
// 						</Card>
// 					</div>
// 				</Collapse>
// 			</div>
// 		</>
// 	)
// }

export default Twenty
