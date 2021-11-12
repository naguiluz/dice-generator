import { Button, Collapse, Card, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import { D100 } from '../img/index'

function Hundred(props) {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Button
				onClick={() => setOpen(!open)}
				aria-controls='example-collapse-text'
				aria-expanded={open}>
				<img src={D100} alt='Hundred sided die' />
			</Button>
			<div style={{ minHeight: '150px' }}>
				<Collapse in={open} dimension='width'>
					<div id='example-collapse-text'>
						<Card body style={{ width: '400px' }}>
							<Form class='form'>
								<Form.Group controlId='amount'></Form.Group>
								<Form.Label>How many dice do you want to roll?</Form.Label>
								<Form.Control
									name='amount'
									value={props.amount}
									placeholder='#'
									onChange={props.handleChange}
									type='number'
									class='formControl'
								/>
								<Form.Group />
							</Form>
						</Card>
					</div>
				</Collapse>
			</div>
		</>
	)
}

export default Hundred
