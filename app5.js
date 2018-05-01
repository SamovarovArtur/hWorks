var arr =  ['a','b','c','d','e'];
console.log(arr)
for(var i = arr.length-1; i >= 0; i--){
     arr.push(arr[i])
}
console.log(arr)
for(var i = 0; i <arr.length; i++){
    arr.shift(arr[i])
}
console.log(arr);
// it works without f ^^^

// function qwerty(a,b,c,...) {
//
// }
// qwerty(?,?,?...)
//Для понимания функции изучить код и представить, что из текущего кода можно дублировать?
//-----------------------------------------------
// function random() {
//     var arr = [];
//     function ra() {
//        return Math.floor(Math.random()*(100))
//     }
//     for(var i = 0; i < 5; i++){
//         arr.push(ra())
//     }
//     console.log(arr);
//     for(var j = 0; j < arr.length; j++){
//         if(arr[j] < arr[j+1]){
//             continue
//             console.log(true)
//         }else{
//             console.log(false)
//         }
//     }
// }
// random()
