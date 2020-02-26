let NUMROWS = 4;
let NUMCOLS = 4;
let NUMCELLS = NUMROWS * NUMCOLS;
let DIFFSCALE = 50
let score = 0;
let results = '';

let createTable = function () {

    //For LOOP - used when you KNOW how many times to loop something.

    //FOR(initialize control variable; state the boolean expression; update control variable)

    let redColor = Math.floor(Math.random()*256);
    let greenColor = Math.floor(Math.random()*256);
    let blueColor = Math.floor(Math.random()*256);

    let regColor =  "rgb(" + redColor +","+ greenColor + "," + blueColor + ")";
    let diffColor =   "rgb(" + (redColor + DIFFSCALE) +","+ (greenColor + DIFFSCALE) + "," + (blueColor + DIFFSCALE) + ")";

    let randRow = Math.floor(Math.random()*NUMROWS) + 1;
    let randCols = Math.floor(Math.random()*NUMCOLS) + 1;

    let table = document.createElement("TABLE");

    for(let row = 1; row <= NUMROWS; row++){
        let tableRow = document.createElement("TR");
        table.appendChild(tableRow);

        for(let col = 1; col <= NUMCOLS; col++){

            let cell = document.createElement("TD");
            cell.onclick = function(){checkWin(this)};
            cell.style.backgroundColor = regColor;

            if(row === randRow && col === randCols){
                cell.style.backgroundColor = diffColor;
                cell.id="correctBox";
            }
            tableRow.appendChild(cell);
        }
    }
    table.classList.add("aside");

    let happyTable = document.getElementById("content");
    happyTable.innerHTML = " ";
    happyTable.appendChild(table);

    let scoreRow = document.createElement("TR");
    let scoreRow2 = document.createElement("TR");
    let scoreRow3 = document.createElement("TR");
    let scoreCol = document.createElement("TR");
    let scoreCol2 = document.createElement("TR");
    let scoreCol3 = document.createElement("TD");
    scoreCol3.id = "results";
    scoreCol.innerText = "Player's score";
    scoreCol2.innerText = score;
    scoreCol3.innerText = results;
    scoreCol.classList.add("smallCell");
    scoreCol2.classList.add("smallCell");
    scoreCol3.classList.add("smallCell");
    scoreRow.appendChild(scoreCol);
    scoreRow2.appendChild(scoreCol2);
    scoreRow3.appendChild(scoreCol3);

    let scoreboard = document.createElement("TABLE");
    scoreboard.classList.add("aside");
    scoreboard.appendChild(scoreRow);
    scoreboard.appendChild(scoreRow2);
    scoreboard.appendChild(scoreRow);

    happyTable.appendChild(scoreboard);
};

let checkWin = function(cell){

    if(cell.id === "correctBox") {
        results = "You found it";
        score++;
        if (score >= 10) {
            score = 0;
            DIFFSCALE -= 5;
        }

        if (DIFFSCALE <= 0) {
            winMenu();
        }
        createTable()

    }else{
        results = "wrong one";
        score--;
        if(score <= -5){
            score = 0;
            DIFFSCALE  = 50;
            winMenu();
        }else{
            createTable()
        }
    }
};

let winMenu = function () {

    let title = document.createElement("H1");
    title.innerText = "Color Chooser Game";

    let directions = document.createElement("P");
    directions.innerText = "You Won Try Again";

    let begin = document.createElement("BUTTON");
    begin.innerText = "BEGIN";
    begin.onclick = createTable;

    let display = document.getElementById("Content");
    display.appendChild(title)
    display.appendChild(directions)
    display.appendChild(begin)
}
