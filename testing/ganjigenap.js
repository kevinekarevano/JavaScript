// for (let i = 1; i <= 10; i++) {
//   let pesan = i % 2 == 1 ? `ganjil ${i}`: `genap ${i}`
//   console.log(pesan)
// }

// console.log(typeof parseFloat)

// const iniArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < iniArray.length; i++) {
//   if (i % 2 === 1) {

//     console.log(iniArray[i])
//   }
// }

// const abcd = 'abcd'
// for (let i = 1; i <= 4; i++) {
//   console.log(`soal ke ${i}`)
//   for (let x = 0 ; x < abcd.length; x++) {
//     console.log(abcd[x])
//   }

// }

const dataMurid = [
  ["kevin", "jordan", "rafael", "quincy"],
  ["poole", "curry", "go youn joong", "harden"],
  ["james", "davis"],
];

// for (let i = 0 ; i < 3; i++ ) {
//   let row = dataMurid[i]
//   console.log(`kelas ke: ${i + 1} `)
//   for (let j = 0; j < row.length; j++) {
//     console.log(`  ${row[j]}`)
//   }
// }

// for (let murid of dataMurid) {

//   for (let nama of murid) {
//     console.log(nama);
//   }
// }

// let isian = parseInt(prompt("masukkan nilai maximal"));

// while (!isian) {
//   isian = parseInt(prompt("masukkan nilai maksimal"));
// }

// const targetNum = Math.floor(Math.random() * isian) + 1;
// console.log(targetNum);

// let user = parseInt(prompt("masukkan tebakan mu"));

// let percobaan = 1;
// while (parseInt(user) !== targetNum) {
//   percobaan++;
//   if (user > targetNum) {
//     user = parseInt(prompt("angka terlalu tinggi"));
//   } else {
//     user = parseInt(prompt("angka terllau rendah"));
//   }
// }

// alert(`selamat benar , percobaan anda:${percobaan}`);

// const nilaiMurid = {
//   kevin: 100,
//   quincy: 10,
//   sora: 20,
// };

// for (let nilai in nilaiMurid) {
//   console.log(`${nilaiMurid[nilai]}`);
// }

const min = 2;
const max = 6;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

