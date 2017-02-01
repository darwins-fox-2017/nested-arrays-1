
let spreadsheet = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  ['12', 'Joe Schm', 'Center', [14,32,7,0,23]],
]

function addData(data) {
  collections.push(data)
}

let data = ['1', 'Diky Arga', 'Programmer', ['9', '10', '10', '11']]

addData(data)
console.log('------ Collections --------');
console.log(collections);
