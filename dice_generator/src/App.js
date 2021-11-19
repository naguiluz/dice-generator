import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './App.scss'
import { Four, Six, Eight, Ten, Twelve, Twenty, Hundred } from './dice/index'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			result: 0,
			d4Amount: 0,
			d6Amount: 0,
			d8Amount: 0,
			d10Amount: 0,
			d12Amount: 0,
			d20Amount: 0,
			d100Amount: 0,
			numsRolled: '',
			rolledPrint: '',
			diceRolled: '',
		}
		// this.handleChange = this.handleChange.bind(this)

		this.handleD4Change = this.handleD4Change.bind(this)
		this.handleD6Change = this.handleD6Change.bind(this)
		this.handleD8Change = this.handleD8Change.bind(this)
		this.handleD10Change = this.handleD10Change.bind(this)
		this.handleD12Change = this.handleD12Change.bind(this)
		this.handleD20Change = this.handleD20Change.bind(this)
		this.handleD100Change = this.handleD100Change.bind(this)
		this.rollDice = this.rollDice.bind(this)
	}
	// two parameters
	// amount and sides being changed
	// handleChange(numSides, sidesAmount) {
	//   
	// }
	handleD4Change(d4Amount) {
		this.setState({
			d4Amount: d4Amount,
		})
	}

	handleD6Change(d6Amount) {
		this.setState({
			d6Amount: d6Amount,
		})
		console.log(this.state.d4Amount)
	}

	handleD8Change(d8Amount) {
		this.setState({
			d8Amount: d8Amount,
		})
	}

	handleD10Change(d10Amount) {
		this.setState({
			d10Amount: d10Amount,
		})
	}

	handleD12Change(d12Amount) {
		this.setState({
			d12Amount: d12Amount,
		})
	}

	handleD20Change(d20Amount) {
		this.setState({
			d20Amount: d20Amount,
		})
	}

	handleD100Change(d100Amount) {
		this.setState({
			d100Amount: d100Amount,
		})
	}

	rollDice = (sides) => {
		let numsRolled = []
		let result = 0
		// setting variable to take sides as a string
		let stateVar = `d${sides}Amount`
		// once sides are set as a string, they become a readable number to iterate through rather than having to access the state amount directly
		for (let i = 0; i < this.state[stateVar]; i++) {
			numsRolled.push(Math.ceil(Math.random() * sides))
		}
		for (let i = 0; i < numsRolled.length; i++) {
			result += numsRolled[i]
		}
		let rolledPrint = numsRolled.join(' + ')

		this.setState({
			result: result,
			numsRolled: numsRolled,
			rolledPrint: rolledPrint,
		})
	}

	rollMultipleDice = () => {
		let total = 0
		let diceRolled = []
		// store all side amount in an array to make the addition of new dice simpler
		const allSides = [4, 6, 8, 10, 12, 20, 100]
		// iterate through all the available sizes of dice
		for (let i = 0; i < allSides.length; i++) {
			// store the values inside all sides in a variable
			const numSides = allSides[i]
			// iterate through the numSides and do the math with provided numbers
			for (let j = 0; j < this.state[`d${numSides}Amount`]; j++) {
				diceRolled.push(Math.ceil(Math.random() * numSides))
			}
		}
		// for (let i = 0; i < this.state.d4Amount; i++) {
		// 	diceRolled.push(Math.ceil(Math.random() * 4))
		// }
		// for (let i = 0; i < this.state.d6Amount; i++) {
		// 	diceRolled.push(Math.ceil(Math.random() * 6))
		// }
		// for (let i = 0; i < this.state.d8Amount; i++) {
		// 	diceRolled.push(Math.ceil(Math.random() * 8))
		// }
		// for (let i = 0; i < this.state.d10Amount; i++) {
		// 	diceRolled.push(Math.ceil(Math.random() * 10))
		// }
		// for (let i = 0; i < this.state.d12Amount; i++) {
		// 	diceRolled.push(Math.ceil(Math.random() * 12))
		// }
		// for (let i = 0; i < this.state.d20Amount; i++) {
		// 	diceRolled.push(Math.ceil(Math.random() * 20))
		// }
		// for (let i = 0; i < this.state.d100Amount; i++) {
		// 	diceRolled.push(Math.ceil(Math.random() * 100))
		// }
		for (let i = 0; i < diceRolled.length; i++) {
			total += diceRolled[i]
		}

		console.log(`You rolled ${diceRolled.join()}`)
		console.log(`Giving a total of ${total}`)
		let multipleRolledPrint = diceRolled.join(' + ')
		// setting state or result and rolledPrint to avoid extra state variables and print out easier
		this.setState({
			diceRolled: diceRolled,
			result: total,
			rolledPrint: multipleRolledPrint,
		})
	}

	render() {
		return (
			<>
				<div className='App'>
					<Form class='form'>
						<Four
							name='amount'
							d4Amount={this.state.d4Amount}
							placeholder='#'
							onD4Change={this.handleD4Change}
							type='number'
							class='formControl'
							onRollDice={() => this.rollDice(4)}
						/>
						<Six
							name='amount'
							d6Amount={this.state.d6Amount}
							placeholder='#'
							onD6Change={this.handleD6Change}
							type='number'
							class='formControl'
							onRollDice={() => this.rollDice(6)}
						/>
						<Eight
							name='amount'
							d8Amount={this.state.d8Amount}
							placeholder='#'
							onD8Change={this.handleD8Change}
							type='number'
							class='formControl'
							onRollDice={() => this.rollDice(8)}
						/>
						<Ten
							name='amount'
							d10Amount={this.state.d10Amount}
							placeholder='#'
							onD10Change={this.handleD10Change}
							type='number'
							class='formControl'
							onRollDice={() => this.rollDice(10)}
						/>
						<Twelve
							name='amount'
							d12Amount={this.state.d12Amount}
							placeholder='#'
							onD12Change={this.handleD12Change}
							type='number'
							class='formControl'
							onRollDice={() => this.rollDice(12)}
						/>
						<Twenty
							name='amount'
							d20Amount={this.state.d20Amount}
							placeholder='#'
							onD20Change={this.handleD20Change}
							type='number'
							class='formControl'
							onRollDice={() => this.rollDice(20)}
						/>
						<Hundred
							name='amount'
							d100Amount={this.state.d100Amount}
							placeholder='#'
							onD100Change={this.handleD100Change}
							type='number'
							class='formControl'
							onRollDice={() => this.rollDice(100)}
						/>
						<Button variant='danger' onClick={() => this.rollMultipleDice()}>
							Roll All
						</Button>
					</Form>

					<div id='rolled dice'>You rolled: {this.state.rolledPrint}</div>
					<div id='result'>Totaling: {this.state.result}</div>
				</div>
			</>
		)
	}
}

export default App;
