'use strict'

const makeChessboard = () => {
  let chessBoard = [],
      sizeBoard  = 8,
      pion       = ['pion'],
      chess      = ['Benteng', 'Kuda', 'Menteri', 'Raja', 'Ratu', 'Menteri', 'Kuda', 'Benteng']

  for(let i = 0; i < sizeBoard; i++ ){
    let arrIndex = []





    for (let j = 0; j < sizeBoard; j++) {
      switch (i) {
        case 0:
          arrIndex.push(chess[j] + " Hitam")
          break;
        case 7:
          arrIndex.push(chess[j] + " Putih")
          break;
        case 1:
          arrIndex.push(pion + " Hitam")
          break;
        case 6:
          arrIndex.push(pion + " Putih")
          break;
        default:
          arrIndex.push('')
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
