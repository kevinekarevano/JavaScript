


/////////////////
// Event Handler

const judul = document.getElementById("judul"); // menangkap element judul
const ubahWarna = () => {
  // membuat function ubahWarna
  judul.style.background = "lightblue";
};

judul.onclick = ubahWarna; // menambahkan event onclick ubahWarna pada judul

//// cara 2
const p1 = document.getElementsByClassName('p1')[0] // menangkap element p1 dengan classname

p1.onclick = function () { // membuat event handler
    p1.textContent = 'text nya diubah oleh eventHandler'
}


///////////////////
// EventListener
const p4 = document.querySelector("section#b p"); // menangkap element p4

p4.addEventListener("click", function () { // membuat eventlistener, dengan 2 parameter (nama event, function)
    const ul = document.querySelector('section#b ul') // menangkap element ul
    const liBaru = document.createElement('li') // membuat element baru li
    liBaru.textContent = 'li baru' // merubah isi dari liBaru

    ul.appendChild(liBaru) // menambahkan element baru liBaru ke dalam child ul
});
