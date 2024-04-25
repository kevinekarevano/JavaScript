// consume API dadJokes pakai Axios

const ul = document.querySelector("ul"); // menangkap element ul
const btn = document.querySelector("button"); // menangkap element button



const getDadJokes = async () => { // async await funct
  try {
    // handle jika solve
    const config = { // confict yang harus dilakukan karena syarat dari addDadjokes
      headers: {
        Accept: "application/json", // client hanya ingin menerima response dalam format JSON
      },
    };

    const res = await axios.get("https://icanhazdadjoke.com", config); // fetch data
    console.log(res.status);
    return res.data.joke;
  } catch (err) {
    // handle jika error
    return `Joke API Error`;
  }
};

const addJokes = async () => {
  const jokesText = await getDadJokes();
  const newList = document.createElement("li");
  newList.textContent = jokesText;
  ul.appendChild(newList);
};

btn.addEventListener("click", addJokes);
