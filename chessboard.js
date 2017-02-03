'use strict'

const makeChessboard = () => {
  let chessboard = []
  // kotak besar

  let catur = ['Benteng', 'Kuda', 'Gajah', 'Menteri', 'Raja', 'Gajah', 'Kuda', 'Benteng'];

  for(let i = 0; i < 8; i++) {
  	chessboard[i] = []
  	// kotak dalam

  	for(let j = 0; j < 8; j++) {
  		
  		if(i == 0) {
  			chessboard[i][j] = catur[j] + " Hitam";
  		} else if(i == 1) {
  			chessboard[i][j] = "Pion";
  		} else if(i == 6) {
  			chessboard[i][j] = "Pion";
  		} else if(i == 7) {
  			chessboard[i][j] = catur[j] + " Putih";
  		}
  	}	
  }

  return chessboard;


}

console.log(makeChessboard()[7][0]);