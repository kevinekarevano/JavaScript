const sectionA = document.getElementById("a"); // menamngkap section a
const pBaru = document.createElement("p"); // membuat element baru
pBaru.textContent = "hallo bro"; // merubah isi dari p

sectionA.appendChild(pBaru); // menambahkan element ke child dari section a

///////////////////////////////////////////////
const liBaru = document.createElement("li"); // kita buat dulu elementnya
liBaru.textContent = "Ini Li Baru";

const ul = document.querySelector("section#b ul"); // kita tangkap ul
const li2 = ul.querySelector("li:nth-child(2)"); // kita tangkap li ke dua dari ul

ul.insertBefore(liBaru, li2); // kita sisipkan liBaru sebelum li2

////////////////////////////////////////////////////
// Remove child
const link = document.getElementsByTagName("a")[0]; // kita menangkap element link yaitu 'a'

sectionA.removeChild(link); // lalu kita remove link, child dari sectionA

// link.removeChild() bisa juga seperti ini

/////////////////////////////////////////////////////
// Replace child
const p4 = document.querySelector("section#b p"); // Tangkap element yang akan dirubah "p"
const sectionB = document.getElementById("b"); // Tangkap element parent

const p4Baru = document.createElement("p"); // create element baru
p4Baru.textContent = "JUDUL BARU!!"; // ubah isi element

sectionB.replaceChild(p4Baru, p4); // replace element p4, dengan p4Baru

// p4.replaceWith(p4Baru) bisa juga seperti ini

// object yang sudah di rubah pakai js
pBaru.style.background = "lightgreen";
liBaru.style.background = "lightgreen";
p4Baru.style.background = "lightgreen";
