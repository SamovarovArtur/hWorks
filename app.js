

var a = 5,
b = 5,
c = 5,
d = 5,
e = 5;

a -= 1,
b *= 2,
c += 1,
d /= 2,
e %= 2;

console.log(a,b,c,d,e);


var num1 = prompt();
var num2 = prompt();
if (num1 == num2) {
	console.log(true)
} else {
	console.log(false)
}

var a = 5, b= 4, c = 9;
console.log((a+b+c)/3);

var p = 3.14,
r = 5,
h = 10;
var s = 2*p*(Math.pow(r, 2)) + 2*p*r*h;
console.log(s)

function getRand (min,max) {
	return Math.floor(Math.random()*(max-min))
}

alert(getRand(1,10));