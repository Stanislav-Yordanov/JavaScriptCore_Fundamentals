function arrayDelimiter(arr) {
    let delimiter=arr[arr.length-1];
    arr.pop();
    console.log(arr.join(`${delimiter}`));

}
arrayDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);