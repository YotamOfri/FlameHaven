import { FirstPage } from "./components/Home/FirstPage";
import { Footer } from "./components/Home/Footer";
import { SecondPage } from "./components/Home/SecondPage";
import { ThirdPage } from "./components/Home/ThirdPage";
import PropTypes from "prop-types";
function Home({ handleClick }) {
  return (
    <>
      <div className="flex flex-col justify-between h-fit">
        <FirstPage handleClick={handleClick}></FirstPage>
        <div className="flex flex-col sm:gap-0 justify-between sm:min-h-max min-h-[1450px]">
          <SecondPage></SecondPage>
          <ThirdPage></ThirdPage>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
Home.propTypes = {
  handleClick: PropTypes.func,
};
