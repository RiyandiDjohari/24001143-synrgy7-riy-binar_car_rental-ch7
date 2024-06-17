import { FaFacebook, FaInstagram, FaRegEnvelope, FaTwitch } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="pt-[100px] pb-[50px]" id="footer">
      <div className="container grid gap-4 items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="">
          <p className="description">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p className="description">binarcarrental@gmail.com</p>
          <p className="description">081-233-334-808</p>
        </div>
        <div className="justify-self-start lg:justify-self-center">
          <a href="#our-services" className="mb-4 font-semibold text-sm block">
            Our services
          </a>
          <a href="#why-us" className="mb-4 font-semibold text-sm block">
            Why Us
          </a>
          <a href="#testimonial" className="mb-4 font-semibold text-sm block">
            Testimonial
          </a>
          <a href="#faq" className="mb-4 font-semibold text-sm block">
            FAQ
          </a>
        </div>
        <div className="">
          <p className="description">Connect with us</p>
          <div className="flex gap-2 mb-4">
            <div className="text-[20px] bg-primary rounded-full py-[10px] px-[10px] text-white cursor-pointer">
              <FaFacebook />
            </div>
            <div className="text-[20px] bg-primary rounded-full py-[10px] px-[10px] text-white cursor-pointer">
              <FaInstagram />
            </div>
            <div className="text-[20px] bg-primary rounded-full py-[10px] px-[10px] text-white cursor-pointer">
              <RiTwitterXFill />
            </div>
            <div className="text-[20px] bg-primary rounded-full py-[10px] px-[10px] text-white cursor-pointer">
              <FaRegEnvelope />
            </div>
            <div className="text-[20px] bg-primary rounded-full py-[10px] px-[10px] text-white cursor-pointer">
              <FaTwitch />
            </div>
          </div>
        </div>
        <div className="justify-self-start lg:justify-self-center">
          <p className="description">&copy; Copyright Binar 2024</p>
          <a href="#" className="logo cursor-pointer hover:text-[#0D28A6]">
            BCR
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
