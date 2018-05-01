

// Task 1


var a;
var b;

function num1 (min,max) {
	return a = Math.floor(Math.random() * (max - min)+min);
}

function num2 (min,max) {
	return b = Math.floor(Math.random() * (max - min)+min);
}// ------------- if we want to generate new digits in all attempts 
// put code above inside "for" 

console.log((num1(0,10)))
console.log((num2(0,10)))



for (var i = 0; i < 3; i++) {


	var c = prompt('type the number form 1 to 10');
	
	if (isNaN(c)) {
		alert('ошибка');
	} 
	if(c >= a && c <= b || c >= b && c <= a || c == a && c == b) {
		alert('угадал!');
		
	}
	if(c > a && c > b || c < a && c < b ) {

		alert('не угадал, у вас еще есть попытки');
	}

	// switch(c) {// why this didnt work ???
	// 	case isNaN(c):
	// 		alert('ошибка');
	// 		break;
	// 	case (c > a && c < b || c > b && c < a || c == a && c == b):
	// 		alert('угадал');
	// 		break;
	// 	case (c > a && c > b || c < a && c < b ):
	// 		alert('не угадал');
	// 		break;
	// }
}



//------------------------------------------------------------------------------------
// Task 2


// var days = ['default', 
// 'monday',
//  'tuesday',
//   'wednesday',
//    'thursday',
//     'friday',
//      'sutarday',
//       'sunday' ]

// var counter =  prompt('type some digits equivalent days of the week: exmp 1-3')
// var start = +counter[0];
// var end = +counter[2];
// var z = counter[1];
// if ((start && end) > 0 && (start && end) < 8) {
// 		if(end > start){
// 		for(var i = start;i <= end;i++){
// 			alert(days[i])
// 		}

// 	}
// 	if(start > end){
// 		for(var i = start;i >= end;i--){
// 			alert(days[i])
// 		}

// 	}
// } else if  (counter.length == 1 && counter != NaN) {// works but incorrect =\
// 	for(var i = counter;;){
// 		alert(days[i]);
// 		break;
// 	}
// }  else if  (isNaN(start) || isNaN(end)) {
// 	alert('nope: you shouldn\'t type letters here!')
// } 
// else  {
// 	alert('nope: you type wrong digits!')
// }





