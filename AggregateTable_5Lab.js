function agregateTable(arr) {
    let sum=0;
    let list=[];
    for (let town of arr) {
        let townData=town.split('|');
        list.push(townData[1].trim());
        sum+=Number(townData[2].trim());
    }
console.log(list.join(', ')+'\n'+sum);

}
agregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);