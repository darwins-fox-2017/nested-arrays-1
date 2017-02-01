let spreadsheet   = ['Number', 'Name', 'Position', 'Points per Game']
let data_1        = ['12','Joe Schmo','Center',[14,32,7,0,23]]
let data_2        = ['9','Ken Buckets','Point Guard',[19,0,11,22,0]]
let data_3        = ['31','Harvey Kay','Shooting Guard',[0,30,16,0,25]]
let data_4        = ['18','Sally Talls','Power Forward',[18,29,26,31,19]]
let data_5        = ['22','Mo DiBoux','Small Forward',[11,0,23,17,0]]
let header_Value  = []

header_Value.push(spreadsheet)

function addData(val){
  header_Value.push(val)
  return header_Value
}

addData(data_1)
addData(data_2)
addData(data_3)
addData(data_4)
addData(data_5)
console.log(header_Value[3][2] == "Shooting Guard");//true
console.log(JSON.stringify(header_Value[1][3]) == JSON.stringify([14,32,7,0,23]));//true
