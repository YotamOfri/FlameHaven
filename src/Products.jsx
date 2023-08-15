import { useState } from "react";
import { ProductList } from "./components/Products/ProductList";
import { CartContext } from "./components/Context";
import { useContext } from "react";
export function Products() {
  // Use States
  const { setCategory, category } = useContext(CartContext);
  const [selectedOption, setSelectedOption] = useState("popularity");
  // handleClicks
  const handleClickCategory = (string) => () => {
    setCategory(string);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="h-full w-full flex flex-col font-roboto">
      <div className=" flex flex-col gap-20">
        <div className="relative h-96 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1586775490184-b79f0621891f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="h-96 w-full object-cover absolute -z-10"
          />
          <h1 className=" text-black text-8xl font-VinaSans tracking-wide">
            Products
          </h1>
        </div>
        <div className="sm:flex w-full sm:justify-between sm:px-20 px-1 h-fit grid  grid-cols-3">
          <div className="flex flex-col gap-5 border-l-2 pl-5 border-gray-500 col-start-1 col-end-1 row-start-1 row-end-1 h-fit">
            <h1 className="text-2xl font-bold">Categories</h1>
            <div className="flex flex-col items-start gap-4 text-xl">
              <button
                className={`py-2 hover:border-b-2 transition-all duration-150 ease-in-out text-lg ${
                  category === "all" ? "border-b-2 border-black" : ""
                }`}
                onClick={handleClickCategory("all")}
              >
                All Products
              </button>
              <button
                className={`py-2 hover:border-b-2 transition-all duration-150 ease-in-out text-lg ${
                  category === "necklaces" ? "border-b-2 border-black" : ""
                }`}
                onClick={handleClickCategory("necklaces")}
              >
                Necklaces
              </button>
              <button
                className={`py-2 hover:border-b-2 transition-all duration-150 ease-in-out text-lg ${
                  category === "lighters" ? "border-b-2 border-black" : ""
                }`}
                onClick={handleClickCategory("lighters")}
              >
                Lighters
              </button>
              <button
                className={`py-2 hover:border-b-2 transition-all duration-150 ease-in-out text-lg ${
                  category === "gadgets" ? "border-b-2 border-black" : ""
                }`}
                onClick={handleClickCategory("gadgets")}
              >
                Gadgets
              </button>
            </div>
          </div>
          <div className="col-start-1 col-end-4 row-start-2 row-end-2 sm:pt-0 pt-20">
            <ProductList
              category={category}
              selectedOption={selectedOption}
            ></ProductList>
          </div>
          <div className="flex flex-col gap-1 items-start text-center  justify-start col-start-3 col-end-3 row-start-1 row-end-1 col-span-1 sm:pl-0 ">
            <h1 className="h-10 flex items-center justify-center">Sort By:</h1>
            <div>
              <select
                className="px-5 h-10 flex rounded"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="popularity">Popularity</option>
                <option value="High">High To Low</option>
                <option value="Low">Low To High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
