import CTA from "../../components/CTA";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import OurServices from "../../components/OurServices";
import Testimonial from "../../components/Testimonial";
import WhyUs from "../../components/WhyUs";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero hideButton={false} />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
