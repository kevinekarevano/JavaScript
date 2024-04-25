// Melakukan request HTTP dengan XMLHttpRequest
const req = new XMLHttpRequest();

req.onload = function () {
  // handle jika berhasil
  const data = JSON.parse(this.response); // mengubah plain text menjadi object js, agar bisa di akses datanya
  console.log(data);
  console.log(data.results[1].name); // mendapatkan data
  console.log(data.results[0].name);
  console.log(data.results[0].url);
};

req.onerror = function () {
  // handle jika error
  console.log("Error nih bang", this);
};

req.open("GET", "https://pokeapi.co/api/v2/pokemon"); // melakukan request dengna method get dan API
req.send(); // jika ini tidak ada, request nya tidak bekerja
