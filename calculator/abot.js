

 let board = ["","","","","","","","",""];

  let currentPlayer = "X";

  

  const boardElement = document.getElementById("board");

  const status = document.getElementById("status");

  function renderBoard(){
    boardElement.innerHTML = "";

for (let i = 0; i < board.length; i++) {

    const cell = document.createElement("div");

    cell.classList.add("cell");

    cell.innerHTML = board[i];
    
    cell.onclick = function(){
        makeMove(i)
    };

boardElement.appendChild(cell)
}
  }


  function makeMove(index){

    if (board[index] !== ""){
        return
    }

    board[index] = currentPlayer

    if(currentPlayer === "X"){
       currentPlayer = "O"
    }

else{
  currentPlayer = "X"
}

   renderBoard();

   checKWinner();
  }



  function checKWinner(){
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let i = 0; i < wins.length; i++){
        let a = wins[i][0];
        let b = wins[i][1];
        let c = wins[i][2];

        if(board[a] !== "" && board[a]===board[b] && board[a] === board[c]){
            status.innerText = board[a] + ". Wins";
            return;
        }
    }
     

    if (!board.includes("")){

    
        status.innerText = "Draw";
    return;
    }
 
  status.innerText = "player" + currentPlayer + "Turn";
  }


  function resetGame(){
    board = ["","","", "","","","","",""]
    currentPlayer = "X"

    status.innerText = "player X turn";

    renderBoard();
  }

  renderBoard();