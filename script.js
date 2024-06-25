
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
    for (i = 0; i < dimension; i++) {
        var newRow = document.createElement("div"); 
        newRow.id = "row" + i; 
        newRow.setAttribute ("style", "display: flex; flex: 1"); 
        container.appendChild(newRow); 
        for (j = 0; j < dimension; j ++) {
            var newDiv = document.createElement ("div"); 
            newDiv.id = i + "," + j; 
            newDiv.setAttribute("style", "flex: 1; flex; border-style: solid; border-color: black; opacity: 0"); 
            container.appendChild(newDiv); 
        }

    }
}

// activates when mouse is over a div
container.addEventListener("mouseover", onMouseOver);
makeGrid(dimension); 


/*Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
There are multiple ways to change the color of the divs, including:
Adding a new class to the div.
Changing the div’s background color using JavaScript.
*/
function onMouseOver (event) {
    let target = event.target;
    if (!target.classList.contains("container")) {
        // Logic for elements that are not the container itself
        target.style.background = "blue";
        let opacity = parseFloat(target.style.opacity);
        if (opacity < 1) {
            target.style.opacity = opacity + 0.1;
        }
    }
}



