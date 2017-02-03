let spreadsheet = [
  ['Number', 'Name', 'Position', 'Points per Game']
]

class submit_data {

	constructor(data) {
		this.data = data;
	}

	add_data() {
		return spreadsheet.push(this.data);	
	}
  
}

let data = new submit_data(['1', 'John Doe', 'Director', [10,10,10,1,0]])
data.add_data();
// console.log(spreadsheet[1][2]);

console.log(JSON.stringify(spreadsheet[1][2]) === JSON.stringify('Director'));
console.log(spreadsheet);