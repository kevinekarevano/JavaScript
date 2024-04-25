// // request HTTP menggunakan fetch

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => {
//     // kita proses dulu data nya agar menjadi tipe data JSON
//     if (!res.ok) {
//       throw Error(`tidak bisa nge fetch data`);
//     }

//     return res.json(); // untuk mengonversi respons menjadi objek JavaScript
//   })

//   .then((data) => {
//     console.log("berhasil", data);
//     return fetch("https://pokeapi.co/api/v2/pokemon")
//   })

//   .then((data) => {
//     console.log("request ke 2");
//     if (!data.ok) {
//       throw Error(`tidak bisa nge fetch data`);
//     }

//     return data.json();
//   })

//   .then((data) => {
//     console.log(data)
//     console.log(data.results[0].name)
//   })

//   .catch((err) => {
//     console.log("ini error", err);

//   });

// Versi Async Await
const dataPokemon = async () => {
  // lebih simple menggunakan async await
  try {
    // handle jika proses berhasil
    const res = await fetch("https://pokeapi.co/api/v2/pokemon"); // ngefecth data (fetch default nya adalah GET)
    const data = await res.json(); // convert menjadi object JS
    console.log(data);
    console.log(data.results[0]);
  } catch (err) {
    // handle jika error
    console.log("ini error", err);
  }
};

dataPokemon(); // pemanggilan function

