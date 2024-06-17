import ourServicesImg from "../assets/img-service.svg";
import listStyleIcon from "../assets/list-style.svg";
import { ourServicesList } from "../constant";

const OurServices = () => {
  return (
    <section className="pt-[100px]" id="our-services">
      <div className="container flex flex-col md:flex-row gap-6 lg:gap-8">
        <div className="basis-1/2">
          <img
            src={ourServicesImg}
            alt="image"
            className="m-auto w-full h-full sm:w-[80%] md:w-full lg:w-[80%] xl:w-[80%] object-contain"
          />
        </div>
        <div className="basis-1/2 pt-10">
          <h1 className="title">Best Car Rental for any kind of trip in Central Sulawesi !</h1>
          <p className="description">
            Sewa mobil di Sulawesi Tengah bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
            kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </p>
          <div className="flex justify-start w-full">
            <ul className="flex-1 space-y-4 description w-100">
              {ourServicesList.map((item, i) => (
                <li className="flex items-center" key={i}>
                  <img src={listStyleIcon} alt="icon" className="flex-none w-6 h-full" />
                  <span className="ms-4">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
