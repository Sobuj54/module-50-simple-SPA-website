import { getShoppingCart } from "../utilities/fakedb";

const cartsProductsLoader = async () => {
  // if your cart data is in database, then you have to use async await
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart);
  console.log(ids);

  const loadedProducts = await fetch("http://localhost:5000/productsByIds", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });
  const products = await loadedProducts.json();

  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((product) => product._id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  // if you need to  return two things return them as array
  // return [savedCart , products];
  // other way
  // return {savedCart , products};
  return savedCart;
};

export default cartsProductsLoader;
