function extractNonDecreasing(arr) {
    let max=Number.NEGATIVE_INFINITY;
    let newArr=[];
    for (let i = 0; i <arr.length; i++) {
        if(arr[i]>=max){
            max=arr[i];
            newArr.push(max);
        }
    }
    console.log(newArr.join('\n'))

}
extractNonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);