function captureNum(arr) {
let pattern=/[0-9]+/g;
    console.log(arr.join('').match(pattern).join(' '));
}
captureNum(['The300' ,'What is that?', 'I think it’s the 3rd movie.' ,'Lets watch it at 22:45']);