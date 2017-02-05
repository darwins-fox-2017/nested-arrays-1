//write your code here
var table = [];
table[1] = ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]];
table[1] = ["9", "Ken Buckets", "Point Guard", [14, 32, 7, 0, 23]];
table[1] = ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]];
table[1] = ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]];

function addData(newdata) {
	table.push(newdata);
}

let data = ["1", "Jhon Doe", "Director", [10,10,10,10]];
addData(data);
console.log (table[1][2]);