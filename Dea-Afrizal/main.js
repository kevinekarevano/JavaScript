// let saldo = prompt("Masukkan saldo anda")

// alert(`saldo anda adalah ${saldo}`) done


//Nama Hari
// const namaHari = ["senin", "selasa","rabu", "kamis", "jumat", "sabtu", "minggu"]
// let hari = new Date().getDay()

// console.log(namaHari[hari])

let angkaPertama = prompt("Masukkan angka pertama");
let angkaKedua = prompt("Masukkan angka kedua");
let operator = prompt("Masukkan operator: jika pertambahan maka \"+\", jika pengurangan maka \"-\" ");


if (operator === "+" || operator === "-") {
   
    let input1 = parseInt(angkaPertama);
    let input2 = parseInt(angkaKedua);

    
    if (operator === "+") {
        alert(input1 + input2);
    } else if (operator === "-") {
        alert(input1 - input2);
    }
} else {
    alert("Operator tidak valid. Harap masukkan \"+\" untuk pertambahan atau \"-\" untuk pengurangan.");
}

