function findOccur(sentence, word) {
    let counter=0;
    let sentenceLow=sentence.toLowerCase();
    let wordLow=word.toLowerCase();
    let arr=sentenceLow.split(' ');
    for (const element of arr) {
        if(element.match(wordLow)){
            counter++;
        }
    }
    console.log(counter);

}

findOccur('How do you plan on achieving that? How? How can you even think of that?', 'how');