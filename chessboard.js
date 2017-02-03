'use strict'

const makeChessboard = () => {
  let chessboard = []
  let catur = ['benteng','kuda','gajah','raja','ratu','gajah','kuda','benteng'];
  let pion = "pion";
  let empty = "empty"

  // ... write your code here
  for (var j = 0; j < 8; j++){
		var tampung = []
		for ( var i = 0; i < 8; i++){
			if(j == 0 ){
				tampung.push(catur[i] + ' Hitam');
			}
			else if( j == 7){
				tampung.push(catur[i] + ' putih');
			}else if( j == 1){
				tampung.push(pion + ' Hitam')
			}else if( j == 6){
				tampung.push(pion + ' Putih');
			}else{
				tampung.push(empty);
			}
	}
	chessboard.push(tampung)
}

  return chessboard
}

const printBoard = x => {
  // ... write your code here
  console.log(x)
}

printBoard(makeChessboard())
