import PropTypes from "prop-types";
import { CartContext } from "./Context";
import { useContext } from "react";
export function Cart({ isCartOpen, setIsCartOpen }) {
  const handleClickOutside = (event) => {
    if (event.target.classList.contains("aria-busy:")) return;
    else {
      document.removeEventListener("click", handleClickOutside);
      setIsCartOpen(false);
    }
  };
  if (isCartOpen)
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);
  // UseStates
  const { cart, setCart } = useContext(CartContext);
  // handleClicks
  const handleClear = () => {
    setCart([]);
  };
  const handleTotal = () => {
    let total = 0;
    cart.map((item) => {
      total += item[0].price * item[1];
    });
    return total;
  };
  const handleRemove = (product) => () => {
    removeItemByIndex(findIndexByName(cart, product[0]));
  };
  // functions
  const findIndexByName = (objectsArray, targetObject) => {
    for (let i = 0; i < objectsArray.length; i++)
      if (objectsArray[i][0].name === targetObject.name) return i;
    return false;
  };
  const removeItemByIndex = (index) => {
    const updatedItems = cart.filter((_, i) => i !== index);
    setCart(updatedItems);
  };
  return (
    <div
      className={`fixed right-0 h-full sm:w-72 w-52 bg-white z-50 aria-busy: transform transition-transform overflow-scroll  ${
        isCartOpen ? "translate-x-0" : "translate-x-full Cart"
      } `}
    >
      <div className="flex flex-col gap-5 pt-5  px-4 aria-busy:">
        <div className="flex justify-between  aria-busy:">
          <button className="aria-busy:">{cart.length} Items</button>
          <button
            className="text-gray-500 hover:text-black aria-busy:"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
        <div className="flex flex-col gap-5 overflow-y-scroll aria-busy: ">
          {cart.map((item) => {
            return (
              <div
                key={item[0].name}
                className="aria-busy: border py-4 px-1 flex gap-5 rounded-sm relative  "
              >
                <div className="aria-busy: ">
                  <img
                    src={item[0].image[0]}
                    className="w-12 h-20 object-contain aria-busy:"
                    alt=""
                  />
                </div>
                <div className="aria-busy:">
                  <h1 className="aria-busy:">{item[0].name}</h1>
                  <h1 className="aria-busy:">
                    ${parseFloat(item[0].price) * item[1]}
                  </h1>
                  <h1 className="aria-busy:">{item[1]}</h1>
                </div>
                <div
                  className="absolute aria-busy: top-0 right-1 cursor-pointer"
                  onClick={handleRemove(item)}
                >
                  <i className="bx bx-x aria-busy: text-xl hover:scale-110 transition-all duration-150 ease-in-out"></i>
                </div>
              </div>
            );
          })}
          <div className="aria-busy:">
            <h1 className="aria-busy:">Total: ${handleTotal()}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
Cart.propTypes = {
  isCartOpen: PropTypes.bool,
  setIsCartOpen: PropTypes.func,
};
