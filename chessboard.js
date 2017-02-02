'use strict'

const makeChessboard = () => {
  let chessboard = []
  let anakCatur = ['Benteng', 'Kuda', 'Gajah', 'Menteri', 'Raja', 'Gajah', 'Kuda', 'Benteng'];
  // ... write your code here
  for(let i=0;i<8;i++) {
      chessboard[i] = []
    for(let j=0;j<8;j++) {
      switch(i) {
        case 0:
          chessboard[i][j] = anakCatur[j]+' Hitam'
          break;
        case 1: 
          chessboard[i][j] = "Pion Hitam"
        case 6: 
          chessboard[i][j] = "Pion Putih"
          break;
        case 7:
          chessboard[i][j] = anakCatur[j]+' Putih'
          break;
      }
    }
  }

  return chessboard
}


console.log(makeChessboard()[7][0])
