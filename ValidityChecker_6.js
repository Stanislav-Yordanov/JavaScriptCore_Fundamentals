function validityChecker(input) {
    let x1=input[0];
    let y1=input[1];
    let x2=input[2];
    let y2=input[3];

    let disOnetoZero=Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2));
    let round1=Math.round(disOnetoZero);
    if(round1===disOnetoZero){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let disTwoToZero=Math.sqrt(Math.pow(x2,2)+Math.pow(y2,2));
    let round2=Math.round(disTwoToZero);
    if(round2===disTwoToZero){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    let disTwoPoints=Math.sqrt((Math.pow((x1-x2),2))+(Math.pow((y1-y2),2)));
    let roundDis=Math.round(disTwoPoints);
    if(roundDis===disTwoPoints){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }


}
validityChecker([2, 1, 1, 1]);