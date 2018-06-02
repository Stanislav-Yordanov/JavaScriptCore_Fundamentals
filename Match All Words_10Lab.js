function matchWords(text) {

let words=text.match(/\w+/g);
return words.join('|');

}

console.log(matchWords('_(Underscores) are also word characters'));;