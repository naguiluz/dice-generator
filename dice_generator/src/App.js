import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './App.scss'
// import {rollD2, rollD4} from './dice'

class App extends Component {
	constructor(props) {
		super(props)
		this.rollDice = this.rollDice.bind(this)
	}
	rollDice(sides) {
		return function() {
      // e.preventDefault()
			let result = Math.ceil(Math.random() * sides)
			console.log(`You rolled a ${result}`)
		}

		// const rollD2 = () => rollDice(2)
		// const rollD4 = () => rollDice(4)
		// const rollD6 = () => rollDice(6)
		// const rollD8 = () => rollDice(8)
		// const rollD10 = () => rollDice(10)
		// const rollD12 = () => rollDice(12)
		// const rollD20 = () => rollDice(20)
		// const rollD100 = () => rollDice(100)
	}
	render() {
		return (
			<div className='App'>
				<Button variant='warning' onClick={this.rollDice(2)}>
					D2
				</Button>
				<Button variant='warning' onClick={this.rollDice(4)}>
					D4
				</Button>
				<Button variant='warning' onClick={this.rollDice(6)}>
					D6
				</Button>
				<Button variant='warning' onClick={this.rollDice(8)}>
					D8
				</Button>
				<Button variant='warning' onClick={this.rollDice(10)}>
					D10
				</Button>
				<Button variant='warning' onClick={this.rollDice(12)}>
					D12
				</Button>
				<Button variant='warning' onClick={this.rollDice(20)}>
					D20
				</Button>
				<Button variant='warning' onClick={this.rollDice(100)}>
					D100
				</Button>
			</div>
		)
	}
}

export default App;
