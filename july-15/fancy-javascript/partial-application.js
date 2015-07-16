function add(x, y) {
  return x + y
}

var plusFour = add.bind(null, 4)
console.log(plusFour(10))
