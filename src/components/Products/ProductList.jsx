import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../Context";
import productsData from "./Products.json";
export function ProductList({ category, selectedOption }) {
  const SortedByCategory = productsData.categories.filter((Category) => {
    return category === "all"
      ? Category
      : Category.name.toLocaleLowerCase() === category.toLocaleLowerCase()
      ? Category
      : "";
  });
  const allProducts = SortedByCategory.flatMap((category) => category.products);
  const sortedProducts =
    selectedOption === "popularity"
      ? allProducts.slice().sort((a, b) => b.sales - a.sales)
      : selectedOption === "High"
      ? allProducts.slice().sort((a, b) => b.price - a.price)
      : allProducts.slice().sort((a, b) => a.price - b.price);
  //   Use States
  const { setCart, cart } = useContext(CartContext);

  // handleClicks
  const handleAdd = (product) => () => {
    const index = findIndexByName(cart, product);
    if (index === false) setCart((current) => [...current, [product, 1]]);
    else updateNumberByIndex(index);
  };
  // functions
  const findIndexByName = (objectsArray, targetObject) => {
    for (let i = 0; i < objectsArray.length; i++)
      if (objectsArray[i][0].name === targetObject.name) return i;
    return false;
  };
  const updateNumberByIndex = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? [item[0], item[1] + 1] : item
    );
    setCart(updatedCart);
  };
  return (
    <div className="flex gap-5 sm:px-10 w-full flex-wrap justify-center  ">
      {sortedProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="flex flex-col sm:justify-normal sm:items-start items-center justify-center  sm:w-60 w-40 gap-5 border p-4  rounded-sm"
          >
            <img
              src={product.image[0]}
              className="sm:w-56 sm:h-48 w-20 h-20 object-contain flex-wrap hover:scale-105 cursor-pointer  transition-all duration-150 ease-in-out"
              alt=""
            />
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="w-full font-light">{product.name}</h1>
              </div>
              <div className="flex justify-between items-center ">
                <h1 className=" w-20 font-bold ">{`$${product.price}`}</h1>
                <button
                  className="bg-black text-white sm:text-base text-sm font-light sm:p-2 sm:w-auto sm:h-auto w-20 h-8  rounded-sm hover:opacity-80 transition-all duration-150 ease-in-out"
                  onClick={handleAdd(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ProductList.propTypes = {
  category: PropTypes.string,
  selectedOption: PropTypes.string,
};
