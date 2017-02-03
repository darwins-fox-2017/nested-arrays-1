'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  let kingdom = ['benteng ', 'kuda ', 'mentri ', 'ratu ', 'raja ', 'mentri ', 'kuda ', 'benteng '];
  let player = ['putih', 'hitam']
  let kacung = ['pion']
  let kosong = 'kosong'

  for(var i = 0;i < 8;i++) {
    chessboard.push([])
  }

  for (var i = 0;i < kingdom.length;i++) {
    chessboard[7].push(`${kingdom[i]}${player[0]}`)
    chessboard[6].push(`${kacung[0]}${player[0]}`)
    chessboard[5].push(`${kosong}`)
    chessboard[4].push(`${kosong}`)
    chessboard[3].push(`${kosong}`)
    chessboard[2].push(`${kosong}`)
    chessboard[1].push(`${kacung[0]}${player[1]}`)
    chessboard[0].push(`${kingdom[i]}${player[1]}`)
  }

  return chessboard
}

const printBoard = x => {
  // ... write your code here
  return makeChessboard
}

printBoard(makeChessboard())
let chessboard = makeChessboard()
console.log(chessboard[7][0]);
console.log(chessboard[7][0] == "benteng putih"); //true
console.log(chessboard[3][5]);
