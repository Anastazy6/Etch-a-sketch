const container = document.getElementById("container");
const gridResizer = document.getElementById("gridResizer");
const colorPicker = document.getElementById("colorPicker");
let chosenColor = "black"
//let gridSize;       // JUST
//let gridHeidght; // IN
//let gridWidth;   // CASE 

gridResizer.onclick = function(){
    let potentialGridSize = parseInt(prompt("Please set the size of the grid. The number of rows will equal the number of colums for simplicity. Note that you have to type a natural number not greater than 64. Negatives and floats shall be automatically converted to natural numbers."))
    if (isNaN(potentialGridSize)){          // it's meant to be as idiotproof as possible. No non-numeric values allowed. 
         alert("It is not a number, mon!");
         return
    } 
    almostReadyGridSize = Math.round(Math.abs(potentialGridSize));      // Makes it idiotproof: floats are rounded to integers, negatives have their sign changed.
    if (almostReadyGridSize > 64) {
        alert("Mae'n rhy fawr!");   // Dette betyr 'det er for stor'.
        return
    } else {
        let gridSize = almostReadyGridSize;
        console.log(gridSize);
        container.innerHTML = '';  // this is where resetting of the grid happens
        return createGrid(gridSize)
    }
}

function createGrid(gridSize){      //replace gridSize with gridHeight to create non-square grids. It will need some adjustmets though.
    let i = 0;
    for (i; i < gridSize; i++){
       const newRow =  createRow(gridSize);
       container.appendChild(newRow);
    }
}

function createRow(gridSize) {      //replace gridSize woth gridWidth to create non-square grids
    const row = document.createElement('div');
    row.classList.add('row');
    let i = 0
    for (i; i < gridSize; i++){
        const newCell = createCell(gridSize);
        row.appendChild(newCell);
}
    return row
}

function createCell(gridSize){    //USING GRID SIZE
    const cell = document.createElement('div');
    cell.classList.add('cell');

    let cellWidth = (1337 / gridSize)
    cell.style.width = cellWidth + "px"
    
    let cellHeight = (1337 / gridSize) 
    cell.style.height = cellHeight + "px"

    cell.style.backgroundColor = chosenColor;
    cell.style.opacity = "0"

    cell.addEventListener('mouseover', function(){
        if (this.style.backgroundColor == chosenColor){
        this.style.opacity = (this.style.opacity == 1) ? 1 : parseFloat(this.style.opacity) + 0.1;
    } else {
        this.style.backgroundColor = chosenColor;
        this.style.opacity = 0.1;
    }
}
    )

    return cell
}


colorPicker.addEventListener('input', function(){
    chosenColor = colorPicker.value;
})



createGrid(16)