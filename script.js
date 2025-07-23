function generateGrid(squareNo){
    let squareLength = 960/squareNo;
    let totalSquareNo = squareNo * squareNo;
    let container = document.querySelector(".container");
    for(let i = 1; i <= totalSquareNo; i++){
        let square = document.createElement("div");
        square.style.width = squareLength;
        square.style.height = squareLength;
        square.style.backgroundColor = "white";
        container.appendChild(square);
    }
    return;    
}