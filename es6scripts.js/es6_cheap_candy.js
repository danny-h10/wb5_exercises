"use strict"

let cart = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Giant Chewy Nerds", price: 6.00},
    {product: "Snickers Bar", price: 1.89},
    {product: "Mounds Bar", price: 1.50},
    {product: "Sour Patch Kids", price: 3.79},
    {product: "Everlasting Gobstopper", price: .99},
    {product: "Ring Pop", price: 1.79}
 ];

 let under4 = cart.filter( (product) => product.price < 4);
    //first way of doing it or you can use the single line code like the above example
    // if (product.price < 4){
    //     return true;
    // }
    // return false;
 console.log(under4)

 let eminem = cart.filter( (product) => {

    if (product.product.indexOf("M&Ms") !== -1){
        return true;
    }
    return false;
}) ;

console.log(eminem)


let fish = cart.find( (fishy) => {
    return fishy.product === "Swedish Fish";
})

console.log(fish)

if (fish){
    console.log("we got that bro beans")

}else{
     console.log("we got that bro beans")
}

//same thing above as a ternary

(fish) ?  console.log("we got that bro beans") : console.log("we got that bro beans");