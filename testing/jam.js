const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

const jam = () => {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  h1.textContent = `${hours}:${minutes}:${seconds}`;
  h2.textContent = ` ${date} ${monthName[month]} ${year}`;
};

setInterval(jam, 1000);
