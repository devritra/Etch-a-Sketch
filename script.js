function gridHandler(){

    function generateGrid(squareNo){
        let squareLength = 960/squareNo;
        let totalSquareNo = squareNo * squareNo;
        let container = document.querySelector(".container");
        
        for(let i = 1; i <= totalSquareNo; i++){
            let square = document.createElement("div");
            square.style.width = squareLength + "px";
            square.style.height = squareLength + "px";
            square.style.backgroundColor = "white";
            square.setAttribute("class", "square");
            container.appendChild(square);
        }
        return;    
    }

    const gridSizeBtn = document.querySelector("#grid_size_btn");
    gridSizeBtn.addEventListener("click",(e)=>{
        let gridSize = prompt("Enter the grid size: ");
        if(Number.isInteger(gridSize)){
            return alert("Please enter a number to set the number of squares each side of the grid");
        }
        e.target.textContent = gridSize + "x" + gridSize;
        return generateGrid(gridSize);
    })
}
gridHandler();