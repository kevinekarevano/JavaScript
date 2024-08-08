import axios from "axios";

// Get data API with Axios
export const getProducts = async (callback) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = res;
    callback(data.data);
  } catch (err) {
    console.log(err);
  }
};

export const getDetailProduct = async (id, callback) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = res;
    callback(data.data);
  } catch (err) {
    console.log(err);
  }
};
