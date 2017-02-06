//write your code here
var spreadsheet = ["number","name","position","points per game"]
var data = [[12,"Joe Schmo", "center",[14,32,7,0,23]],
[18,"Sally Talls","power forward",[18,29,26,31,19]],
[9,"Ken Buckets","point guard",[19,0,11,22,0]],
[31,"Harvey Key","shooting guard",[0,30,16,0,25]],
[22,"Mo diBox","small forwared",[11,0,23,17,0]]]

var table = [];
table[0]=spreadsheet

function addData(data) {
  for(var i=0; i<data.length; i++){
      table.push(data[i])
  }
}

addData(data)
console.log(table);
console.log(table[3][2])
console.log(JSON.stringify(table[1][3]))
