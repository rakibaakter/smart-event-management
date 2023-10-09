import Marquee from "react-fast-marquee";
import sponser1 from "../../assets/sponser1.png";
import sponser2 from "../../assets/sponser2.png";
import sponser3 from "../../assets/sponser3.png";
import sponser4 from "../../assets/sponser4.png";
import sponser5 from "../../assets/sponser5.png";
import sponser6 from "../../assets/sponser6.png";
import sponser7 from "../../assets/sponser7.png";

const sponserArray = [
  sponser1,
  sponser2,
  sponser3,
  sponser4,
  sponser5,
  sponser6,
  sponser7,
];

const Sponsers = () => {
  return (
    <div className=" text-center my-20 px-2 md:px-10 lg:px-28">
      <h2 className="text-3xl font-bold text-gray-400 border-b-orange-400 my-6">
        Our Sponsers
      </h2>

      <div>
        <Marquee>
          {sponserArray.map((sponser, ind) => (
            <img key={ind} className=" h-16 w-40 mx-4" src={sponser} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsers;
