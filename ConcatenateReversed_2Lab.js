function concatRev(arr) {
let newArr=arr.join('');
let chars=Array.from(newArr);
let revChar=chars.reverse().join('');
console.log(revChar);
}

concatRev(['I', 'am', 'student']);