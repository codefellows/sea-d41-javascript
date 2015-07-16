function greet (name, greeting='hello') {
  console.log(`${greeting} ${name}`)
}

greet('beth')
greet('john', 'hola')

function greetTwo(name, greet) {
  greet = greet || 'hello'
  console.log(`${greeting} ${name}`)
}


