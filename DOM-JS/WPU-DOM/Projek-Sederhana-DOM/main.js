const btn = document.getElementsByTagName("button")[0]; // menangkap button
const body = document.getElementsByTagName("body")[0]; // menangkap body



//////////////////////
// merubah bg dengan click pada button
btn.addEventListener("click", function () {
  // membuat event
  body.classList.toggle("warna"); // jika btn di click, akan menambahkan atau menghilangkan class warna
});
 
///////////////////
// membuat element buutton baru
const btnBaru = document.createElement("button"); // membuat element button baru
btnBaru.textContent = "BUTTON 2"; // memberikan tulisan pada button

btn.after(btnBaru); // meletakkan button baru setelah btn



////////////////
// merubah warna bg randm dengan klik btn
btnBaru.addEventListener("click", function () {
  // membuat event pada btnBaru
  const angkaRandom1 = Math.round(Math.random() * 255 + 1); // menhasilkan angka random 1-255, dan dibulatkan
  const angkaRandom2 = Math.round(Math.random() * 255 + 1);
  const angkaRandom3 = Math.round(Math.random() * 255 + 1);
  console.log(angkaRandom1, angkaRandom2, angkaRandom3); // console.log angkaRandom
  document.body.style.backgroundColor = `rgb(${angkaRandom1}, ${angkaRandom2}, ${angkaRandom3})`; // warna rgb di isi dengan variable angkaRandom
});



///////////////////////////////////
// Merubah warna menggunakan slider
const slideMerah = document.querySelector("input[name=slideMerah]"); // menangkap slide, dengan tag input dengan name = slideMerah
const slideHijau = document.querySelector("input[name=slideHijau]");
const slideBiru = document.querySelector("input[name=slideBiru]");

slideMerah.addEventListener("input", () => { // membuat event pada slider, dengan event 'input'
  const nilaiSlideMerah = slideMerah.value; // menangkap value dari slider
  const nilaiSlideHijau = slideHijau.value;
  const nilaiSlideBiru = slideBiru.value;
  console.log(`${nilaiSlideMerah}, ${nilaiSlideHijau}, ${nilaiSlideBiru}`); // memunculkan nilai dari slider
  document.body.style.background = `rgb(${nilaiSlideMerah}, ${nilaiSlideHijau}, ${nilaiSlideBiru})`; // menggnti nilai rbg dengan value dari slider
});

slideHijau.addEventListener("input", () => {
  const nilaiSlideMerah = slideMerah.value;
  const nilaiSlideHijau = slideHijau.value;
  const nilaiSlideBiru = slideBiru.value;
  console.log(`${nilaiSlideMerah}, ${nilaiSlideHijau}, ${nilaiSlideBiru}`);
  document.body.style.background = `rgb(${nilaiSlideMerah}, ${nilaiSlideHijau}, ${nilaiSlideBiru})`;
});

slideBiru.addEventListener("input", () => {
  const nilaiSlideMerah = slideMerah.value;
  const nilaiSlideHijau = slideHijau.value;
  const nilaiSlideBiru = slideBiru.value;
  console.log(`${nilaiSlideMerah}, ${nilaiSlideHijau}, ${nilaiSlideBiru}`);
  document.body.style.background = `rgb(${nilaiSlideMerah}, ${nilaiSlideHijau}, ${nilaiSlideBiru})`;
});




//////////////////////////////////
// mengganti warna dengan menggerakan mouse
window.addEventListener("mousemove", (event) => { // membuat event pada window. event nya'mousemover', dengan function parameter (event)
  const xPosition = Math.round((event.clientX / window.innerWidth) * 255); // posisi mouse sumbu x, dibagi tinggi browser dikali 255, lalu hasilnya dibulatkan
  const yPosition = Math.round((event.clientY / window.innerHeight) * 255);
  console.log(`X : ${xPosition} Y : ${yPosition}`); // menampilkan hasil dari yPos dan xPos
  document.body.style.background = `rgb(${xPosition}, ${yPosition}, 100)`; // merubah angka pada rgb dengan varibale 
});
