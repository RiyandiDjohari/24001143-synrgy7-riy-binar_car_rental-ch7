import { DatePicker, DatePickerProps, Form, Input, Select, TimePicker, TimePickerProps } from "antd";
import { useState } from "react";
import { GoPeople } from "react-icons/go";

const { Option } = Select;

const layout = {
  labelCol: { span: 20 },
  wrapperCol: { span: 32 },
};

const FilterCar = ({ filterCars }: any) => {
  const [form] = Form.useForm();
  const [tanggal, setTanggal] = useState<any>("");
  const [waktu, setWaktu] = useState<any>("");

  const onTypeChange = (value: string) => {
    console.log(value);
  };

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date);
    setTanggal(dateString);
  };

  const onTimeChange: TimePickerProps["onChange"] = (time, timeString) => {
    console.log(time);
    setWaktu(timeString);
  };

  const styles = {
    formItemStyle: {
      marginBottom: "0",
      // width: "200px",
      width: "100%",
      fontWeight: "600",
    },
  };

  const onFinish = (values: any) => {
    const { tipe, jumlah } = values;
    console.log(tipe, tanggal, waktu, jumlah);
    filterCars(tipe, tanggal, waktu, jumlah);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="bg-[#FFF] shadow-lg rounded-lg max-w-[1200px] relative -mt-16 p-6 mx-6 md:mx-0 lg:mx-auto">
      <Form
        {...layout}
        layout="vertical"
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        className="flex flex-col md:flex-row items-center justify-between w-full gap-4"
      >
        <div className="flex flex-col lg:flex-row gap-4 w-full md:w-[40%]">
          <Form.Item name="tipe" label="Tipe Driver" rules={[{ required: true }]} style={styles.formItemStyle}>
            <Select placeholder="-- Pilih Tipe Driver --" onChange={onTypeChange} allowClear>
              <Option value="true">Dengan Sopir</Option>
              <Option value="false">Tanpa Sopir (Lepas Kunci)</Option>
            </Select>
          </Form.Item>

          <Form.Item name="tanggal" label="Tanggal" rules={[{ required: true }]} style={styles.formItemStyle}>
            <DatePicker
              onChange={onDateChange}
              placeholder="Pilih Tanggal"
              format={"YYYY-MM-DD"}
              style={{ width: "100%", height: "auto" }}
            />
          </Form.Item>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full md:w-[40%]">
          <Form.Item name="waktu" label="Waktu Jemput" rules={[{ required: true }]} style={styles.formItemStyle}>
            <TimePicker onChange={onTimeChange} format="HH:mm" style={{ width: "100%" }} placeholder="Pilih Waktu" />
          </Form.Item>

          <Form.Item
            name="jumlah"
            label="Jumlah Penumpang"
            rules={[{ required: false, max: 2 }]}
            style={styles.formItemStyle}
          >
            <Input type="number" placeholder="Jumlah Penumpang" addonAfter={<GoPeople />} />
          </Form.Item>
        </div>

        
          <div className="flex justify-center items-center gap-4 my-auto flex-row md:flex-col xl:flex-row">
            <button className="btn-primary w-full text-nowrap" type="submit">
              Cari Mobil
            </button>
            <button type="button" onClick={onReset} className="btn-reset w-full">
              Reset
            </button>
          </div>
      </Form>
    </div>
  );
};

export default FilterCar;
