import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return (
    <>
      <div className="w-full mb-5 max-w-xs mx-3 bg-zinc-200 border border-gray-200 rounded-lg shadow flex flex-col justify-between">{children}</div>
    </>
  );
};

const Header = ({ imageLink }) => {
  return (
    <a href="#">
      <img src={imageLink} alt="product" />
    </a>
  );
};

const Body = ({ children, title }) => {
  return (
    <div className="p-5  h-full">
      <a href="">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p>{children}</p>
      </a>
    </div>
  );
};

const Footer = ({ price, addToCart, id }) => {
  return (
    <div className="flex items-center gap-3 justify-evenly pb-4 ">
      <h1 className="text-2xl font-semibold">{price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h1>
      <Button onClick={() => addToCart(id, price)} customStyle="text-white bg-blue-500 ">
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
