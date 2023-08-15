import capterra from "../../assets/Logos/capterra.svg";
import wirecutter from "../../assets/Logos/wirecutter.svg";
import crozdesk from "../../assets/Logos/crozdesk.svg";
import star from "../../assets/fullstar.svg";
import halfstar from "../../assets/halfstar.svg";
import emptystar from "../../assets/emptystar.svg";
export function ThirdPage() {
  return (
    <div>
      <div className="h-[calc(45vh)] bg-white flex flex-col items-center  py-3 font-roboto gap-10 sm:min-h-[300px] min-h-[400px]">
        <div className=" relative flex items-end">
          <h1 className=" text-5xl opacity-30 font-bold left-0">Reviews</h1>
          <h2 className="absolute left-5 -bottom-2 font-extrabold text-xl w-full">
            Why Choose Us
          </h2>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-6">
            <div>
              <img src={capterra} className="w-44" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex ">
                <img src={star} className="w-7" alt="" />
                <img src={star} className="w-7" alt="" />
                <img src={star} className="w-7" alt="" />
              </div>
              <div className="flex">
                <img src={star} className="w-7" alt="" />
                <img src={halfstar} className="w-7" alt="" />
              </div>
            </div>
            <div className="text-xl text-gray-400">4.5 out of 5</div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div>
              <img src={wirecutter} className="w-44" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex ">
                <img src={star} className="w-7" alt="" />
                <img src={star} className="w-7" alt="" />
                <img src={star} className="w-7" alt="" />
              </div>
              <div className="flex">
                <img src={star} className="w-7" alt="" />
                <img src={emptystar} className="w-7" alt="" />
              </div>
            </div>
            <div className="text-xl text-gray-400">4 out of 5</div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div>
              <img src={crozdesk} className="w-44" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex ">
                <img src={star} className="w-7" alt="" />
                <img src={star} className="w-7" alt="" />
                <img src={star} className="w-7" alt="" />
              </div>
              <div className="flex">
                <img src={star} className="w-7" alt="" />
                <img src={star} className="w-7" alt="" />
              </div>
            </div>
            <div className="text-xl text-gray-400">5 out of 5</div>
          </div>
        </div>
      </div>
    </div>
  );
}
