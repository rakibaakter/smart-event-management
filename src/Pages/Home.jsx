import HomeBanner from "../Components/Header/HomeBanner";
import History from "../Components/About/History";
import ServiceContainer from "../Components/Services/ServiceCOntainer";
import TestimonialSlider from "../Components/Testimonials/TestimonialSlider";
import Sponsers from "../Components/Sponsers/Sponsers";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <History />
      <ServiceContainer />
      <TestimonialSlider />
      <Sponsers />
    </div>
  );
};

export default Home;
