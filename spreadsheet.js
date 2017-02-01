'use strict'
let spreadsheet = [
  ['Number', 'Name', 'Position', 'Points per Game']
]

// ... write your code here
let addData = (data, arr) => {
  arr.push(data)
  return arr
}

let data = ["12", "Joe", "Director 1", [10, 10, 10, 10]]
addData(data, spreadsheet)
let data1 = ["9", "Ken", "Director 2", [11, 10, 10, 10]]
addData(data1, spreadsheet)
let data2 = ["31", "Harvey", "Director 3", [12, 10, 10, 10]]
addData(data2, spreadsheet)
let data3 = ["18", "Sally", "Director 4", [13, 10, 10, 10]]
addData(data3, spreadsheet)
let data4 = ["22", "Mo", "Director 5", [14, 10, 10, 10]]
addData(data4, spreadsheet)

console.log(spreadsheet)
