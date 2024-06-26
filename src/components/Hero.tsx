import { Link } from "react-router-dom";
import heroBanner from "../assets/bg-car.svg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hero = ({ hideButton } : any) => {
  return (
    <section
      className="bg-secondary py-[7rem] md:py-0 min-h-[70vh] flex justify-center items-center relative"
      id="main-section"
    >
      <div className="container flex flex-col items-center md:flex-row gap-8">
        <div className="basis-1/2 d-flex flex-col justify-center items-start">
          <h1 className="headline">Sewa & Rental Mobil Terbaik di Kawasan Sulawesi Tengah</h1>
          <p className="description w-full md:w-10/12">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu
            siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
          </p>

          {!hideButton && (
            <Link to={"/cari-mobil"}>
              <button className="btn-primary">Mulai Sewa Mobil</button>
            </Link>
          )}
        </div>
        <div className="basis-1/2 z-10">
          <img src={heroBanner} alt="image" />
        </div>
        <div className="bg-[#091B6F] absolute w-[95%] h-[25%] sm:h-[30%] md:w-[50%] md:h-[50%] right-0 bottom-0 rounded-tl-[100px]"></div>
      </div>
    </section>
  );
};

export default Hero;
