// consume TvMaze pakai Axios

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    document.querySelectorAll("img").forEach((img) => img.remove()); // menghapus semua element img

    const keyword = form.elements.query.value; // keyword untuk query search (menambahkan parameter)
    const config = {
      params: { q: keyword },
    };

    const res = await axios.get("https://api.tvmaze.com/search/shows", config);

    const data = res.data;
    const getImage = () => {
      for (let gambar of data) {
        if (gambar.show.image) {
          const srcGambar = gambar.show.image.medium;
          const newImg = document.createElement("img");
          newImg.src = srcGambar;
          document.body.append(newImg);
        }
      }
    };

    if (data.length > 0) {
      console.log(data);
      getImage();
    } else {
      alert("Tv Show tidak ditemukan !!");
    }

    form.elements.query.value = "";
  } catch (err) {
    console.log(`error bang ${err}`);
  }
});

// const getImage = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("img");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };
