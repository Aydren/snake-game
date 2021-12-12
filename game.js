import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
// starts GAME OVER. If set to true game will end as soon as you start
let gameOver = false
// defining game board as a varible
const gameBoard = document.getElementById('game-board')

// gives the game its GAME OVER alert
function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ENTER to restart or CANCEL to stop')) {
            window.location = '/'
        }
        return
    }

// updates our render time to our new current time
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    console.log('Render')
    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

// letting the game know when to give us the GAME OVER alert
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}