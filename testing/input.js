// Menangkap elemen input file
const fileInput = document.querySelector('input[type="file"]');
// Menangkap elemen img
const imageElement = document.querySelector('img');

// Menambahkan event listener untuk perubahan pada input file
fileInput.addEventListener('change', function() {
    // Memastikan bahwa file dipilih
    if (fileInput.files && fileInput.files[0]) {
        // Membuat objek URL untuk file yang dipilih
        const reader = new FileReader();

        reader.onload = function(e) {
            // Menetapkan src dari elemen img ke URL objek yang dibaca
            imageElement.src = e.target.result;
            console.log(e.target.result)
        }

        // Membaca file sebagai URL data
        reader.readAsDataURL(fileInput.files[0]);

    }
});

