import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './App.scss'
import { D4, D6, D8, D10, D12, D20, D100 } from './img/index'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			result: 0,
      amount: 1,
      numsRolled: '',
      rolledPrint: ''
		}
		// this.rollDice = this.rollDice.bind(this)
	}

  handleChange = (event) =>
    this.setState({
      [event.target.name]:event.target.value
    })

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
      rolledPrint: rolledPrint
		})
	}

	render() {
		// let result = this.rollDice()
		return (
			<>
				<div className='App'>
					<Form>
						<Form.Group controlId='amount'></Form.Group>
						<Form.Label>How many dice do you want to roll?</Form.Label>
						<Form.Control
							name='amount'
							value={this.state.amount}
							placeholder='#'
							onChange={this.handleChange}
						/>
						<Form.Group />
					</Form>
					{/* <Button variant='warning' onClick={() => this.rollDice(2)}>
						D2
					</Button> */}
					<img src={D4} alt='four sided die' />
					<Button variant='warning' onClick={() => this.rollDice(4)}>
						D4
					</Button>
					<img src={D6} alt='six sided die' />
					<Button variant='warning' onClick={() => this.rollDice(6)}>
						D6
					</Button>
					<img src={D8} alt='eight sided die' />
					<Button variant='warning' onClick={() => this.rollDice(8)}>
						D8
					</Button>
					<img src={D10} alt='ten sided die' />
					<Button variant='warning' onClick={() => this.rollDice(10)}>
						D10
					</Button>
					<img src={D12} alt='twelve sided die' />
					<Button variant='warning' onClick={() => this.rollDice(12)}>
						D12
					</Button>
					<img src={D20} alt='twenty sided die' />
					<Button variant='warning' onClick={() => this.rollDice(20)}>
						D20
					</Button>
					<img class='d100' src={D100} alt='two ten sided die' />
					<Button variant='warning' onClick={() => this.rollDice(100)}>
						D100
					</Button>
					<div id='rolled dice'>You rolled: {this.state.rolledPrint}</div>
					<div id='result'>Totalling: {this.state.result}</div>
				</div>
			</>
		)
	}
	
}

export default App;
