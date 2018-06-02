function variableName(str) {
    let pattern=/\b_{1}([A-Za-z0-9]+)\b/g;
    let match=pattern.exec(str);
    let names=[];

    while(match!==null){
        names.push(match[1]);
        match=pattern.exec(str);
    }
    console.log(names.join(','))
}
variableName('The _id and _age variables are both integers.');