// keyword class

// pembuatan Class
class Person {
  // constructor adalah method yang otomatis dijalankan ketika sebuah object dibuat
  constructor(name, age, job) {
    // Inisialisasi properti name, age, dan job pada instance dari class.
    this.name = name;
    this.age = age;
    this.job = job;

    console.log("hallo"); // Menampilkan pesan "hallo" ke console ketika sebuah instance dibuat.

    // Menambahkan method sayName ke instance yang dibuat.
    this.sayName = function () {
      console.log(name);
    };

    this.fullData() // 
    
  }


  // membuat prototype
  fullData() {
    const { name, age, job } = this;
    return `${name} ${age} ${job}`;
  }

  // membuat prototype
  perkenalan() {
    const { name, age, job } = this;
    return `Hallo, nama saya ${name}, umur saya ${age}, dan pekerjaan saya sebagai ${job}`;
  }
}

// Membuat instance baru dari class Person dengan nama 'kevin', umur 17, dan pekerjaan 'software engineer'.
const newPerson = new Person("kevin", 17, "software engineer");

// Menampilkan hasil dari method perkenalan ke console.
console.log(newPerson.perkenalan());
document.writeln(newPerson.perkenalan())