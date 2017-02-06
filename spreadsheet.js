//write your code here
var table = [];

function addData(newdata) {
	table.push(newdata);
}

let data = [
["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
["9", "Ken Buckets", "Point Guard", [14, 32, 7, 0, 23]],
["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
["1", "Jhon Doe", "Director", [10,10,10,10]]
]

addData(data);
console.log (table);
