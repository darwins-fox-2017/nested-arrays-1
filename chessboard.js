'use strict'

const makeChessboard = () => {
  let chessBoard = [],
      sizeBoard  = 8,
      pion       = ['pion'],
      chess      = ['Benteng', 'Kuda', 'Menteri', 'Raja', 'Ratu', 'Menteri', 'Kuda', 'Benteng']

  for(let i = 0; i < sizeBoard; i++ ){
    let arrIndex = []
    for (let j = 0; j < sizeBoard; j++) {
      if (i === 0 || i === 7) {
        if(i === 0){
          arrIndex.push(chess[j] + " Hitam")
        }else {
          arrIndex.push(chess[j] + " Putih")
        }
      }else if (i === 1 || i === 6) {
        if (i === 1) {
          arrIndex.push(pion + " Hitam")
        }else {
          arrIndex.push(pion + " Putih")
        }
      }
    }
    chessBoard.push(arrIndex)
  }
  return chessBoard
}

const printBoard = x => {
  console.log(x[7][0]);//Benteng putih
  console.log(x);
}

printBoard(makeChessboard())
