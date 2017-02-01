'use strict'

var chessboard = [];

var catur=['Benteng','Kuda','Menteri','Raja','Ratu','Menteri','Kuda','Benteng']
var pion =['pion','pion','pion','pion','pion','pion','pion','pion']

for(var i=0; i<8; i++){
      var papan= [ ];
      chessboard.push(papan);
        for(var j=0; j<8; j++){

          if(i===0){
            chessboard[i].push(catur[j]+ " hitam");
          }
          if(i===1){
            chessboard[i].push(pion[j]+ " hitam");
          }
          if(i > 1 && i <6){
              chessboard[i].push(" ");
          }
          if(i===6){
            chessboard[i].push(pion[j]+ " putih");
          }
          if(i===7){
            chessboard[i].push(catur[j]+ " putih");
          }

        }
      }

// console.log(papan);
console.log(chessboard[7][0]);
