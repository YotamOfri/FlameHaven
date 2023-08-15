import { LineSeperator } from "../Seperators/LineSeparator";
import point from "../../assets/point.svg";
import { Images } from "./SecondPageImge";
import { Link } from "react-router-dom";
import { CartContext } from "../Context";
import { useContext } from "react";
export function SecondPage() {
  const { setCategory } = useContext(CartContext);
  return (
    <div>
      <div className="h-[calc(85vh)] min-h-[650px] max-h-[900px] bg-white flex flex-col items-center justify-between py-3 font-roboto gap-5 p-4 mb-4">
        <div className=" relative flex items-end">
          <h1 className=" text-5xl opacity-30 font-bold left-0">Products</h1>
          <h2 className="absolute left-5 -bottom-2 font-extrabold text-xl w-full">
            WHAT WE OFFER
          </h2>
        </div>
        <div className="w-full flex sm:flex-row sm:min-h-max min-h-[900px] max-h-[900px] flex-col-reverse sm:justify-center lg:gap-32 gap-10 justify-center items-center ">
          {/* SecondPageImage.jsx */}
          <Images></Images>
          {/* text */}
          <div className="flex flex-col gap-6 sm:justify-normal">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-5xl font-bold sm:text-left text-center">
                Arrowhead Pendant
              </h1>
              <h2 className="text-2xl sm:text-left text-center">
                flame Haven&apos;s best seller Necklace
              </h2>
            </div>
            <ul className="flex sm:flex-col flex-wrap gap-6 sm:justify-normal justify-center">
              <li className="flex gap-4 sm:w-auto w-2/5 sm:bg-transparent bg-slate-100 rounded-sm items-center">
                <img
                  src={point}
                  className="sm:w-auto w-7 rotate-12"
                  alt="point"
                />
                <p className="sm:text-base text-sm">Quality Stainless Steel</p>
              </li>
              <li className="flex gap-4 sm:w-auto w-2/5 sm:bg-transparent bg-slate-100 rounded-sm items-center">
                <img
                  src={point}
                  className="sm:w-auto w-7 rotate-45"
                  alt="point"
                />
                <p className="sm:text-base text-sm">
                  Arrowhead Design Is Nice And Unique
                </p>
              </li>
              <li className="flex gap-4 sm:w-auto w-2/5 sm:bg-transparent bg-slate-100 rounded-sm items-center ">
                <img src={point} className="sm:w-auto w-7" alt="point" />
                <p className="sm:text-base text-sm">Strong water Resistance</p>
              </li>
              <li className="flex gap-4 sm:w-auto w-2/5 h- sm:bg-transparent bg-slate-100 rounded-sm items-center">
                <img
                  src={point}
                  className="sm:w-auto w-7 rotate-180"
                  alt="point"
                />
                <p className="sm:text-base text-sm">Safe and Easy to Use</p>
              </li>
            </ul>
            <div className="hidden sm:flex gap-6">
              <Link to={"/products"} onClick={() => setCategory("necklaces")}>
                <button className="w-36 h-12 rounded-sm hover:opacity-75 transition-all duration-500 ease-in-out bg-black text-white">
                  All Necklace&apos;s
                </button>
              </Link>
            </div>
          </div>
        </div>
        <LineSeperator></LineSeperator>
      </div>
    </div>
  );
}
