let board = [0,0,0,0,0,0,0,0,0]
let player1Turn = true; 

let rowLength=Math.sqrt(board.length)


document.getElementById("one").addEventListener("click", function() {
  checkSquare(0);
});
document.getElementById("two").addEventListener("click", function() {
  checkSquare(1);
});
document.getElementById("three").addEventListener("click", function() {
  checkSquare(2);
});
document.getElementById("four").addEventListener("click", function() {
  checkSquare(3);
});
document.getElementById("five").addEventListener("click", function() {
  checkSquare(4);
});
document.getElementById("six").addEventListener("click", function() {
  checkSquare(5);
});
document.getElementById("seven").addEventListener("click", function() {
  checkSquare(6);
});
document.getElementById("eight").addEventListener("click", function() {
  checkSquare(7);
});
document.getElementById("nine").addEventListener("click", function() {
  checkSquare(8);
});
document.getElementById("restart").addEventListener("click", function() {
  restart();
});

function checkSquare(square){
  if ( board [square] != 0){
    alert("Please Choose A Valid Square")
  }
  else {
    if(player1Turn){
      board[square] = 1
    }
    else {
      board[square] = 2
    }
    display(square)
   }
}


function display(square){
  if(square == 0){
    if(player1Turn == true){
      document.getElementById("one").innerHTML = "x";
    }
    else{
      document.getElementById("one").innerHTML = "o";
    }
    document.getElementById("one").style.color = "#BBFCB3"
  }
  if(square == 1){
    if(player1Turn == true){
      document.getElementById("two").innerHTML = "x";
    }
    else{
      document.getElementById("two").innerHTML = "o";
    }
    document.getElementById("two").style.color = "#0F120E"
  }
  if(square == 2){
    if(player1Turn == true){
      document.getElementById("three").innerHTML = "x";
    }
    else{
      document.getElementById("three").innerHTML = "o";
    }
    document.getElementById("three").style.color = "#BBFCB3"
  }
  if(square == 3){
    if(player1Turn == true){
      document.getElementById("four").innerHTML = "x";
    }
    else{
      document.getElementById("four").innerHTML = "o";
    }
    document.getElementById("four").style.color = "#0F120E"
  }
  if(square == 4){
    if(player1Turn == true){
      document.getElementById("five").innerHTML = "x";
    }
    else{
      document.getElementById("five").innerHTML = "o";
    }
    document.getElementById("five").style.color = "#BBFCB3"
  }
  if(square == 5){
    if(player1Turn == true){
      document.getElementById("six").innerHTML = "x";
    }
    else{
      document.getElementById("six").innerHTML = "o";
    }
    document.getElementById("six").style.color = "#0F120E"
  }
  if(square == 6){
    if(player1Turn == true){
      document.getElementById("seven").innerHTML = "x";
    }
    else{
      document.getElementById("seven").innerHTML = "o";
    }
    document.getElementById("seven").style.color = "#BBFCB3"
  }
  if(square == 7){
    if(player1Turn == true){
      document.getElementById("eight").innerHTML = "x";
    }
    else{
      document.getElementById("eight").innerHTML = "o";
    }
    document.getElementById("eight").style.color = "#0F120E"
  }
  if(square == 8){
    if(player1Turn == true){
      document.getElementById("nine").innerHTML = "x";
    }
    else{
      document.getElementById("nine").innerHTML = "o";
    }
    document.getElementById("nine").style.color = "#BBFCB3"
  }
  checkWinner()
}


function checkWinner(){
  //check rows
  // check columns
  //check diagonal
  let isWinner = false
  for (let i = 0; i < board.length; i += board.length/rowLength) {
    if((board[i]==board[i+1] && board[i]==board[i+2])&&board[i]!=0){
      winner(i,"row")
      isWinner = true
    }
  }
  for (let i=0; i < board.length/rowLength; i++){
    if((board[i]==board[i+3] && board[i]==board[i+6])&&board[i]!=0){
      winner(i,"column")
      isWinner = true
    }
  }
  
  if((board[0]==board[4]&&board[4]==board[8])&&board[0]!=0){
    winner(0,"diagonal")
    isWinner = true
  }
  if((board[2] == board[4] && board[4] == board[6]) && board[6]!= 0){
    winner(board.length,"diagonal")
    isWinner = true
  }
  if(isWinner == false && player1Turn == true){
    player1Turn = false
  }
  else if(isWinner == false && player1Turn == false){
    player1Turn = true
  }
  if(player1Turn == true && isWinner == true){
    alert("WINNER PLAYER 1")
  }
  else if (player1Turn == false && isWinner == true){
    alert("WINNER PLAYER 2")
  }
}

function winner(startingSquare, winningWay){
  //add clear way to see winning row ie change coour of entire row (instead of alert)
}
function restart(){
  board = [0,0,0,0,0,0,0,0,0]
  player1Turn = true;
  document.getElementById("one").innerHTML = "";
  document.getElementById("two").innerHTML = "";
  document.getElementById("three").innerHTML = "";
  document.getElementById("four").innerHTML = "";
  document.getElementById("five").innerHTML = "";
  document.getElementById("six").innerHTML = "";
  document.getElementById("seven").innerHTML = "";
  document.getElementById("eight").innerHTML = "";
  document.getElementById("nine").innerHTML = "";
}