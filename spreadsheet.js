let spreadsheet = [['Number', 'Name', 'Position', 'Points per Game']];
let data1 = ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]];
let data2 = ["9", "Ken Buckets", "Point Guard", [19,0,11,22,0]];
let data3 = ["31", "Harvey Kay", "Shooting Guard", [0,30,16,0,25]];
let data4 = ["18", "Sally Talls", "Power Forward", [18,29,26,31,19]];
let data5 = ["22", "Mo DiBoux", "Small Forward", [11,0,23,17,0]];
let table = [];

function addData(input) {
  table.push(input);
}

addData(spreadsheet);
addData(data1);
addData(data2);
addData(data3);
addData(data4);
addData(data5);

let data = ["1", "John Doe", "Director", [10, 10, 10, 10]];
addData(data);
console.log(table[3][2] == "Shooting Guard");
console.log(JSON.stringify(table[1][3]) == JSON.stringify([14,32,7,0,23]));
