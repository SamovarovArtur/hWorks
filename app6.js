var array = ['when','new', 'legend', 'not', 'born',];
function elementLenght(word) {
    return word.length === 3
}
console.log(array.some(elementLenght))
function includeLetter(letter){
    return letter.includes('n')
}
console.log(array.every(includeLetter))