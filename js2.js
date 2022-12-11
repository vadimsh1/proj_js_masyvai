"use strict";
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
document.write('Javascript masyvai: 4-6.<br />')
const numArr1 = [];
const numArr2 = [];
while (numArr1.length < 100) {
    let number = rand(100, 999);
    if (!numArr1.includes(number)) {
        numArr1.push(number);
    }
}
document.write('Array1: ' + numArr1 + '.<br />')
console.log(numArr1);
while (numArr2.length < 100) {
    let number = rand(100, 999);
    if (!numArr2.includes(number)) {
        numArr2.push(number);
    }
}
document.write('Array2: ' + numArr2 + '.<br />')
console.log(numArr2);
const numArr1_minus_Arr2 = [];
for (let item of numArr1) {
    if (!numArr2.includes(item)) {
        numArr1_minus_Arr2.push(item);
    }
}
document.write('Numbers from Array1 without numbers from Array2: ' + numArr1_minus_Arr2 + '.<br />')
console.log(numArr1_minus_Arr2);
const common_numArr1_numArr2 = [];
for (i = 0; i < numArr1.length; i++) {
    if (numArr2.indexOf(numArr1[i]) >= 0) {
        common_numArr1_numArr2.push(numArr1[i])
    }
}
document.write('Common numbers for Array1 & Array2: ' + common_numArr1_numArr2 + '.<br />')

console.log(common_numArr1_numArr2);