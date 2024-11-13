
let gridSize = 25;
const etchASketchContainer = document.querySelector("#etch-a-sketch");

const resetButton = document.querySelector("#reset")
const resizeButton = document.querySelector("#resize")

resetButton.addEventListener("click", () => resetGrid(gridSize))

resizeButton.addEventListener("click", () => {
    gridSize = prompt("Enter a new grid size (max 50)");
    resetGrid(gridSize);
});

function createGrid(gridSize) {

    const etchASketch = document.createElement("div");
    etchASketch.setAttribute("id", "etch-a-sketch");
    for (let i = 0; i < gridSize; i++) {
        const etchRow = document.createElement("div"); 
        etchRow.className = "etch-row";

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            etchRow.appendChild(cell);
            makeColorChangeOnHover(cell);
            console.log(`added cell ${i} ${j}`)
        }

        etchASketch.appendChild(etchRow);
    }
    return etchASketch
}

function makeColorChangeOnHover(cell) {
    cell.addEventListener("mouseover", () => cell.classList.add("colored-in"))
}

function resetGrid (gridSize) {
    if (etchASketchContainer.childElementCount > 0) {
        for (child of etchASketchContainer.children) {
            etchASketchContainer.removeChild(child);
        }
    }
    gridSize = Math.min(50, gridSize);
    etchASketch = createGrid(gridSize);
    etchASketchContainer.appendChild(etchASketch);
}

// main funciton execution
resetGrid(gridSize);