'use strict'

class Chessboard {
  constructor(){
    this.chessboard = []
    this.warna = ['hitam', 'putih']
    this.pemain = ['benteng', 'kuda', 'gajah', 'ratu', 'raja', 'pion']
  }

  barisPion(warna) {
    let indexWarna = 0;
    indexWarna = warna == 'hitam' ? 0 : 1
    // console.log(warna, indexWarna);
    let baris = []
    for (let i = 0; i < 7; i++) {
      baris.push(this.pemain[5] + ' ' + this.warna[indexWarna])
    }
    this.chessboard.push(baris)
  }

  barisKosong() {
    let baris = []
    for (let i = 0; i < 7; i++) {
      baris.push(' ')
    }
    this.chessboard.push(baris)
  }

  barisBelakang(warna) {
    let indexWarna = 0;
    indexWarna = warna == 'hitam' ? 0 : 1
    let baris = []
    for (let j = 0; j <= 4; j++) {
      baris.push(this.pemain[j] + ' ' + this.warna[indexWarna])
      if (j >= 4) {
        // balik lagi
        for (let k = 2; k >= 0; k--) {
          baris.push(this.pemain[k] + ' ' + this.warna[indexWarna])
        }
      }
    }
    this.chessboard.push(baris)
  }

  makeChessboard(){
    for (let i = 0; i <= 7; i++) {
      // console.log("----------",i);
      switch (i) {
        case 0:
        this.barisBelakang('hitam')
        break;
        case 1:
        this.barisPion('hitam')
        break;
        case 2:
        case 3:
        case 4:
        case 5:
        this.barisKosong()
        break;
        case 6:
        this.barisPion('putih')
        break
        case 7:
        this.barisBelakang('putih')
        default:
        console.log('default');
      }
    }
  }
}

let chess = new Chessboard()
chess.makeChessboard()
console.log(chess.chessboard);
console.log(chess.chessboard[1][2]);
