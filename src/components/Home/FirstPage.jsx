import { Link } from "react-router-dom";
import background from "../../assets/background.jpg";
import { Separator } from "../Seperators/SeparatorWave";
import PropTypes from "prop-types";
export function FirstPage({ handleClick }) {
  return (
    <div className="h-full sm:pt-40 pt-10 w-full flex flex-col-reverse relative font-roboto">
      {/* backgroudImage */}
      <Separator></Separator>
      <img
        src={background}
        className="w-full h-full absolute sm:object-right object-custom object-cover -z-20"
        alt=""
      />
      {/* text */}
      <div className="h-full sm:pb-32 py-20  px-9 flex flex-col justify-center">
        <div className="flex flex-col sm:h-3/4 h-5/6 justify-between gap-10">
          <div className="flex flex-col  gap-5">
            <div>
              <h1 className="font-bold text-5xl sm:w-100 w-80 leading-tight  sm:leading-relaxed">
                Flame Haven Where Elegance Meets Innovation.
              </h1>
            </div>
            <div>
              <h3 className="font-semibold sm:w-100 w-64 ">
                Exceptional Quality, Unmatched Style: Your Source for Jewelry,
                Gadgets, and Lighters That Elevate Every Moment.
              </h3>
            </div>
          </div>
          <div className="pt-10">
            <Link to={"/products"} onClick={handleClick(1)}>
              <button className="bg-black text-white py-3 px-8 hover:opacity-75 rounded-sm shadow-2xl transition-all duration-500 ease-in-out shadow-black">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
FirstPage.propTypes = {
  handleClick: PropTypes.func,
};
