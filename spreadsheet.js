var spreadsheet = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  ['12', 'Joe Schm', 'Center', [14,32,7,0,23]],
  ['32', 'Diga', 'Center Back', [56,9,2,3,10]],
  ['17', 'Gara', 'Goal Keeper', [4,66,43,1,2]],
  ['9', 'Angga', 'Forward', [7,54,2,0,3]],
]

function addData() {
  var data = ['7', 'Samuel Ganteng', 'Coach', [7, 7, 7, 7]]
  spreadsheet.push(data)
  return spreadsheet
}
console.log(addData());

console.log(spreadsheet[3][2] == "Goal Keeper");

console.log(JSON.stringify(spreadsheet[1][3]) == JSON.stringify([14,32,7,0,23]));
