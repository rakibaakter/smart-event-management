const Review = ({ review }) => {
  const { profile } = review;
  return (
    <div className="testimonial px-24 p-10 text-white">
      <div className="flex items-center">
        <img
          className="h-40 w-40 rounded-full mr-10"
          src={review.profile}
          alt={review.name}
        />
        <div className="text-left">
          <h3 className="text-3xl font-semibold">{review.name}</h3>
          <p className="font-medium ">{review.position}</p>
          <div className="rating text-orange-400 font-bold text-2xl">
            {review.rating} / 5
          </div>
        </div>
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
