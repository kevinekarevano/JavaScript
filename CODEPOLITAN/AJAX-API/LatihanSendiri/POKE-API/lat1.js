// consume Poke API pakai Axios

const h2 = document.querySelector("h2"); // menangkap element ul
const btn = document.querySelector("button"); // menangkap element button


const getPokemon = async () => {
  try{
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const namaPokemon = res.data.results
    const generateNamaPoke = () => {
      const randomNum = Math.floor(Math.random() * 20);
      return namaPokemon[randomNum].name
    }
    return generateNamaPoke()
  }
  catch(err) {
    console.log(`error bang ${err.message}`)
  }
}

const addNamaPoke = async () => {

  h2.innerHTML = "" 

  h2.innerText = (await getPokemon()).toUpperCase()
}

btn.addEventListener('click', addNamaPoke)

