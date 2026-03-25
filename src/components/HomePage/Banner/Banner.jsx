import bannerBg from "../../../assets/bg-shadow.png";
import bannerLogo from "../../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="container mx-auto bg-black rounded-2xl">
      <div
        className=" w-full py-5 bg-cover bg-no-repeat rounded-2xl text-white"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="flex flex-col items-center  text-center mx-auto md:space-y-2">
          <img src={bannerLogo} alt="" />

          <h2 className="font-bold text-xl md:text-4xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p>Beyond Boundaries Beyond Limits</p>
          <button className="border py-3 rounded-xl px-1 cursor-pointer">
            <span className="bg-[#E7FE29] p-2 rounded-xl font-semibold text-xl text-black">Claim Free Credit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
