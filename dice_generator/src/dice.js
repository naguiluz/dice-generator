function rollDice(sides) {
  let result = Math.ceil(Math.random()*sides)
  console.log(`You rolled a ${result}`)
}

const rollD2 = () => rollDice(2)
const rollD4 = () => rollDice(4)
const rollD6 = () => rollDice(6)
const rollD8 = () => rollDice(8)
const rollD10 = () => rollDice(10)
const rollD12 = () => rollDice(12)
const rollD20 = () => rollDice(20)
const rollD100 = () => rollDice(100)

export {
  rollD2,
  rollD4,
  rollD6,
  rollD8,
  rollD10,
  rollD12,
  rollD20,
  rollD100
 }