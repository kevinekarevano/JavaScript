const container = document.getElementsByClassName("container")[0];

for (let i = 1; i <= 1000; i++) {
  const div = document.createElement("div");
  div.classList.add("poke-wrapper");

  const img = document.createElement("img");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    img.loading = "lazy"


  const p = document.createElement('p')
  p.innerText = `#${i}`

  div.appendChild(img);
  div.appendChild(p);


  container.appendChild(div);
}
