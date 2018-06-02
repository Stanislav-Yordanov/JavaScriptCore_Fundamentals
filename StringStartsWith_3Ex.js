function startWith(main, sub) {
    let arr=main.split(' ');
    let first=arr[arr.length-1];

if(first===sub){
    console.log('true')
}else{
    console.log('false')
}
}
startWith('this sentence ends with fun?', 'fun?');