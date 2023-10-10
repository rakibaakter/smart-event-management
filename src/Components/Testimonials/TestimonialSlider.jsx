import useAuthInfoHooks from "../../Hooks/useAuthInfoHooks";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Review from "./review";

const TestimonialSlider = () => {
  const { reviews } = useAuthInfoHooks();
  // console.log(reviews);

  return (
    <div className=" text-center my-32 px-2 md:px-10 lg:px-28">
      <h2 className="text-3xl font-bold text-gray-400 border-b-orange-400 my-6">
        Happy Clients
      </h2>
      <p className="mb-4 text-xl text-orange-400">
        We are constantly trying to express ourselves and actualize our dreams.
        <br />
        If you have the opportunity to play.
      </p>

      <div className="testimonial-slider md:p-6">
        <AwesomeSlider className="h-72">
          {reviews.map((review) => (
            <div key={review.id}>
              <Review review={review} />
            </div>
          ))}
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
