
// creates element 'div' and assigns it to the grid var; selects container, then appends child grid to node container. 
/*
var grid = document.createElement("div"); 
var container = document.querySelector ("container"); 
container.appendChild(grid); 
grid.classList.add("grid_styles"); 
*/
const dimension = 16; 
var container = document.querySelector("container");


function makeGrid(dimension) {
    container.replaceChildren();
    container.style.background = "white";
    container.style.borderStyle = "solid";
    for (i = 0; i <= dimension; i++) {
        var newRow = document.createElement("div"); 
        newRow.id = "row" + i; 
        newRow.setAttribute ("style", "display: flex; flex: 1"); 
        container.appendChild(newRow); 
        for (j = 0; j <= dimension; j ++) {
            var newDiv = document.createElement ("div"); 
            newDiv.id = i + "," + j; 
            newDiv.setAttribute("style", "flex: 1; flex; border-style: solid; border-color: black; opacity: 0"); 
            container.appendChild(newDiv); 
        }

    }
}

makeGrid(dimension); 