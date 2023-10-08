import banner from "../../assets/banner1.jpg";
const HomeBanner = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-orange-400 first-letter:text-7xl">
            Smart Event
          </h1>
          <p className="mb-5">
            At Smart Event, we specialize in crafting memorable and impactful
            corporate events that exceed expectations. With years of experience
            and a commitment to excellence, we take care of every detail, from
            concept to execution..
          </p>
          <button className="btn bg-orange-400">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
