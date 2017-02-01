'use strict'


class catur {
  constructor() {
    this.warna=['Hitam','Putih'];
    this.anak=['Benteng','Kuda','Luncur','raja','ratu','luncur','Kuda','Benteng'];
    this.pion='Pion';
    this.board=[];
  }
  papanKosong(){
    for (let baris = 0; baris < 8; baris++) {
       let isikolom=[];
      for (let kolom = 0; kolom < 8; kolom++) {
         isikolom.push(' ');
      }
      this.board.push(isikolom);
    }
    return this
  }
  isiPion(){
    this.papanKosong()
   for (let kolom = 0; kolom < 8; kolom++) {
      this.board[1][kolom]=this.pion +' ' +this.warna[0];
      this.board[0][kolom]=this.anak[kolom] +' ' +this.warna[0];
      this.board[6][kolom]=this.pion +' ' +this.warna[1];
      this.board[7][kolom]=this.anak[7-kolom] +' ' +this.warna[1];
  }
 }
}

let yukmain=new catur ();
yukmain.isiPion();
var chessboard=yukmain.board;
console.log(chessboard[7][0]=="Benteng Putih");
