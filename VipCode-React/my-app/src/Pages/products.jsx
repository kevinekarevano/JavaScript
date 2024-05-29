import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useState } from "react";

const productData = [
  {
    id: 1,
    title: "Sepatu Baru",
    image: "/images/sepatu.png",
    description: "lorem sassaLorem ipsum dolor sit amet consectetur",
    price: 1000000,
  },
  {
    id: 2,
    title: "Sepatu Lama",
    image: "/images/sepatu.png",
    description: "barang lama nih",
    price: 500000,
  },
  {
    id: 3,
    title: "Sepatu Baru",
    image: "/images/sepatu.png",
    description: "barang lama nih",
    price: 250000,
  },
];

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleToCart = (id) => {
    const newCart = {
      id,
      qty: 1,
    };

    setCart([...cart, newCart]);
  };

  const email = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="bg-cyan-300 h-20 gap-5 flex justify-end items-center px-5 font-bold text-zinc-800">
        {email}
        <Button type="button" onClick={handleLogout} customStyle="text-white bg-zinc-800 px-7">
          Log Out
        </Button>
      </div>
      <div className="flex justify-center p-5 bg-zinc-800">
        <div className="w-3/4 flex flex-wrap">
          {productData.map((product) => {
            return (
              <CardProduct key={product.id}>
                <CardProduct.Header imageLink={product.image} />
                <CardProduct.Body title={"Sepatu Baru"}>{product.description}</CardProduct.Body>
                <CardProduct.Footer id={product.id} price={product.price} addToCart={handleToCart} />
              </CardProduct>
            );
          })}
        </div>
        <div className="w-1/4">
          <h1 className="text-white font-bold text-4xl">Cart</h1>
          <ul className="mt-5">
            {cart.map((item) => {
              return (
                <li key={item.id} className="text-white text-lg">
                  {item.id}
                </li>
              );
            })}
          </ul>
          <table>
            <thead>
              <tr className="text-white">
                <th>Prduct</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = productData.find((product) => product.id === item.id);
                <tr>
                  <td>{product.title}</td>
                  
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
