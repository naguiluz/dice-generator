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
			// amount: 1,
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
			total: 0,
			multipleRolledPrint: ''
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

	handleD4Change(d4Amount) {
		this.setState({
			d4Amount: d4Amount,
		})
	}

	handleD6Change(d6Amount) {
		this.setState({
			d6Amount: d6Amount,
		})
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
	// handleChange = (event) =>
	//   this.setState({
	//     [event.target.name]:event.target.value
	//   })

	rollDice = (sides) => {
		let numsRolled = []
		let result = 0
		for (let i = 0; i < this.state.amount; i++) {
			numsRolled.push(Math.ceil(Math.random() * sides))
		}
		for (let i = 0; i < numsRolled.length; i++) {
			result += numsRolled[i]
		}
		console.log(`You rolled ${numsRolled.join()}`)
		console.log(`Giving a total of ${result}`)
		let rolledPrint = numsRolled.join(' + ')

		this.setState({
			result: result,
			numsRolled: numsRolled,
			rolledPrint: rolledPrint,
		})
	}

	rollMultipleDice = (sides) => {
		let total = 0
		let diceRolled = []
		for (let i = 0; i < this.state.d4Amount; i++) {
			
			diceRolled.push(Math.ceil(Math.random() * 4))
		}
		for (let i = 0; i < this.state.d6Amount; i++) {
			diceRolled.push(Math.ceil(Math.random() * 6))
		}
		for (let i = 0; i < this.state.d8Amount; i++) {
			diceRolled.push(Math.ceil(Math.random() * 8))
		}
		for (let i = 0; i < this.state.d10Amount; i++) {
			diceRolled.push(Math.ceil(Math.random() * 10))
		}
		for (let i = 0; i < this.state.d12Amount; i++) {
			diceRolled.push(Math.ceil(Math.random() * 12))
		}
		for (let i = 0; i < this.state.d20Amount; i++) {
			diceRolled.push(Math.ceil(Math.random() * 20))
		}
		for (let i = 0; i < this.state.d100Amount; i++) {
			diceRolled.push(Math.ceil(Math.random() * 100))
		}
		for (let i = 0; i < diceRolled.length; i++) {
			total += diceRolled[i]
		}

		console.log(`You rolled ${diceRolled.join()}`)
		console.log(`Giving a total of ${total}`)
		let multipleRolledPrint = diceRolled.join(' + ')
		this.setState({
			diceRolled: diceRolled,
			total: total,
			multipleRolledPrint: multipleRolledPrint
		})

		
	}

	render() {
		

		return (
			<>
				<div className='App'>
					<Form class='form'>
						{/* <Form.Group controlId='amount'></Form.Group>
						<Form.Label>How many dice do you want to roll?</Form.Label>
						<Form.Control
							name='amount'
							value={this.state.amount}
							placeholder='#'
							onChange={this.handleChange}
							type='number'
							class='formControl'
						/>

						<Form.Group /> */}
						
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
						<Button variant='danger' onClick={() => this.rollMultipleDice()}>Roll All</Button>
						{/* <Six onClick={() => this.rollDice(6)} />
						<Eight onClick={() => this.rollDice(8)} />
						<Ten onClick={() => this.rollDice(10)} />
						<Twelve onClick={() => this.rollDice(12)} />
						<Twenty onClick={() => this.rollDice(20)} />
						<Hundred onClick={() => this.rollDice(100)} /> */}
						{/* <Button variant='warning' onClick={() => this.rollDice(4)}>
							D4
							<img src={D4} alt='four sided die' />
						</Button>
						
						<Button variant='warning' onClick={() => this.rollDice(6)}>
							D6
							<img src={D6} alt='six sided die' />
						</Button>
						<Button variant='warning' onClick={() => this.rollDice(8)}>
							D8
							<img src={D8} alt='eight sided die' />
						</Button>
						<Button variant='warning' onClick={() => this.rollDice(10)}>
							D10
							<img src={D10} alt='ten sided die' />
						</Button>
						<Button variant='warning' onClick={() => this.rollDice(12)}>
							D12
							<img src={D12} alt='twelve sided die' />
						</Button>
						<Button variant='warning' onClick={() => this.rollDice(20)}>
							D20
							<img src={D20} alt='twenty sided die' />
						</Button>
						<Button variant='warning' onClick={() => this.rollDice(100)}>
							D100
							<img class='d100' src={D100} alt='two ten sided die' />
						</Button> */}
					</Form>

					<div id='rolled dice'>You rolled: {this.state.rolledPrint}</div>
					<div id='result'>Totalling: {this.state.result}</div>
				</div>
				{/* multiple sides test */}
				{/* <Mix /> */}
			</>
		)
	}
}

export default App;
