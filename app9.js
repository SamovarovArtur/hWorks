

// var user = {
// 	name: 'Андрей',
// 	sayHi: function() {
// 		var self = this;
// 		setTimeout(function() {
// 			document.write('Привет. Меня зовут ' + self.name);
// 		}, 2000);
// 	}
// }

// user.sayHi();// instead of bind







// var sum = function  (a,b) {
// 	return a + b
// }


// var measuredExecutionTime = function (fn) {
// 	var start = Date.now();
// 	fn();
// 	var time = Date.now() - start;
// 	return time;
// }

// var measuredExecutionTime =  {
// 	 start : Date.now(),
// 	   sum : sum,
// 	  time : Date.now() - start
// }

// function measuredExecutionTime (arg) {
// 	var  start = Date.now();
// 	  arg(10,20);
// 	  var time = Date.now() - start;
// 	return time
// }
// console.log(measuredExecutionTime(sum))
// var measuredSum = measuredExecutionTime(sum);
// console.log(measuredSum(10,20))



var elem = document.getElementById('elem');

function func(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}

func.call(elem,'Иванов','Иван'); //тут должно вывести 'привет, Иванов Иван'

// var user = {
// 	name: 'Андрей',
// 	sayHi: function(yourName) {
// 		alert('Привет ' + yourName + '. Меня зовут ' + this.name);
// 	}
// }

// var user2 = {
// 	name: 'Вася',
// }

// var name = prompt('Ваше имя?', '');
// user.sayHi.call(user2, name);

// var user = {
// 	name:'john'
// }
// var user2 = {
// 	name:'ivan'
// }
// var printName = function (param) {
// 	console.log(this.name)
// }
// var bindPrintName = printName.bind(user)
// console.log(printName.call(user))
// console.log(printName.call(user2))