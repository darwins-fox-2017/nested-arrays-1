let spreadsheet = [
  ['Number', 'Name', 'Position', 'Points per Game']
]

let data = [["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0]],
["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]]
]


// ... write your code here
function addData(arrData, x = spreadsheet){
  for(let i=0; i< arrData.length; i++){
    x.push(arrData[i])
  }
  return x;
}

console.log(addData(data))

console.log(spreadsheet[3][2] == "Shooting Guard");
//true
console.log(JSON.stringify(spreadsheet[1][3]) == JSON.stringify([14, 32, 7, 0, 23]))
//true
