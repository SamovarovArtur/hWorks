
// var a;
// var b;

// function num1 (min,max) {
// 	return a = Math.floor(Math.random() * (max - min)+min);
// }

// function num2 (min,max) {
// 	return b = Math.floor(Math.random() * (max - min)+min);
// }

// console.log((num1(0,10)))
// console.log((num2(0,10)))


// var c = prompt('type the number form 1 to 10');


// if (isNaN(c)) {
// 	alert('ошибка');
	
// } 
// if(c > a && c < b || c > b && c < a || c == a && c == b) {
// 	alert('угадал');
// }
// if(c > a && c > b || c < a && c < b ) {
// 	alert('не угадал');
// }



//---------------------------------------------------------------------------------------------------------------


var str1 = prompt('type string')
var str2 = prompt('type substring')

var c = str1.indexOf(str2)

if (c = -1) {
	alert(false)
}
var x = prompt('type a,b,c', 'a - сложить b - заменить c - вырезать' );
	switch(x) {
		case 'a':
			alert(str1 + " " + str2)
			break;
		case 'b':
			alert(str1.replace(prompt('какие символы заменить ?'),str2))
			break;
		case 'c':
			alert(str1.replace(str2," "))
			break;
	}