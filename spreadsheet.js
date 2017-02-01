//write your code here
var table = [],
    judul = ["Number", "Name", "Position", "Point per Game"];
    data = [
      [12, "Joe Schmo",   "Center",        [14, 32, 7, 0, 23]   ],
      [12, "Joe Schmo",   "Center",        [14, 32, 7, 0, 23]   ],
      [9,  "Ken Buckets", "Point Guard",   [19, 0, 11, 12, 0]   ],
      [31, "Harvey Kay",  "Shooting Guard",[0, 30, 16, 0, 25]   ],
      [18, "Sally Talls", "Power Forward", [18, 29, 26, 31, 19] ],
      [22, "Mo Diboux",   "Small Forward", [11, 0, 23, 17, 0]   ]
    ];

function addData(data) {
  table.push(data);
}
addData(judul);
//isi data ke dalam table
for ( var index = 0; index <= data.length-1; index++) {
  addData(data[index]);
}

console.log(table[4][2] == "Shooting Guard");
console.log(JSON.stringify(table[1][3]) == JSON.stringify( [14, 32, 7, 0, 23] ));
