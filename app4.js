

// var arr = [2,0,1,2,3,1,2];
// var arr2;
// var start = arr.indexOf(0);
// var end = arr.indexOf(0,start+1);
// arr2 = arr.slice(start + 1,end);
// var result = arr2.reduce(function(sum, current) {
//       return sum + current;
// });
// console.log(result) 
// while(end == -1){
//   alert(0)
//   break;
// }




//--------------------------------------------------------------


// var arr =[2,113,5,1,40];
// arr.sort(function(start,end){
//   return start - end
// });
// console.log( 4 + 0 )// lazy trick)))


// var arr =[2,113,5,1,40];
// var min = Math.min(arr[0],arr[1],arr[2],arr[3],arr[4]);
// var max = Math.max(arr[0],arr[1],arr[2],arr[3],arr[4]);
// console.log(arr.indexOf(min) + arr.indexOf(max))


//------------------------------------------------------------------------


var value = prompt('type some data');
var arr = value.split(',');
for(var i = arr.length ; i >= 0;i--){
  if(arr[i] !== Number){
    arr[i] = +arr[i];
  }
}
var arr3 = arr.filter(num = Number)
console.log(arr3);
var even = arr3.filter(even => even % 2 == 0);
console.log(even);
var sum = even.reduce(function(sum, current) {
  return sum + current;
});
console.log(sum)
var odd = arr3.filter(odd => odd % 2 == 1);
console.log(odd);
var multiply = odd.reduce(function(sum, current) {
  return sum * current;
});
console.log(multiply);
function getMinOfArray(lowest) {
  return Math.min.apply(null, lowest);
}
console.log(getMinOfArray(arr3));
function getMaxOfArray(highest) {
  return Math.max.apply(null, highest);
}
console.log(getMaxOfArray(arr3))


