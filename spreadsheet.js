
let spreadsheet = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  ['12', 'Joe Schm', 'Center', [14,32,7,0,23]],
  ['32', 'Diga', 'Center Back', [56,9,2,3,10]],
  ['17', 'Gara', 'Goal Keeper', [4,66,43,1,2]],
  ['9', 'Angga', 'Forward', [7,54,2,0,3]],
]

function addData(data) {
  spreadsheet.push(data)
}

let data = ['98', 'Diky Arga', 'Programmer', [9, 10, 10, 11]]

addData(data)
console.log('------ Collections --------');
console.log('----- Print All Data --------');
console.log(spreadsheet);
console.log('print data spreadsheet[2][2]', spreadsheet[2][2]);
console.log(spreadsheet[2][2] == 'Center Back');

console.log(JSON.stringify(spreadsheet[5][3]) == JSON.stringify([9, 10, 10, 11]));
