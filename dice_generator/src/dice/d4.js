import { Button, Card, Form } from 'react-bootstrap'
import React from 'react'
import { D4 } from '../img/index'


class Four extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.props.onD4Change(event.target.value)
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
							name='d4'
							d4Amount={this.props.d4Amount}
							placeholder='#'
							onChange={this.handleChange}
							type='number'
							class='formControl'
						/>
						<Form.Group />
					</Form>
					<Button variant='warning' onClick={() => this.rollDice(4)}>
						D4
						<img src={D4} alt='four sided die' />
					</Button>
				</Card>
			</>
		)
	}
}
// const Four = (props) => {
// 	const [open, setOpen] = useState(false)
// 	const [d4Amount, setD4Amount] = useState({
// 		d4Amount: 0
// 	})

// 	function handleChange(event) {
// 		setD4Amount(event.target.value)
// 	 }

// 	return (
// 		<>
// 			<Button
// 				onClick={() => setOpen(!open)}
// 				aria-controls='example-collapse-text'
// 				aria-expanded={open}>
// 				<img src={D4} alt='four sided die' />
// 			</Button>
// 			<div style={{ minHeight: '150px' }}>
// 				<Collapse in={open} dimension='width'>
// 					<div id='example-collapse-text'>
// 						<Card body style={{ width: '400px' }}>
// 							<Form class='form'>
// 								<Form.Group controlId='amount'></Form.Group>
// 								<Form.Label>How many dice do you want to roll?</Form.Label>
// 								<Form.Control
// 									name='d4'
// 									value={props.d4Amount}
// 									placeholder='#'
// 									onChange={handleChange}
// 									type='number'
// 									class='formControl'
// 								/>
// 								<Form.Group />
// 								{/* <Button type='submit' onClick={() => this.handleChange()}>D4</Button> */}
// 							</Form>
// 						</Card>
// 					</div>
// 				</Collapse>
// 			</div>
// 		</>
// 	)
// }

export default Four;
