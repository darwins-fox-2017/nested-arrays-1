'use strict'



const makeChessboard = () => {
  let chessboard = []
  let bidak = ['Benteng','Kuda','Gajah','Mentri','Raja','Gajah', 'Kuda', 'Benteng']
  let warna = ['Hitam', 'Putih']

  for(let i=0; i<8; i++){
    chessboard[i] = []
    for(let j=0; j<8; j++){
      if(i == 0 || i == 1){
        if(i == 0){
          chessboard[i].push(`${bidak[j]} ${warna[0]}`)
        }else {
          chessboard[i].push(`Pion ${warna[0]}`)
        }
      }else if(i == 6 || i == 7){
        if(i == 7){
          chessboard[i].push(`${bidak[j]} ${warna[1]}`)
        }else {
          chessboard[i].push(`Pion ${warna[1]}`)
        }
      }else {chessboard[i].push(" ")}
    }
  }

  return chessboard
}


// console.log(makeChessboard());
const printBoard = chessboard => {
  return chessboard
}

let chessboard = printBoard(makeChessboard())

console.log(chessboard)
console.log(chessboard[7][0] == "Benteng Putih")
