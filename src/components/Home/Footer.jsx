import logo from "../../assets/LogoWhite.svg";
import { CartContext } from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
export function Footer() {
  const { setCategory } = useContext(CartContext);
  return (
    <div>
      <div className="h-[calc(25vh)] bg-footerbg flex flex-col items-center justify-around text-white py-3 font-roboto gap-10 sm:min-h-[400px] min-h-[900px] relative">
        <div>
          <img src={logo} className="w-52" alt="" />
        </div>
        <div className="flex sm:flex-row flex-col sm:pl-0 pl-7 sm:gap-0 gap-7 justify-around w-full ">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-xl">Shop</h1>
            <ul className="text-gray-400 flex flex-col gap-3">
              <Link to={"/products"} onClick={() => setCategory("lighters")}>
                <li>
                  <button>Lighters</button>
                </li>
              </Link>
              <Link to={"/products"} onClick={() => setCategory("necklaces")}>
                <li>
                  <button>Necklaces</button>
                </li>
              </Link>
              <Link to={"/products"} onClick={() => setCategory("gadgets")}>
                <li>
                  <button>Gadgets</button>
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-xl">Customer Service</h1>
            <ul className="text-gray-400 flex flex-col gap-3">
              <li>
                <button>Contact Us</button>
              </li>
              <li>
                <button>FAQs</button>
              </li>
              <li>
                <button>Shipping & Returns</button>
              </li>
              <li>
                <button>Privacy Policy</button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-xl">Connect</h1>
            <ul className="text-gray-400 flex flex-col gap-3">
              <li>
                <button>Facebook</button>
              </li>
              <li>
                <button>Twitter</button>
              </li>
              <li>
                <button>Instagram</button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-xl">Contact Us</h1>
            <ul className="text-gray-400 flex flex-col gap-3">
              <li>
                <button>Address: 1234 Main Street,City</button>
              </li>
              <li>
                <button>Email: FlameHaven@support.com</button>
              </li>
              <li>
                <button>Phone: +1 123-456-7890</button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-gray-400">
            © 2023 Flame Haven LLC. All right reserved
          </h1>
        </div>
      </div>
    </div>
  );
}
