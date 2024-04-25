// Super dan Extend

// Parent Class
class Pet {
  constructor(name, age) {
    this.name = name; // Properti
    this.age = age;
  }

  // Method
  makan() {
    return `${this.name} sedang makan :>`;
  }

  // Method
  petName() {
    return this.name; 
  }
}

// Child Class, yang mewarisi dari Class Pet (Extends)
class Cat extends Pet {
  constructor(name, age, life) {
    super(name, age); // Memanggil constructor dari Parent Class (Pet) dengan super
    this.life = life; // Properti tambahan untuk Cat, yaitu life
  }
  meow() {
    // Method khusus untuk Cat
    return `${super.petName()} sedang meow meow`; // Memanggil method dari Parent Class dengan super
  }
}

// Child Class (Extends untuk mewarisi dari Parent Class)
class Dog extends Pet {
  bark() {
    // Method khusus untuk Dog
    return `Gukk Gukk..!`; 
  }
}
