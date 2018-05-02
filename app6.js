var array = ['when','new', 'legend', 'not', 'born',];
console.log(array)
// function elementLenght(word){
//     return word.length === 3;
// }
// console.log(array.some(elementLenght))
// /////////////////////////////////////////////
// function includeLetter(letter){
//     return letter.includes('n')
// }
// console.log(array.every(includeLetter))
// //////////////////////////////////////////////
// array.forEach(function (item,i,array) {
//     item = item + " " + i;
//     console.log(item)
// })
// //////////////////////////////////////////////
// var newArray = array.filter(function (newWords) {
//     return newWords.length === 3
// })
// console.log(newArray)
// //////////////////////////////////////////////
// var newArray2 = array.reduce(function (prevValue, nextValue,index,array) {
//     return prevValue + ' ' + nextValue
// })
// console.log(newArray2)
// ////////////////////////////////////////////////
// var newArray3 = array.map(function (digits) {
//     return digits.length
// })
// console.log(newArray3)
function everyItem(item) {
    return (item.includes('n'))
}
function funcEvery(arrData, callback) {
    var result;
    for (var i = 0; i < arrData.length; i++) {
        if (callback(arrData[i])) {
           result = true
        } else {
           result = false
            break
        }
    }
    return result
}
console.log(funcEvery(array, everyItem))
//////////////////////////////////////////////
function someItem(item) {
    return (item.includes('w'))
}
function funcSome(arrData, callback) {
    var result;
    for (var i = 0; i < arrData.length; i++) {
        if (callback(arrData[i])) {
            result = true
            break
        } else {
            result = false
        }
    }
    return result
}
console.log(funcSome(array, someItem))
/////////////////////////////////////////////
function forEachItem(item) {
    console.log(item)
}
function funcForEach(arrData, callback){
    var result = '';
    for(var i = 0; i < arrData.length;i++){
        callback(arrData[i])
    }
    return result
}
console.log(funcForEach(array, forEachItem))
/////////////////////////////////////////////
function filterItem(item) {
    return (item.length < 4)
}
function funcFilter(arrData, callback) {
    var result = [];
    for(var i = 0;i < arrData.length;i++){
        if(callback(arrData[i])){
            result.push(arrData[i])
        }else{continue}
    }
    return result
}
console.log(funcFilter(array ,filterItem))
////////////////////////////////////////////
function mapItem(item) {
    return (item.length)
}
function funcMap(arrData, callback) {
    var result = [] ;
    for(var i = 0; i < arrData.length;i++){
         result.push(callback(arrData[i]))
    }return result
}
console.log(funcMap(array, mapItem))
///////////////////////////////////////////
function reduceItem(itemOne, itemTwo) {
    return (itemOne + ' ' + itemTwo)
}
function funcReduce(arrData, callback) {
    var result = [];
    for(var i = 0; i < arrData.length;i++){
        result = (callback(result, arrData[i]))
    } result = result.split(', ')
    return result
}
console.log(funcReduce(array, reduceItem))