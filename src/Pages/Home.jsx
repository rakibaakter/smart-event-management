import HomeBanner from "../Components/Header/HomeBanner";
import History from "../Components/About/History";
import ServiceContainer from "../Components/Services/ServiceCOntainer";
import TestimonialSlider from "../Components/Testimonials/TestimonialSlider";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <History />
      <ServiceContainer />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
