import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './App.scss'

class App extends Component {
	constructor(props) {
		super(props)
    this.state = {
      rollValue: 0
    }
    // this.rollDice = this.rollDice.bind(this)
	}
	rollDice = (sides) => {
			let result = Math.ceil(Math.random() * sides)
			console.log(`You rolled a ${result}`)
      this.setState({
        rollValue: result
      })
      
	}

	render() {
    // let result = this.rollDice()
		return (
			<>
				<div className='App'>
					<Button variant='warning' onClick={(sides) => this.rollDice(2)}>
						D2
					</Button>
					<Button variant='warning' onClick={(sides) => this.rollDice(4)}>
						D4
					</Button>
					<Button variant='warning' onClick={(sides) => this.rollDice(6)}>
						D6
					</Button>
					<Button variant='warning' onClick={(sides) => this.rollDice(8)}>
						D8
					</Button>
					<Button variant='warning' onClick={(sides) => this.rollDice(10)}>
						D10
					</Button>
					<Button variant='warning' onClick={(sides) => this.rollDice(12)}>
						D12
					</Button>
					<Button variant='warning' onClick={(sides) => this.rollDice(20)}>
						D20
					</Button>
					<Button variant='warning' onClick={(sides) => this.rollDice(100)}>
						D100
					</Button>
					<div id='result'>{this.state.rollValue}</div>
				</div>
			</>
		)
	}
}

export default App;
