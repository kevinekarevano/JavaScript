// Membuat Object dengan Constructor Function

// penulisan constructor function harus menggunakan pascal case
function Color(r, g, b) {
  // Menetapkan nilai parameter ke properti object
  this.r = r; // this.r, this.g, this.b adalah properti object 
  this.g = g; // this adalah keyword yang digunakan untuk mengakses object
  this.b = b;
}

// Menambahkan method rgb ke prototype dari Color
// Method ini akan mengembalikan string format warna RGB dari object Color
Color.prototype.rgb = function () {
  // Menggunakan destructuring untuk mendapatkan nilai r, g, b dari object ini
  const { r, g, b } = this;
  // Mengembalikan string format RGB
  return `rgb(${r}, ${g}, ${b})`;
};

// Menambahkan method hello ke prototype dari Color dengan arrow function
Color.prototype.hello = () => {
  console.log("Hello World");
};
