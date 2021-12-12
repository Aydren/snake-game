import {onSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

//creating variable for getRandomFoodPosition 
let food = getRandomFoodPosition()

//will add to snake length
const EXPANSTION_RATE = 5

//tells our code what to do when the snake it on the same block as the food
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSTION_RATE)
        food = getRandomFoodPosition()
    }
}
//this is appending a new 'div' with the class 'food' on the screen within our borders
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

//this will make the food spawn in different locations
function getRandomFoodPosition() {
    let newFoodPosition
//this is telling the food not to place itself wherever the snake currently is
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}