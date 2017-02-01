'use strict'

const makeChessboard = () => {
  let chessboard =  []
  let papanIsi = ["B", "K", "S", "R", "Q", "S", "K", "B"]
  for(let i=0; i<9; i++) {
    chessboard[i] = [];
    if(i === 0 || i === 6 || i === 1 || i === 7) {
      if(i === 1 || i === 6) {
        for (let j = 0; j<8; j++) {
          chessboard[i][j] = "P"
        }
      }
      else {
        for (let j = 0; j<8; j++) {
          chessboard[i][j] = papanIsi[j]
        }
      }

    } else {
      for(let j = 0; j < 8; j++) {
        chessboard[i][j] = "-"
      }
    }
  }
  // ... write your code here

  return chessboard
}

const printBoard = x => {
  // ... write your code here
  for(let i=0; i<8; i++) {
    console.log(x[i])
  }
}

printBoard(makeChessboard())
