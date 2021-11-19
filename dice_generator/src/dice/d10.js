import { Button, Card, Form } from 'react-bootstrap'
import React from 'react'
import { D10 } from '../img/index'

class Ten extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.props.onD10Change(event.target.value)
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
							name='d10'
							d10Amount={this.props.d10Amount}
							placeholder='#'
							onChange={this.handleChange}
							type='number'
							class='formControl'
							min='0'
						/>
						<Form.Group />
					</Form>
					<Button variant='warning' onClick={() => this.rollDice(10)}>
						D10
						<img src={D10} alt='four sided die' />
					</Button>
				</Card>
			</>
		)
	}
}

// function Ten(props) {
// 	const [open, setOpen] = useState(false)

// 	return (
// 		<>
// 			<Button
// 				onClick={() => setOpen(!open)}
// 				aria-controls='example-collapse-text'
// 				aria-expanded={open}>
// 				<img src={D10} alt='Ten sided die' />
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

export default Ten
