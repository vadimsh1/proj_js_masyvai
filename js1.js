"use strict";
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
document.write('Javascript masyvai: 1-3.<br />')
let i = 0;
const abcArr = ['A', 'B', 'C', 'D'];
const mainArray = [];
while (i < 200) {
    let index = rand(0, 3);
    mainArray.push(abcArr[index]);
    i++;
}
console.log(mainArray);
let countA = 0, countB = 0, countC = 0, countD = 0;
for (let item of mainArray) {
    switch (item) {
        case 'A': countA++;
            break;
        case 'B': countB++;
            break;
        case 'C': countC++;
            break;
        case 'D': countD++;
            break;
    }
}
document.write('Array from 200 items: ' + mainArray + '.<br />');
document.write('A: ' + countA + '; B: ' + countB + '; C: ' + countC + '; D: ' + countD + '.<br />');
document.write('Array sorted by abc:<br />');
const mainArrayCopy = [...mainArray];
document.write(mainArrayCopy.sort() + '<br />');
const mainArray2 = [], mainArray3 = [];
i = 0;
while (i < 200) {
    let index = rand(0, 3);
    mainArray2.push(abcArr[index]);
    i++;
}
i = 0;
while (i < 200) {
    let index = rand(0, 3);
    mainArray3.push(abcArr[index]);
    i++;
}
const plus3MainArray = [];
for (i = 0; i < 200; i++) {
    plus3MainArray.push(mainArray[i] + mainArray2[i] + mainArray3[i]);
}
document.write('Plused Array: ' + plus3MainArray + '.<br />');
let countOrigValue = 0;
const countOrigValueArray = [];
for (i = 0; i < plus3MainArray.length; i++) {
    switch (plus3MainArray.includes(plus3MainArray[i], i + 1)) {
        case false: countOrigValue++;
            countOrigValueArray.push(plus3MainArray[i]);
            break;
        case true: break;
    }
}
document.write('Origin values: ' + countOrigValue + '. ' + countOrigValueArray + '.<br />');
console.log(countOrigValue);
const countOrigCombinationArray = [];
for (let item of plus3MainArray) {
    let simbArr = [];
    let simbol;
    simbArr = item.split('');
    for (let countFilter = 0, ind = 0; ind < simbArr.length; ind++) {
        let filteredSimbArr = [];
        simbol = simbArr[ind];
        filteredSimbArr = simbArr.filter(simb => simb === simbol);

        if (filteredSimbArr.length > 1) {
            console.log(filteredSimbArr);
            break;
        }
        countFilter++;
        if (countFilter === simbArr.length) {
            countOrigCombinationArray.push(item);
        }
    }
}
document.write('Origin combination: ' + countOrigCombinationArray.length + '. ' + countOrigCombinationArray + '.<br />');
