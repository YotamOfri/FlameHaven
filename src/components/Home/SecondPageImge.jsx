import necklace_main from "../../assets/Necklace/necklaceMain.png";
import necklace_modle from "../../assets/Necklace/modle.png";
import necklace_details from "../../assets/Necklace/details.png";
import necklace_withbackground from "../../assets/Necklace/withBackground.png";
import necklace_white from "../../assets/Necklace/white.png";
import { useState } from "react";
export function Images() {
  const [currrentImage, setCurrentImage] = useState(necklace_main);
  const Necklaces = [
    necklace_main,
    necklace_modle,
    necklace_details,
    necklace_withbackground,
    necklace_white,
  ];
  const handleClick = (image) => () => {
    setCurrentImage(image);
  };
  return (
    <div className="flex sm:flex-row-reverse flex-col sm:gap-0 gap-4">
      {/* main View */}
      <div>
        <img
          src={currrentImage}
          className="sm:w-84 w-82 border border-black"
          alt=""
        />
      </div>
      {/* Other Options */}
      <div className="sm:pr-2 flex sm:flex-col sm:pt-0 pt-7 gap-4">
        {Necklaces.map((necklace) => {
          return (
            <div key={necklace}>
              <img
                src={necklace}
                className={`sm:w-16 w-14 border object-contain border-black cursor-pointer  ${
                  necklace === currrentImage
                    ? " shadow-xl shadow-black transition-all duration-250 ease-in-out"
                    : ""
                }`}
                alt=""
                onClick={handleClick(necklace)}
              />
            </div>
          );
        })}
      </div>
      <div className="sm:hidden flex gap-6 justify-center">
        <button className="w-36 h-12 rounded-sm hover:opacity-75 transition-all duration-500 ease-in-out bg-black text-white">
          Add To Cart
        </button>
        <button className=" w-36 h-12 rounded-sm hover:bg-black hover:text-white transition-all duration-500 ease-in-out border border-black">
          All Necklace&apos;s
        </button>
      </div>
    </div>
  );
}
