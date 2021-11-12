import { Button, Collapse, Card, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import { Four, Six, Eight, Ten, Twelve, Twenty, Hundred } from './dice/index'

function Mix(props) {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Button
				onClick={() => setOpen(!open)}
				aria-controls='example-collapse-text'
				aria-expanded={open}>
				Mixed Dice
			</Button>
			<div style={{ minHeight: '150px' }}>
				<Collapse in={open} dimension='width'>
					<div id='example-collapse-text'>
						<Card body style={{ width: '400px' }}>
							<Four />
							<Six />
							<Eight />
							<Ten />
							<Twelve />
							<Twenty />
							<Hundred />

							<Button variant='warning' type='submit'>
								Roll
							</Button>
						</Card>
					</div>
				</Collapse>
			</div>
		</>
	)
}

export default Mix;
