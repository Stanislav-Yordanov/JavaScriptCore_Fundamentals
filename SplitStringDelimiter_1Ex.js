function splitString(text, delimiter) {
let newText=text.split(delimiter);
console.log(newText.join('\n'));
}

splitString('One-Two-Three-Four-Five', '-');