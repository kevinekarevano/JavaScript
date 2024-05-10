import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.js";
import "./index.css";

const Food = (props) => {
  const { nama, harga, foto, deskripsi, stok } = props.foodObj;
  return (
    <>
      <div className="margin-bottom">
        <h1>
          {nama} | {stok ? harga : 'Habis--'}
        </h1>
        <img className={!stok ? "sold" : ""} src={foto} alt={nama} />
        <p>{deskripsi}</p>
      </div>
    </>
  );
};

const Header = () => {
  const jam = new Date().getHours();
  const isOpen = jam >= 10 && jam <= 22;

  return (
    <>
      <div>
        <h3 className="merah">
          <span></span>Keterangan: {isOpen ? <i className="hijau">buka</i> : <i>tutup</i>}
        </h3>
        <h1
          style={{
            color: "lightblue",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
          }}
        >
          Warteg niger
        </h1>
      </div>
    </>
  );
};

const Footer = () => {
  const jam = new Date().getHours();
  const isOpen = jam >= 10 && jam <= 22;

  if (isOpen) {
    return <FooterOpen jam={jam} />;
  } else {
    return <FooterClose jam={jam} />;
  }
};

const FooterOpen = ({ jam }) => {
  return <div className="hijau">Restoran buka!!! Sekarang jam: {jam}</div>;
};

const FooterClose = ({ jam }) => {
  return <div className="merah">Restoran tutup, sekarang jam : {jam}!!! silahkan datang pada jam 10 - 22</div>;
};

const Menu = () => {
  const numsFood = data.length;
  console.log(numsFood);
  console.log(data[0].foto.length);
  return (
    <>
      <div>
        {numsFood > 0 ? (
          data.map((data) => {
            return <Food foodObj={data} key={data.nama} />;
          })
        ) : (
          <i>kosong</i>
        )}
      </div>

      {/* <h2>Menu Kita:</h2>
      <Food namaMakanan="Bakso" harga={10000} deskripsi="Bola daging yang direbus disajikan dengan mie dan kuah kaldu" image="./food/bakso.jpg" />
      <Food namaMakanan="Bakso" harga={10000} deskripsi="Bola daging yang direbus disajikan dengan mie dan kuah kaldu" image="./food/bakso.jpg" />
      <Food />
      <Food />
      <Food /> */}
    </>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
};

// Main render function
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
