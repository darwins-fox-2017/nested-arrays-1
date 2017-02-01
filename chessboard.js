'use strict'

var chessboard = [];

var catur=['Benteng','Kuda','Menteri','Raja','Ratu','Menteri','Kuda','Benteng']

for(var i=0; i<8;i++){
      var papan= [ ];
      chessboard.push(papan);
        for(var j=0; j<catur.length;j++){
          if(i===0){
            chessboard[i].push(catur[j]+ " hitam");
          } else{
            chessboard[i].push(" ");
            }
          }
        }



// console.log(papan);
console.log(chessboard);
