function foodPurchase(name, food, price) {
  console.log(`${name} purchased ${food} for ${price}`)
}

let myArray = ['janet', 'bagels', 'One... trillion dollars!'];
foodPurchase(...myArray);
foodPurchase.apply(null, myArray);

function argsExample(one, two, ...rest) {
  console.log(arguments);
  console.log(rest)
}

argsExample(1, 2, 3, 4)
