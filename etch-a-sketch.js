/* 
MAIN DOM ELEMENTS, BUTTONS, DIVS AND OTHER CRAP
*/

const container = document.getElementById("container");

const gridResizer = document.getElementById("gridResizer");
const gridWidthInput = document.getElementById("gridWidth");
const gridHeightInput = document.getElementById("gridHeight"); 


const colorPicker = document.getElementById("colorPicker");
const colorChangingButton = document.getElementById("colorChangingButton"); // grants access to the color input if you click on the button surrounding it
const opacity005 = document.getElementById("opacityPointZeroFive");
const opacity01 = document.getElementById("opacityPointOne");
const opacity025 = document.getElementById("opacityPointTwentyFive")
const opacity05 = document.getElementById("opacityPointFive")
const opacityMax = document.getElementById("opacityAllIn")




/*
RESIZING FUNCTIONS AND STUFF
*/

gridResizer.onclick = function(){
    let gridWidth = gridWidthInput.value;
    let gridHeight = gridHeightInput.value;
    //
    if (gridWidth < 1){
        alert("Grid width is too small. Minimum is 1");
    } else if (gridWidth > 64){
        alert("Grid width is too big. Maximum is 64");
    } else if (gridHeight < 1){
        alert("Grid height is too small. Minimum is 1");
    } else if (gridHeight > 64){
        alert("Grid height is too big. Maximum is 64");
    } else {
        container.innerHTML = "";
        return createGrid(gridHeight, gridWidth)
    }
}

function createGrid(gridHeight, gridWidth){      
    let i = 0;
    for (i; i < gridHeight; i++){
       const newRow =  createRow(gridHeight, gridWidth);
       container.appendChild(newRow);
    }
}

function createRow(gridHeight, gridWidth) {      
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.height = (800 / gridHeight) + "px";
    let i = 0
    for (i; i < gridWidth; i++){
        const newCell = createCell(gridHeight, gridWidth);
        row.appendChild(newCell);
}

    return row
}

function createCell(gridHeight, gridWidth){    
    const cell = document.createElement('div');
    cell.classList.add('cell');
    //
    let cellWidth = (800 / gridWidth)
    cell.style.width = cellWidth + "px"
    //
    let cellHeight = (800 / gridHeight) 
    cell.style.height = cellHeight + "px"
    //
    cell.style.backgroundColor = chosenColor;
    cell.style.opacity = "0"
    //
    cell.addEventListener('mouseover', function(){
        if (this.style.backgroundColor === chosenColor){
        this.style.opacity = (this.style.opacity == 1) ? 1 : (parseFloat(this.style.opacity) + chosenOpacity > 1) ? 1 : parseFloat(this.style.opacity) + chosenOpacity;
    } else {
        this.style.backgroundColor = chosenColor;
        this.style.opacity = chosenOpacity;
    }
}
    )

    return cell
}

/*
COLOR FUNCTIONS AND STUFF
*/
let chosenOpacity = 0.1;
let chosenColor = "black";

colorChangingButton.onclick = document.getElementById("colorPicker").input;  // DOES NOT WORK YET

colorPicker.addEventListener('input', function(){
    let chosenColorHex = colorPicker.value;
    //
    let hexRed = chosenColorHex.slice(1,3)
    let hexGreen = chosenColorHex.slice(3,5)
    let hexBlue = chosenColorHex.slice(5,7)

    let decRed = parseInt(hexRed, 16);
    let decGreen = parseInt(hexGreen, 16);
    let decBlue = parseInt(hexBlue, 16);
    //
    chosenColor = `rgb(${decRed}, ${decGreen}, ${decBlue})`
})


opacity005.onclick = function(){
    chosenOpacity = 0.05;
}
opacity01.onclick = function(){
    chosenOpacity = 0.1;
}
opacity025.onclick = function(){
    chosenOpacity = 0.25;
}
opacity05.onclick = function(){
    chosenOpacity = 0.5;
}
opacityMax.onclick = function(){
    chosenOpacity = 1;
} 




createGrid(16,16)