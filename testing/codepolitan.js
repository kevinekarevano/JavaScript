// function hitung(a, b) {
//   const total = a + b;
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "bukan angka";
//   }
//   return total;
// }

// console.log(hitung(2, 3));

// const duaKali = (func, parasm) => {
//   func(parasm);
//   func(parasm);
// };

// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// };

// duaKali(sayHello, 'john LBF');

// const fungsi = () => {
//     const randomNum = Math.random()

//     if (randomNum > 0.10) {
//         return  () => {
//             console.log('angka lebih besar')
//         }
//     } else {
//         return () =>  {
//             console.log('angka lebih kecil')
//         }
//     }
// }

// fungsi()()

// const profilKevin = {
//     nama : 'Kevin',
//     pekerjaan : 'software engineer',
//     profilLengkap :  function ()  {
//         return `hallo nama saya ${this.nama}, pekerjaan saya ${this.pekerjaan}`
//     }
// }

// console.log(profilKevin.profilLengkap())

// const teriak = (pesan) => {
//     try{
//         console.log(pesan.toUpperCase())
//     } catch (err) {
//         console.log(err)
//         err = 'input harus string'
//         console.log(err)
//     }
// }

// teriak(123)

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12];

// angka.forEach(element => {
//     if (element % 2 === 0 ) {
//         console.log(`ini angka genap ${element}`)

//     }
// })

// // for (let i = 0; i < angka.length; i++) {
// //     if (angka[i] % 2 === 0){
// //         console.log(angka[i])

// //     }
// // }

const playerNba = [
  {
    name: "curry",
    age: 36,
    score: 2000,
  },
  {
    name: "james",
    age: 42,
    score: 4000,
  },
  {
    name: "harden",
    age: 30,
    score: 1000,
  },
];

const topScore = playerNba.some((score) => score.score > 1000);
topScore;

const pemainTopScore = playerNba.filter((data) => data.score > 1000);
const nama = pemainTopScore.map((data) => data.name);
nama;

const nilai = [90, 80, 86, 76, 75];

// let sum = 0
// for (let i of nilai) {
//      sum += i
// }

// const sum = nilai.reduce((a, b) => {
//   return a + b;
// });

// const person = {
//   firstName: "kevin",
//   lastName: "eka",
//   fullname: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },

//   fullname2: () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// person.fullname()
// const angka = [1,2,3,4,5]
// const name = ['kevin', 'hello']
// const mix = [...angka, ...name]
// console.log(mix[5])

const barang = {
  barang1 : 'rubik',
  barang2 : 'mouse',
  barang3 : 'monitor',
  barang4 : 'mic'

}

const {barang1 : rubik, barang2, barang3: monitor, barang5 = 'pc'}  = barang

rubik
barang2
barang5




// if (kelulusan === true) {
//     console.log('selamat lulus')
// } else {
//     console.log('tidak lulus')
// }

// const hitung = data => console.log(data * data)
// hitung(4)

// playerNba.forEach(data => {
//     console.log(`nama: ${data.name}, umur ${data.age}`)
// })

// for (let i = 0; i < playerNba.length; i++) {
//     const key = playerNba[i]
//     console.log(`nama ${key.name}, umurnya: ${key.age}`)
// }

// console.log('hello')

// setTimeout(() => {
//     console.log('apa?')
// }, 3000)

// console.log('teayda')
// console.log('yaya')

// const inter = setInterval(() => {
//     console.log('p')
// }, 1000);

// setTimeout(() => {
//     clearInterval(inter)
// }, 12000);

// setInterval(() => {

//     const waktu = new Date();

//     const hari = waktu.getDay()
//     const jam = waktu.getHours()
//     const menit = waktu.getMinutes()
//     const detik = waktu.getSeconds()
//     console.log(`Waktu saat ini ${hari} ${jam}:${menit}:${detik}`)

// }, 1000);
