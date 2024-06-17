import { Carousel } from "antd";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { testimonialItem } from "../constant";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#F1F3FF",
  gap: 24,
};
const Testimonial = () => {
  return (
    <section className="pt-[100px]" id="testimonial">
      <div className="container">
        <h2 className="title text-center">Testimonial</h2>
        <p className="description text-center">Berbagai review positif dari para pelanggan kami</p>
        <Carousel
          arrows
          autoplay
          infinite={true}
          // prevArrow={<FaChevronLeft color="#000" />}
          // nextArrow={<FaChevronRight color="#000" />}
        >
          {testimonialItem.map((item, i) => (
            <div
              key={i}
              style={contentStyle}
              className="border-[#D0D0D0] border-[1px] rounded-lg py-10 px-8 lg:py-[70px] lg:px-8 bg-[#f1f3ff]"
            >
              <div className="mx-auto flex justify-center items-center flex-col lg:flex-row gap-x-12 gap-y-6 lg:max-w-[800px] px-12">
                <img src={item.image} alt="image" className="w-20 h-20 object-cover rounded-full" />
                <div className="flex flex-col justify-center items-start gap-4">
                  <div className="flex gap-1 self-center lg:self-start">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item}>
                        <FaStar color="#f9cc00" />
                      </div>
                    ))}
                  </div>
                  <p className="content">{`"${item.testimoni}"`}</p>
                  <h5 className="">{`${item.name} ${item.age} ${item.address}`}</h5>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
