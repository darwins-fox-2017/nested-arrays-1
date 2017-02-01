'use strict'
//function makeChessboard(){}
const makeChessboard = () => {
  let chessboard = []
  let bidak = ["Benteng", "Kuda", "Gajah", "Raja", "Ratu", "Gajah", "Kuda", "Benteng"]
  let warna = ["Putih", "Hitam"]
  let n = 8

  for (let i = 0; i < n; i++){
    chessboard.push([])
  }

  for (let j = 0; j < n; j++) {
    chessboard[7].push(`${bidak[j]} ${warna[0]}`)
  }

  for (let j = 0; j < n; j++) {
    chessboard[0].push(`${bidak[j]} ${warna[1]}`)
  }

  for (let j = 0; j < n; j++) {
    chessboard[1].push(`Pion ${warna[1]}`)
  }

  for (let j = 0; j < n; j++) {
    chessboard[6].push(`Pion ${warna[0]}`)
  }

  for (let i = 2; i < 6; i++) {
    for (let j = 0; j < n; j++) {
      chessboard[i].push(" ")
    }
  }
  return chessboard
}

//function printBoard(x){}
const printBoard = x => {
  return makeChessboard()
}

console.log(printBoard(makeChessboard()))
let chessboard = makeChessboard()
console.log(chessboard[7][0]);
console.log(chessboard[7][0] == "Benteng Putih"); //true
