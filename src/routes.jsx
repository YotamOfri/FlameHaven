import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./Home";
import { Cart } from "./components/Cart";
import { Products } from "./Products";
import { useEffect, useState } from "react";
import { CartContext } from "./components/Context";
export function MainRoutes() {
  const location = useLocation();
  const [whatTab, setWhatTab] = useState(4);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    if (data) setCart((current) => [...current, ...JSON.parse(data)]);
    setWhatTab(
      location.pathname.includes("/products")
        ? 1
        : location.pathname.includes("/contact")
        ? 2
        : 0
    );
  }, []);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const handleClick = (index) => () => {
    setWhatTab(index);
  };
  return (
    <CartContext.Provider value={{ cart, setCart, category, setCategory }}>
      <div className="relative">
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}></Cart>
        <div className={`${isCartOpen && "opacity-50"}`}>
          <Navbar
            whatTab={whatTab}
            setWhatTab={setWhatTab}
            setIsCartOpen={setIsCartOpen}
          ></Navbar>
          <Routes>
            <Route
              path="/"
              element={<Home handleClick={handleClick}></Home>}
            ></Route>
            <Route path="/products" element={<Products></Products>}></Route>
          </Routes>
        </div>
      </div>
    </CartContext.Provider>
  );
}
