let spreadsheet = [
  ['Number', 'Name', 'Position', 'Points per Game']
]
var data=[['12','Joe Schmo','Center',[14,32,7,0,23]],
          ['9','Ken Bucket','Point Guard',[19,0,11,22,0]],
          ['31','Harvey Key','Shooting Guard',[0,30,16,0,25]],
          ['18','Sally Talls','Power Forward',[18,29,26,31,19]],
          ['22','Mo DiBoux','Small Forward',[11,0,23,17,0]]
         ]
function addData(data) {
  for (var i = 0; i < data.length; i++) {
    spreadsheet.push(data[i]);
  }
}
addData(data);
console.log(spreadsheet[3][2]=="Shooting Guard");
console.log(JSON.stringify(spreadsheet[1][3]) == JSON.stringify([14,32,7,0,23]));
//console.log(JSON.stringify([14,32,7,0,23]));
