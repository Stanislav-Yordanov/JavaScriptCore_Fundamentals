function restaurantBill(arr) {
    let products=[];
    let total=0;
    for (let i = 0; i <arr.length ; i+=2) {
        let product=arr[i];
        let price=Number(arr[i+1]);
        products.push(product);
        total+=price;
    }
    let productsList=(products.join(', '));
    console.log(`You purchased ${productsList} for a total sum of ${total}`)
}
restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);