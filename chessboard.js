'use strict'

const makeChessboard = (koordinat1,koordinat2) => {
  let chessboard = [];
  let karakter_putih = ["Benteng", "kuda", "mentri", "ratu", "raja", "mentri", "kuda", "benteng"];
  let karakter_hitam = karakter_putih.slice().reverse();
  let pion_putih = "Pion putih";
  let pion_hitam = "Pion hitam";
  let area_bebas = `Area bebas, anda berada di koordinat X = ${koordinat1} Y = ${koordinat2}`;

  // area karakter hitam
  // isi karakter ke dalam chessboard[0]
  chessboard.push(karakter_putih);

  // area pion hitam
  chessboard.push([]); // chessboard[1]
  // isi pion putih ke dalam chessboard[1]
  for (var i = 0; i < 8; i++) {
    chessboard[1].push(pion_putih);
  }

  // area bebas
  for (var x = 1; x <= 4; x++) {
    chessboard.push([]);
  }

  for (var j = 0; j < 8; j++) {
    chessboard[2].push(area_bebas);
    chessboard[3].push(area_bebas);
    chessboard[4].push(area_bebas);
    chessboard[5].push(area_bebas);
  }

  // area pion hitam
  chessboard.push([]); // chessboard[1]
  // isi pion putih ke dalam chessboard[1]
  for (var i = 0; i < 8; i++) {
  chessboard[6].push(pion_hitam);
  }

  // area karakter hitam
  chessboard.push(karakter_hitam);

  return chessboard;
}

const printBoard = x => {
  console.log(x[0][4]); // raja
}

printBoard(makeChessboard())
