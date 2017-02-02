let spreadsheet = [
  ['Number', 'Name', 'Position', 'Points per Game']
]
// ... write your code here
let addData = (data) => {
  if(spreadsheet.length > 0) {
    spreadsheet.push(data)
  }
}

let data = ['1', 'John Doe', 'Director', [10,10,10,1,0]]
addData(data);
// console.log(spreadsheet[1][2]);

console.log(JSON.stringify(spreadsheet[1][2]) === JSON.stringify('Director'));
console.log(spreadsheet[1][2]);