function repeat(text, times) {
let numberTimes=Number(times);
    let newText=[];
    for (let i = 0; i <numberTimes ; i++) {
        newText.push(text)
    }
    console.log(newText.join(''))
}

repeat('repeat','5');