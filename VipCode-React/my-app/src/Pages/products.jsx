import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productData, setProductData] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (productData.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = productData.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, productData]);

  useEffect(() => {
    getProducts((data) => {
      setProductData(data);
    });
  }, []);

  const handleToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      const newCart = {
        id,
        qty: 1,
      };

      setCart([...cart, newCart]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // useRef --------------
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <div className="bg-cyan-300 h-20 gap-5 flex justify-end items-center px-5 font-bold text-zinc-800">
        {username}
        <Button type="button" onClick={handleLogout} customStyle="text-white bg-zinc-800 px-7">
          Log Out
        </Button>
      </div>
      <div className="flex justify-center p-5 bg-zinc-800">
        <div className="w-4/6 flex flex-wrap">
          {productData.length > 0 &&
            productData.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.Header imageLink={product.image} id={product.id} />
                  <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                  <CardProduct.Footer id={product.id} price={product.price} addToCart={handleToCart} />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-2/6">
          <h1 className="text-white font-bold text-4xl mb-5">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5  mb-2 text-white ">
            <thead>
              <tr className="text-white">
                <th>Prduct</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {productData.length > 0 &&
                cart.map((item) => {
                  const product = productData.find((product) => product.id === item.id);
                  console.log(product);
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                      <td>{item.qty}</td>
                      <td>{(item.qty * product.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3} className="font-bold">
                  Total Price
                </td>
                <td className="font-bold">{totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
