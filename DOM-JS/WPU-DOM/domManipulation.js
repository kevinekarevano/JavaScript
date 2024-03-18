const judul = document.getElementById("judul");
judul.innerHTML = "<em>kevin</em>";

const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "hello jarvis";

judul.style.background = "salmon";
judul.style.color = "skyblue";

const title = document.getElementsByTagName("h1");
title[0].setAttribute("class", "classBaru");
