function magicMatrices(matrix) {
    let sumRow=0;
    let sumCol=0;
    let isOk=false;
    let count=0;
    for (let row = 0; row <matrix.length ; row++) {
        for (let col = 0; col <matrix.length ; col++) {
            sumRow +=matrix[row][col];
            sumCol+=matrix[col][row];
            if(sumCol===sumRow){
                isOk=true;
                count++;
            }
        }
    }
    if((isOk) && (count===Number(matrix.length))){
        console.log("true")
    }else{
        console.log("false")
    }

}
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);