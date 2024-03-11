export function sayHello(name) { // jika mau meng ekspose kode keluar harus pakai "export"
    console.info(`hello ${name}`)
}


export function sayGoodbye(name) {
    console.info(`goodbye ${name}`)
}

export const name = "keke"


// Jika File js merupakan "module" kita bisa memberikan ekstensio .mjs "sama saja"