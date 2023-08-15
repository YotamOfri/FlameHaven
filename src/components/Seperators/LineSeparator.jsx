import Pen from "../../assets/Pen.svg";
export function LineSeperator() {
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="w-5/12 h-1 bg-black rounded-md"></div>
      <img src={Pen} className="w-5" alt="" />
      <div className=" w-5/12 h-1 bg-black rounded-md"></div>
    </div>
  );
}
