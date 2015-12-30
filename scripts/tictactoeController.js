angular
  .module('TicTacToeApp')
  .controller('TicTacToeController', TicTacToeController);

function TicTacToeController() {
  this.turn = "X";
  this.nextBigSquare = "";
  this.winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  
  this.mainBoard = { 
    boards: {
      board0: {id: 0, squares: {square0: "",square1: "",square2: "",square3: "",square4: "",square5: "",square6: "",square7: "",square8: ""}},
      board1: {id: 1, squares: {square0: "",square1: "",square2: "",square3: "",square4: "",square5: "",square6: "",square7: "",square8: ""}},
      board2: {id: 2, squares: {square0: "",square1: "",square2: "",square3: "",square4: "",square5: "",square6: "",square7: "",square8: ""}},
      board3: {id: 3, squares: {square0: "",square1: "",square2: "",square3: "",square4: "",square5: "",square6: "",square7: "",square8: ""}},
      board4: {id: 4, squares: {square0: "",square1: "",square2: "",square3: "",square4: "",square5: "",square6: "",square7: "",square8: ""}},
      board5: {id: 5, squares: {square0: "",square1: "",square2: "",square3: "",square4: "",square5: "",square6: "",square7: "",square8: ""}},
      board6: {id: 6, squares: {square0: "",square1: "",square2: "",square3: "",square4: "",square5: "",square6: "",square7: "",square8: ""}},
      board7: {id: 7, squares: {square0: "",square1: "",square2: "",square3: "",square4: "",square5: "",square6: "",square7: "",square8: ""}},
      board8: {id: 8, squares: {square0: "",square1: "",square2: "",square3: "",square4: "",square5: "",square6: "",square7: "",square8: ""}},
    },
    squares: {square0: "",square1: "",square2: "",square3: "",square4: "",square5: "",square6: "",square7: "",square8: ""}
  };

  this.can_play = function(board_id, index) {
    if (this.canPlayBig(board_id) && this.mainBoard.squares["square"+board_id]==="") this.playSquare(board_id, index);
  };

  this.canPlayBig = function(board_id) {
    if (board_id === this.nextBigSquare || this.nextBigSquare==="") return true;
    else return false;
  };

  this.playSquare = function(board_id, square_id) {
    this.mainBoard.boards["board"+board_id].squares["square"+square_id] = this.turn;
    if (this.checkForWin(this.mainBoard.boards["board"+board_id].squares)) {
      this.mainBoard.squares["square"+board_id] = this.turn;
      if (this.checkForWin(this.mainBoard.squares)) {
        alert("Game over, Player "+this.turn+" is the ultimate champion");
        this.reset();
      }
    }
    this.turn = this.turn==="X"?"O":"X";
    if (this.mainBoard.squares["square"+square_id]==="") this.nextBigSquare = square_id;
    else this.nextBigSquare = "";
  };

  this.checkForWin = function(squares) {
    for (var i=0;i<this.winningCombinations.length;i++) {
      if (squares["square"+this.winningCombinations[i][0]]!=="" && squares["square"+this.winningCombinations[i][0]]===squares["square"+this.winningCombinations[i][1]] && squares["square"+this.winningCombinations[i][1]]===squares["square"+this.winningCombinations[i][2]]) return true;
    };
    return false;
  };

  this.reset = function() {
    this.nextBigSquare = "";
    for (var board in this.mainBoard.boards) {
      console.log(board);
      for (var square in this.mainBoard.boards[board].squares) {
        this.mainBoard.boards[board].squares[square]="";
        console.log(square);
      };
    };
    for (var square in this.mainBoard.squares) {
      this.mainBoard.squares[square]="";
    };
    this.turn = "X";
  };
};