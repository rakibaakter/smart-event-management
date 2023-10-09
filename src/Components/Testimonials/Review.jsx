import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import PropTypes from "prop-types";

const Review = ({ review }) => {
  const { profile, name, position, rating, comment } = review;

  return (
    <div className="testimonial px-2 md:px-24 py-6 text-white">
      <div className="flex items-center my-3">
        <img
          className=" h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full "
          src={profile}
          alt={name}
        />
        <div className="text-left ml-4">
          <h3 className="md:text-3xl font-semibold">{name}</h3>
          <p className="font-medium ">{position}</p>
          <div className="rating text-orange-400 font-bold text-2xl">
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar />}
            />
          </div>
        </div>
      </div>
      <p className="my-3">{comment}</p>
    </div>
  );
};

export default Review;

Review.propTypes = {
  review: PropTypes.object,
};
