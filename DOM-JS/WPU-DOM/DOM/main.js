// DOM Selection

// getElementById
const judul = document.getElementById("judul");

judul.style.backgroundColor = "red"; // cara merubah style
judul.style.color = "#ffffff";
judul.innerHTML = "KEVIN EKAREVANO"; // merubah text

// getElementsByTagName
const paragraf = document.getElementsByTagName("p");

paragraf[2].style.backgroundColor = "crimson";

for (var i = 0; i < paragraf.length; i++) {
  // jika mau semua nya kena, pakai looping
  paragraf[i].style.backgroundColor = "crimson";
}

//getElementsByClassName
const p1 = document.getElementsByClassName("p1");

p1[0].innerHTML = "di ubah pakai js"; // mengapa pakai index, karena masuknya ke html collection yang bentuknya arrray
console.log(p1);

// document.querySelector
const p4 = document.querySelector("#b p");
p4.style.color = "green";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "yellow";

// document.querySelectorAll
const p = document.querySelectorAll("p");
p[2].style.background = "lightblue";

for (let i = 0; i <= 4; i++) { // pakai loop jika ingin semuanya kena
  p[i].style.background = "lightblue"
}

 const nama = 'kevin'

