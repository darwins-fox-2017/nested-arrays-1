//write your code here
var chessboard = [];
var warna = "";

for (var y=1; y<=8; y++){
	chessboard[y] = [];
	if((y == 1) || (y == 2)){ warna = "Hitam";}
	if((y == 7) || (y == 8)){ warna = "Putih";}
		if((y == 1) || (y == 8)){
			chessboard[y]= 	["",
							 "Benteng"+ " " + warna,
							 "Kuda"+ " " + warna,
							 "Menteri"+ " " + warna,
							 "Raja"+ " " + warna,
							 "Ratu"+ " " + warna,
							 "Menteri"+ " " + warna,
							 "Kuda"+ " " + warna,
							 "Benteng"+ " " + warna
							 ];
		} else if((y == 2) || (y == 7)){
			for(var x=0; x<8; x++) {
			chessboard[y][x] = "Pion"+ " " + warna;
			}
		} else {
			for(var x=0; x<8; x++) {
			chessboard[y][x] = "Kosong";
			}
		}
}
console.log(chessboard[1][1]);