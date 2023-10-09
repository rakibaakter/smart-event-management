import banner from "../../assets/banner1.jpg";
import History from "../About/History";
const HomeBanner = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-orange-400 first-letter:text-7xl">
            Smart Event
          </h1>
          <p className="max-w-md text-center mx-auto">
            We <span className="text-2xl">Smart Event</span>, here to help you
            by organizing your any corporate events smoothly. We believe in
            <br />
            <span className="text-2xl italic font-semibold">
              "Client Satisfaction Are The Blessing."
            </span>
          </p>
          <History />
          <button className="btn bg-orange-400 text-white hover:text-gray-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
