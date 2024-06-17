import { whyUsItem } from "../constant";
import React from "react";

const WhyUs = () => {
  return (
    <section className="pt-[100px]" id="why-us">
      <div className="container">
        <div className="text-center xl:text-start">
          <h2 className="title">Why Us</h2>
          <p className="description">Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-wrap md:flex-row gap-8 my-6">
          {whyUsItem.map((item, i) => (
            <div className="card" key={i}>
              <div className={`${item.color} p-2 rounded-full text-gray-50 text-[24px]`}>{React.createElement(item.icon)}</div>
              {/* <i className="bi bi-hand-thumbs-up bg-[#f9cc00] "></i> */}
              <h5 className="font-bold text-[16px]">{item.title}</h5>
              <p className="content">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
