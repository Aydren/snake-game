let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

// function that will help us move 
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            //stops you from going down when you are going up
            if(lastInputDirection.y !== 0) break
            //lets you go up
            inputDirection = { x: 0, y: -1}
            break
        case 'ArrowDown':
            //stops you from going up when you are going down
            if(lastInputDirection.y !== 0) break
            //lets you go down
            inputDirection = { x: 0, y: +1}
            break
        case 'ArrowLeft':
            //stops you from going right when you are going left
            if(lastInputDirection.x !== 0) break
            //lets you go left
            inputDirection = { x: -1, y: 0}
            break
        case 'ArrowRight':
            //stops you from going left when you are going right 
            if(lastInputDirection.x !== 0) break
            //lets you go right
            inputDirection = { x: +1, y: 0}
            break
    }
})


export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}