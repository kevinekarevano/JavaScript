const button = document.getElementsByTagName('button')
const judul = document.querySelector('h1')



function rgb ()  {
    const r = Math.round(Math.random() * 255)
    const g = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)

    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
   


}



for (let tombol of button) {
    tombol.addEventListener('click', rgb)
}

judul.addEventListener('click', rgb)


