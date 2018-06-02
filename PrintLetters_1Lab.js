function PrintLetters(arr) {
    for (let ind in arr) {
        console.log(`str[${ind}] -> ${arr[ind]}`)
    }
}
PrintLetters('Hello, World!');