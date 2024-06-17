import type { CSSProperties } from "react";
import { Collapse, theme, CollapseProps } from "antd";
import { faqItems } from "../constant";

const FAQ = () => {
  const { token } = theme.useToken();
  const panelStyle: React.CSSProperties = {
    marginBottom: 16,
    background: "#fefefe",
    borderRadius: token.borderRadiusOuter,
    border: "1px solid #D4D4D4",
    fontFamily: "Helvetica"
  };

  const text = `
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Unde distinctio aperiam itaque, similique doloremque facilitatione, 
  uno tempo vicente del busquet contreao la nina vergonia uni carrasco?
`;

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (panelStyle) => {
    return faqItems.map((item, i) => ({
      key: i,
      label: item,
      children: <p>{text}</p>,
      style: panelStyle,
    }));
  };

  return (
    <section className="pt-[100px]" id="faq">
      <div className="container flex flex-col md:flex-row">
        <div className="basis-[40%] lg:basis-[45%]">
          <h2 className="title text-center md:text-start">Frequently Asked Question</h2>
          <p className="description text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="basis-[60%] lg:basis-[55%] mt-2 md:mt-0">
          <Collapse bordered={false} items={getItems(panelStyle)} defaultActiveKey={["0"]} expandIconPosition="end" style={{ background: token.colorBgContainer }} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
