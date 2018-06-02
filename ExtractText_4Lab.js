function exText(arr) {
    let result=[];
    let start=arr.indexOf('(');
    let end=arr.indexOf(')',start+1);
    while(start>-1 && end>-1){
        let snippet=arr.substring(start+1, end);
        result.push(snippet);
        start=arr.indexOf('(', end+1);
        end=arr.indexOf(')',start+1);
    }
    console.log(result.join(', '));
}
exText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');