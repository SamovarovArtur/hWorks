var array = ['when','new', 'legend', 'not', 'born',];
function elementLenght(word){
    return word.length === 3;
}
console.log(array.some(elementLenght))
/////////////////////////////////////////////
function includeLetter(letter){
    return letter.includes('n')
}
console.log(array.every(includeLetter))
//////////////////////////////////////////////
array.forEach(function (item,i,array) {
    item = item + " " + i;
    console.log(item)
})
//////////////////////////////////////////////
var newArray = array.filter(function (newWords) {
    return newWords.length === 3
})
console.log(newArray)
//////////////////////////////////////////////
var newArray2 = array.reduce(function (prevValue, nextValue,index,array) {
    return prevValue + ' ' + nextValue
})
console.log(newArray2)
////////////////////////////////////////////////
var newArray3 = array.map(function (digits) {
    return digits.length
})
console.log(newArray3)
////some