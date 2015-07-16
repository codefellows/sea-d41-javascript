class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello {
    console.log(`Hello ${this.name}`)
  }
}


let p = new Person('john');
p.sayHello();
