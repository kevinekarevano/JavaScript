// Request HTTP menggunakan Library Axios
axios
  .get("https://pokeapi.co/api/v2/pokemon")
  .then((res) => {
    console.log(res);
    console.log(res.data.results[0].name);
  })
  .catch((err) => {
    console.log(`ini error`, err);
    alert(err.message);
  });

// async await jika pakai axios
const dataPokemon = async () => {
  try {
    const res = await axios.get("https://posskeapi.co/api/v2/pokemon"); // menggunakan axios jika get (axios.get)

    console.log(res);
    console.log(res.data.results[0].name);
  } catch (err) {
    // handle jika error
    console.log("ini error", err);
    console.log(err.message); // berbagai message error di axios
    console.log(err.response.data);
  }
};
