import { getInputDirection } from "./input.js"

// this will allow up to change how fast the snake is moving
export const SNAKE_SPEED = 8
// this is telling us where to place the snake on the grid
const snakeBody = [{x: 11, y: 11}]
// we are defining newSegments (snake tail length) here
let newSegments = 0


export function update() {
    addSegments()

// add the new tail of the snake to wherever the head of the snake
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

// appends our new 'div' with the class of 'snake' to the board
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

// tells the game to add onto snake once it is over 'food'
export function expandSnake(amount) {
    newSegments += amount
}

// tell the game w
export function onSnake(position, {ignoreHead = false} = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

// tell us which part of the snake is the head
export function getSnakeHead(){
    return snakeBody[0]
}

// function to let us know when the snake is over itself
export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}

// to help us find where the snake head is at on the grid
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// function that will add the new segments to the snake tail
function addSegments() {
    for(let i = 0; i  < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length -1] })
    }

// stops snake from growing indefinetly. default is 0. Will also currently break game if you set to anything else bc game is set to GAME OVER when the snake it over itself (technique you can use to build tron)
    newSegments = 0 
}