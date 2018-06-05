

function sequence (start , step) {
	var start;
	return function(){
		return start += step
	}
}
var generator = sequence(1,1)
var generator2 = sequence(6,1)
console.log(generator())
console.log(generator())
console.log(generator())
console.log(generator2())
console.log(generator2())
console.log(generator2())

console.log('---------------------')

function take (gen, x) {
	var i;
	var gen3 = [];

	
	for(i = 0; i < x; i++ ){
		// console.log(gen()) 
		gen3.push(gen())
	}
	return gen3
}
// var take = take;
var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

console.log('-----------------------')




function partial (fn, a1, a2) {
	return fn()
	
}

function add (a, b) {
	return a + b
}


var add5 = partial(add, 5)
console.log(add5(2))


