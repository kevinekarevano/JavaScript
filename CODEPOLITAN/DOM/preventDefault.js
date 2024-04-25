const form = document.querySelector("form");

const ul = document.querySelector(".ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  if (input.value === '') {
    alert('input kosong')
  } else {

    const list = document.createElement("li");
    list.innerText = input.value;
    console.log(input.value);
    ul.appendChild(list);
    input.value = "";
  }
  
});
