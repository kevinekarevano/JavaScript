const judul = document.getElementById("judul");
judul.innerHTML = "<em>kevin</em>"; // menambahkan value dan tag html

const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "hello jarvis"; // menambahkan value

judul.style.background = "salmon";
judul.style.color = "skyblue"; // merubah collor

const title = document.getElementsByTagName("h1");
title[0].setAttribute("class", "classBaru"); // menambahkan atribute baru serta value nya, tetapi dia akan menghapus atribute sebelumnya

title[0].removeAttribute("class"); // menghapus atribute


const p2 = document.querySelector(".p2");
console.log(p2);

p2.classList.add("satu", "dua", "tiga"); // menambahkan class, bisa lebih dari satu
