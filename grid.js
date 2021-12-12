//just a variable for the grid size
const GRID_SIZE = 21

//puts an object on a random spot within the grid size
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

//lets us know when we are outside the grid. Set to 1 bc 0 would be outside the border already.
export function outsideGrid(position) {
    return(
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}